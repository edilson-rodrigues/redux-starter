const { pipe } = require("lodash/fp");
/* 

1.Write code in a functional style to convert the input to the output: 

input = { tag: “JAVASCRIPT” } output = “(javascript)”

*/



const pickTag = obj => obj.tag;
const toLowerCase = str => str.toLowerCase();
const bracketify = str => `(${str})`;

const transform = pipe(pickTag, toLowerCase, bracketify);

const output = transform({ tag: "JAVASCRIPT" });
console.log('output', output); // output (javascript)