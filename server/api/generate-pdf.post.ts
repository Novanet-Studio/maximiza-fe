import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { htmlContent, cssContent } = body;

  if (!htmlContent) {
    throw createError({ statusCode: 400, statusMessage: 'Falta contenido HTML' });
  }

  let browser;

  try {
    // LÓGICA HÍBRIDA: LOCAL VS PRODUCCIÓN
    if (process.env.NODE_ENV === 'production' || process.env.NETLIFY) {
      // --- CONFIGURACIÓN PARA NETLIFY / AWS LAMBDA ---
      
      // Configuración de gráficos para ahorrar memoria
      chromium.setGraphicsMode = false;
      
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });

    } else {
      // --- CONFIGURACIÓN PARA LOCALHOST (WINDOWS/MAC/LINUX) ---
      // puppeteer-core no descarga Chrome, necesitamos decirle dónde está el tuyo.
      // Ajusta esta ruta según tu sistema operativo:
      
      // Windows: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
      // Mac: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      // Linux: '/usr/bin/google-chrome'
      
      const localExecutablePath = 
        process.platform === 'win32' 
          ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' 
          : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

      browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        executablePath: localExecutablePath, 
        headless: true
      });
    }

    const page = await browser.newPage();

    const fullHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          ${cssContent}
          body { 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page { margin: 0; size: A4; }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;

    await page.setContent(fullHtml, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '0mm', right: '0mm' }
    });

    await browser.close();

    setHeaders(event, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="planilla.pdf"',
    });

    return pdfBuffer;

  } catch (error) {
    console.error("ERROR GENERATING PDF:", error);
    // Asegurarse de cerrar el navegador si falla
    if (browser) await browser.close();
    
    throw createError({
      statusCode: 500,
      statusMessage: `Error generando PDF: ${error.message}`
    });
  }
});