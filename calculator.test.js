const calculator = require('./claculatorFunction');

describe('Calculator function', () => {
  describe('Add function', () => {
    test('add 10 & 14 to be 24', () => {
      expect(calculator.add(10, 14)).toBe(24);
    });
  
    test('add 10 & 20 to be 30', () => {
      expect(calculator.add(20, 10)).toBe(30);
    });
  
    test('add -10 & 14 to be 4', () => {
      expect(calculator.add(-10, 14)).toBe(4);
    });
  
    test('add 10 & -20 to be -10', () => {
      expect(calculator.add(10, -20)).toBe(-10);
    });
  });
  
  describe('Subtract function', () => {
    test('subtract 10 from 10 to be 0', () => {
      expect(calculator.subtract(10, 10)).toBe(0);
    });

    test('subtract 10 from -100 to be -110', () => {
      expect(calculator.subtract(-100, 10)).toBe(-110);
    });

    test('subtract 10 from 0 to be -10', () => {
      expect(calculator.subtract(0, 10)).toBe(-10);
    });

    test('subtract 0 from 1.5 to be 1.5', () => {
      expect(calculator.subtract(1.5, 0)).toBe(1.5);
    });
  });

  describe('Multiply function', () => {
    test('multiply 5 by 6 to be 30', () => {
      expect(calculator.multiply(5, 6)).toBe(30);
    });

    test('multiply 10 by 10 to be 100', () => {
      expect(calculator.multiply(10, 10)).toBe(100);
    });

    test('multiply -15 by 10 to be -150', () => {
      expect(calculator.multiply(-15, 10)).toBe(-150);
    });

    test('multiply 1.5 by 4 to be 2', () => {
      expect(calculator.multiply(1.5, 4)).toBe(6);
    });
  });

  describe('Divide function', () => {
    test('divide 4 by 2 to be 2', () => {
      expect(calculator.divide(4, 2)).toBe(2);
    });

    test('divide 25 by 5 to be 5', () => {
      expect(calculator.divide(25, 5)).toBe(5);
    });
    
    test('divide -40 by 2 to be 2', () => {
      expect(calculator.divide(-40, 2)).toBe(-20);
    });

    test('divide 2.5 by 5 to be 5', () => {
      expect(calculator.divide(2.5, 5)).toBe(0.5);
    });
  });  
});