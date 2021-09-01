const stringLength = require('./stringCount');

test('return 6', () => {
  expect(stringLength('Bright')).toBe(6);
});

test('do not return text', () => {
  expect(stringLength('Lomocotive')).not.toBe('six');
});

test('Not a string', () => {
  expect(stringLength(1000)).toBe('Enter a string')
});