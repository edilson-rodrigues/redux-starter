function add(a) {
  return function (b) {
    return a + b;
  }
}

/* const add1 = add(1);
add1(5);

console.log(add1(5)); */

//simples parameter

console.log("add", add(1)(5)); //add(1, 5)

// exemple arrow function

const add2 = a => b => a + b; //(a, b) => a + b;
console.log(add2(2)(5)); // 7