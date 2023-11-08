const { printNumbers, sumNumbers, findMax } = require('./loopUtils');

test('Print numbers from 1 to 5', () => {
  expect(() => printNumbers(1, 5)).toConsoleLog([
    '1', '2', '3', '4', '5'
  ]);
});

test('Sum of numbers from 1 to 5', () => {
  expect(sumNumbers(1, 5)).toBe(15);
});

test('Find maximum number', () => {
  expect(findMax([3, 7, 1, 9, 5])).toBe(9);
});