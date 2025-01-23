# TypeScript Runtime Errors Despite Type Safety

This example demonstrates how TypeScript's type safety can help prevent certain errors during compilation, but runtime errors might still occur if the program has type errors that slip past the compiler's checks.  This is particularly common when dealing with external data sources or dynamic code generation where TypeScript's static analysis has limitations.

## The Bug

The `add` function is designed to add two numbers. While TypeScript will catch type errors at compile-time if you try to add a number to a string directly within the code, runtime errors can still happen if the values being added are obtained dynamically from a source where type checking isn't enforced (for example, user input, or data from an external API). 

## How to Reproduce

1. Compile and run the `bug.ts` file.  The first two operations are fine.
2.  Modify the code to make `result = add(5, "hello")`  comment the second add and uncomment the third add, then run it. TypeScript will throw a compilation error.
3. If the type error is not caught, at runtime there will be a runtime error. The TypeScript compiler is only able to catch this type error in this particular situation, because the parameters of the `add` function are explicitly typed.