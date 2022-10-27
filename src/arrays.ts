// ## Arrays
// String Array(type can also be infered if we don't declare data type)
let developers: string[] = ["Mahdi", "Anson", "Omid"];
// let developerss = ["Mahdi", "Anson", "Omid", 2, true]; // compiler is infering type
let numbers: number[] = [32, 26, 40, 17];

developers.forEach((dev) => {
  console.log(dev.toUpperCase());
});

console.log(numbers);
