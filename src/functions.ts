// ## Functions(توابع)
// Let's see how TypeScript helps us prevent common problems when working with functions.
// By default the return type of the function is void which means it does not return value.
/* 
But when we explicitly type return 0 inside function scope/body, TypeScript compiler will infer the return type of the function for us which in this case is number. But as a best practice we should always properly annotate our functions so all the parameters as well as the return type should be explicitly annotated. Specially if you are building an API for other people to use.
For the unused local variables(variables declared inside function) we have an amazing tsconfig option called noUnusedLocals that we set equal to true. now every unused variable inside a function will be highlighted.

When we make a parameter optional, TypeScript Compiler gives us an error "Object is possibly 'undefined'.ts(2532)", it means if we don't pass argument when we call the calculateTax function, undefined will be used and we cannot compare undefined with 2022.

*/

// Second Solution Highly Recommended
function calculateTax(income: number, taxYear = 2022): number {
  // let x;
  // we can get rid of this Object is possibly 'undefined'.ts(2532) error using two options. first one by using JavaScript tricks, we wrap taxYear in parenthesis and then using logical OR operator(||) followed by default value of 2022
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

// First Solution

// function calculateTax(income: number, taxYear?: number): number {
//   // let x;
//   // we can get rid of this Object is possibly 'undefined'.ts(2532) error using two options. first one by using JavaScript tricks, we wrap taxYear in parenthesis and then using logical OR operator(||) followed by default value of 2022
//   if ((taxYear || 2022) < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000, 2022, 20); // Expected 2 arguments, but got 3.ts(2554)
calculateTax(10_000);

/*
Conclusion
----------
A quickly recap for what we have learned in this lesson:
1. As a best practice always explicitly annotate functions(all the parameters as well as return type of the function)
2. Enable these three compiler options in your tsconfig.json file:
2.1 noUnusedLocals: true
2.2 noUnusedParameters: true
2.3 noImplicitReturns: true

*/
