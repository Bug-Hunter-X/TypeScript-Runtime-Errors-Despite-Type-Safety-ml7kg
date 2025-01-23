To prevent runtime errors in situations like this, it is recommended to perform runtime type checking using techniques like `typeof` to validate data before performing operations. This way even if TypeScript type checking misses an error, you can add additional checks to prevent unexpected runtime errors.

```typescript
function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both parameters must be numbers');
  }
  return a - b;
}

let result = add(5, 3); // Type safety
console.log(result); // Output: 8

result = subtract(10, 5); // Type safety
console.log(result); // Output: 5

// This will now throw an error at runtime
try {
    result = add(5, "hello");
} catch (e) {
    console.error(e);
}
```