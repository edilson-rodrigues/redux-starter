const numbers = [1, 2, 3];

// adding
const index = numbers.indexOf(2);
const added = [
  ...numbers.slice(0, index),
  4,
  ...numbers.slice(index)
];

console.log('numbers', added);

// removing

const removed = numbers.filter(n => n !== 2);

console.log('removed', removed);

// updating
const updated = numbers.map(n => n === 2 ? 20 : n);
console.log('updated', updated);