// What is JavaScript?
console.log(
  "What is JavaScript? JavaScript is a programming language that allows you to add interactivity to web pages."
);
alert("Hello, JavaScript!");

// Data Types
console.log("Number:", 42);
console.log("String:", "Ana");
console.log("Boolean:", true);
console.log("Null:", null);
console.log("Undefined:", undefined);
console.log("Object:", { a: 1 });
console.log("Array:", [1, 2, 3]);

// Variables
let city = "New York";
const PI = 3.14159;
var oldWay = "Avoid using var";
console.log("city:", city);
console.log("PI:", PI);
console.log("oldWay:", oldWay);

// Operators
let a = 5,
  b = 3;

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);

// Loops
console.log("for loop:");
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("while loop:");

let j = 0;

while (j < 5) {
  console.log(j);
  j++;
}

// Functions
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Matías"));
console.log(greet("Student"));
