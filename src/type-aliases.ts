// ## Type Aliases
/*
This is the employee object that we created in the objects section. Now there are 3 problems in this implementation.

1. The first problem is that if we wanna create another employee object, we have to repeat this declaration, so we will end up duplicating our code which is bad. We always want to confirm to the DRY principle(Don't Repeat Yourself).

2. The second problem is that the other employee object might have other properties, so these two employee objects might not have a consistent shape(properties and methods) because we don't have a single place to define the shape an employee object.

3. Overall this structure is making our code a little bit hard to read and understand, so this is where we use Type Alias. Using a Type Aliase we can define a custom type.
*/

// This Employee type is a custom type that we created. And inside curely braces we define every property and method that Employee object should have.
type Employee = {
  readonly id: number;
  name: string;
  fax?: string;
  retire: (date: Date) => void;
  greeting: (message: string) => string;
};

let employee: Employee = {
  id: 1,
  name: "Mahdi",
  retire: (date: Date) => {
    console.log(date);
  },
  greeting: (message: string) => {
    console.log(message);
    return message;
  },
};

type Person = {
  readonly nationalID: number;
  firstname: string;
  lastname: string;
  isSingle: boolean;
};

let person: Person = {
  nationalID: 0_021_638_955,
  firstname: "Mahdi",
  lastname: "Salmanizadehgan",
  isSingle: true,
};

// person.nationalID = 0_021_638_940; // Cannot assign to 'nationalID' because it is a read-only property.ts(2540)
person.firstname = "Sajjad";

console.log(
  person.firstname,
  person.lastname,
  person.nationalID,
  person.isSingle
);

/* ## A Quick Recapiulation
by using Type Aliases we keep our code more maintainable and readable as well as we are confirming to DRY principle. We are technically defining the shape of our Employee object in one place and we can reuse it in multiple places. This is the benefit of using the Type Alias
*/
