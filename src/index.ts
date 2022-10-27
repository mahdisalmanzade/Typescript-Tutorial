// Type Annotations
// let age: number = 26;
// age = "a"; // Type 'string' is not assignable to type 'number'.ts(2322)

// if (age < 50) age += 10;
// console.log(age);

// Type Annotation -  Primitives in TypeScript
let sales: number = 123_456_789; // Big numbers digits can be separated by underscore
// let sales = 123_456_789; // Type Infered or detected automatically by typescript
let course: string = "TypeScript";
let is_published: boolean = true; // In TypeScript we don't always have to annotate our variables because ts compiler can infere or detect the type of variables based on their value
let level; // TypeScript assume this variable as the type of the any(type any represent any kind of value). so if we declare a variable and dont initialize it typescript compiler assumes this variable is of the type any.
// this is against the whole idea of using typescript because we use ts for its type safety so we get type checking, so if we use the any type we essentially lose that feature and the major benefit of using typescript. so as a best practice we should avoid using the any type as much as possible.

// by explicitly annotating this parameter with the type any we are telling the compiler hey i know what i'm doing the document is of any type.
function render(document: any) {
  // TypeScript scream out Parameter 'document' implicitly has an 'any' type.ts(7006).
  // implicitly means we haven't explicitly or clearly set the type of this parameter so compiler is infering or guessing the type of this parameter.
  // let say this is part of a javascript project that we are trying to convert to typescript and at this point it's impossible for us to explicitly annotate this with a particular type so have to use any type here! and we have to options. one is to explicitly annotate it with any(document: any) but what if we have tons of errors of this kind ? we don't want to go to every function and explicitly annotate various parameters with any. there is nuclear option for that but it's not recommnded.( set noImplicitAny equal false in tsconfig.json)
  console.log(document); // Parameter 'document' implicitly has an 'any' type.ts(7006)
}
