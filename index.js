const { printNumbers, sumNumbers, findMax } = require('./loopUtils');

console.log('Print numbers from 1 to 10:');
printNumbers(1, 10);

const sum = sumNumbers(1, 10);
console.log('Sum:', sum);

const max = findMax([3, 7, 1, 9, 5]);
console.log('Maximum:', max);