export const camelize = (str: String) => {
  if (str.split(' ').length === 1) {
    return str.toLowerCase();
  }
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};
