function createCssText(cssObj: any): string {
  if (typeof cssObj !== 'object' && cssObj !== null) return cssObj;
  let cssText = '';
  Object.keys(cssObj).forEach((key): void => {
    const name = key.replace(/([A-Z]){1}/g, (args) => {
      return '-' + args.toLocaleLowerCase();
    });
    cssText += `${name}: ${cssObj[key]};`;
  });
  console.log(cssText);
  return cssText;
}

export { createCssText };
