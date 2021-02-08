// Load the FP build for immutable auto-curried iteratee-first data-last methods.
const { pipe } = require('lodash/fp');


let input = "  JavaScript ";
/* let output = "<div>" + input.trim() + "</div>"; */

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrapInDiv);
console.log(transform(input)); 