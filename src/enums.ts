// ## Enums
/*
Enums represent list of related constants, if you know C# or Java, you have seen enums before. They are the exact same concepts in TypeScript.
Let's say we want to represent the size of T-shirts as constants. one way is to declare three constants like this:
*/
// const small = 1;
// const medium = 2;
// const large = 3;  // with Enums we don't need these 3 constants.

// PascalCase naming convention
// Each member is also PascalCase
// By default, the TypeScript compiler assigns the first member the value of 0 and other members will be respectively assigned 1, 2 and so on.
// If we don't want these default values, we can explicitly assign them to values we want.
// If we define our enum as constant with the help of const keyword, the compiler will generate more optimised code.
const enum Size {
  Small = 1,
  Medium,
  Large,
}

// We can also have string values but if we assign value to the first member we have to explicitly set the value of each member.
// enum Size {
//   Small = "s",
//   Medium = "m",
//   Large = "l",
// }

// This syntax is how we use enums(a variable of type Size)
let mySize: Size = Size.Medium;
console.log(mySize);
