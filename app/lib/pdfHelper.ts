export const getPageStyles = () => {
  if (typeof document === 'undefined') return '';

  let cssText = '';
  const styleSheets = Array.from(document.styleSheets);

  for (const sheet of styleSheets) {
    try {
      const cssSheet = sheet as CSSStyleSheet;
      const rules = cssSheet.cssRules || cssSheet.rules;
      if (rules) {
        for (let i = 0; i < rules.length; i++) {
          cssText += rules[i].cssText;
        }
      }
    } catch (e) {
      console.warn('Cannot read stylesheet: ', sheet?.href, e);
    }
  }

  cssText += `
    * { box-sizing: border-box; }
    body { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    .w-a4 { width: 100%; max-width: 210mm; margin: 0 auto; background: white; }
    @page { margin: 0; size: A4; }
  `;

  return cssText;
};
