// ## Union Types
// With Union Types we can give a variable or a function paramter more than one type.
function calculateWeight(weight: number | string): number {
  /* weight parameter can be either a number or a string. and we annotate it with a number or a string.
  In this function at this point, we don't know that weight is a number or a string so if we try to access weight parameter properties or methods, we only see the properties and the methods that are common between numbers and strings.so both numbers and strings have these methods(toLocaleString, toString, valueOf).
  So here we have no methods specific to numbers or strings. And this is where we use a technique called Narrowing. So we are going to narrow down these union type into a more specific type.
  */

  if (typeof weight === "number") {
    // so in this block compiler knows that weight is a type of number.
    return weight * 2.2;
  } else {
    // Convert weight string into an integer
    return parseInt(weight) * 2.2;
  }
}

calculateWeight(10);
calculateWeight("10kg");
