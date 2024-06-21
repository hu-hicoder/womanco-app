export function text2Button(data: string, keywords: string[]): string {
  return keywords.reduce((acc, keyword) => {
    const regex = new RegExp(`(${keyword})`, 'g');
    return acc.replace(regex, `<button id="womanco" keyword="${keyword}">$1</button>`);
  }, data);
}