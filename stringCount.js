const stringLength = (string) => {
  if (typeof string !== typeof "some") {return 'Enter a string';}
  return string.length;
}

module.exports = stringLength;