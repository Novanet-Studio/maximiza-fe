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

    const isProduction = process.env.NETLIFY || process.env.NODE_ENV === 'production';

    if (isProduction) {
      console.log('Iniciando Chromium en modo Serverless...');

      chromium.setHeadlessMode = true;
      chromium.setGraphicsMode = false;

      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      });

    } else {

      const localExecutablePath = process.platform === 'win32'
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
        <style>
          ${cssContent}
          body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          @page { margin: 0; size: A4; }
        </style>
      </head>
      <body>
        ${htmlContent}
      </body>
      </html>
    `;


    await page.setContent(fullHtml, {
      waitUntil: 'load',
      timeout: 8000
    });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '10mm', bottom: '10mm', left: '0mm', right: '0mm' }
    });

    await browser.close();


    setHeaders(event, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="documento.pdf"',
    });

    return pdfBuffer;

  } catch (error: any) {
    console.error("ERROR CRÍTICO PDF:", error);
    if (browser) await browser.close();

    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});