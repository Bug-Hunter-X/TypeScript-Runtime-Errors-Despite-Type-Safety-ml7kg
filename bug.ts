function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // Type safety
console.log(result); // Output: 8

result = subtract(10, 5); // Type safety
console.log(result); // Output: 5

result = add(5, "hello"); // Type error, but only during compilation