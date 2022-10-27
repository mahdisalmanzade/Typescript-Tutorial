// ## Tuples
// Tuples are fixed length arrays where each element has a particular type. we often use them when working with pair of values.
// imagine for each user we want to represent two values, an id and a name.(1, 'mahdi')
let user: [number, string] = [1, "Mahdi"]; // now we have a fixed length array with exactly two element nothing more nothing else, the first one number and the second one string
// If we try to access the first element, all the methods of the Number object will show up and if we try to access the second element all the methods and properties of String object will show up because of typescript intelisence or code completion.
console.log(user);
user[0].toFixed(); // all the property and methods of Number object show up
user[1].toLocaleUpperCase(); // all the property and methods of String object show up

/* tuples always are compiled to regular JavaScript arrays.
push method is a troublesome in TypeScript we can call this method and store a third element in this array and the compiler is not going to complain here. i believe this is one of the gaps in TypeScript at the time of this tutorial, hopefully this would be solved in the future.
as a best practice i would recommend restrict your tuples to only two values because anything more than that is gonna make your code a bit hard to understand.So tuples are useful when we have only two values like key value pairs */
user.push(1);
console.log(user);

/**
 * If we add one more value to the user array, we get this error:
Type '[number, string, number]' is not assignable to type '[number, string]'.
  Source has 3 element(s) but target allows only 2.ts(2322)
*/
// let user: [number, string] = [1, "Mahdi", 0];
