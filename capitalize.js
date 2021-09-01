const capitalize = (string) => {
  const firstLetter = string[0];
  let otherLetters = '';
  for (let i = 1; i < string.length; i++) {
      otherLetters += string[i];
  }
  return `${firstLetter.toUpperCase()}${otherLetters.toLowerCase()}`;
}

console.log(capitalize('bright'));
module.exports = capitalize;