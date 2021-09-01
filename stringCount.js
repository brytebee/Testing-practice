const stringLength = (string) => {
  if (typeof string !== typeof "string") {return 'Enter a string';}
  return string.length;
}

module.exports = stringLength;