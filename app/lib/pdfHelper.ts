export const getPageStyles = () => {
  let cssText = "";

  for (const sheet of Array.from(document.styleSheets)) {
    try {
      const rules = sheet.cssRules || sheet.rules;
      if (rules) {
        for (const rule of Array.from(rules)) {
          cssText += rule.cssText + "\n";
        }
      }
    } catch (e) {
      console.warn(
        "No se pudo acceder a una hoja de estilos (posible bloqueo CORS):",
        sheet.href,
      );
    }
  }
  return cssText;
};
