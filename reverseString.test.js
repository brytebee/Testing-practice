const reverseString = require('./reverseString');

test('Reverse "Bright" to "thgirB"', () => {
    expect(reverseString('Bright')).toBe('thgirB');
});

test('Revere "Come and see" to ""', () => {
    expect(reverseString('Come and see')).toBe('ees dna emoC');
});