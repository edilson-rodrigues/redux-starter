// Load the FP build for immutable auto-curried iteratee-first data-last methods.
const { pipe } = require('lodash/fp');

let input = "  JavaScript ";

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

function wrap2(type) {
  return function (str) {
    return `<${type}>${str}</${type}>`;
  };
};

const transform2 = pipe(trim, toLowerCase, wrap2("span"));
console.log(transform2(input));