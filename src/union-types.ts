// ## Union Types
// With Union Types we can give a variable or a function paramter more than one type.
function calculateWeight(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

calculateWeight(10);
calculateWeight("10kg");
