// ## Type Aliases
/*
This is the employee object that we created in the objects section. Now there are 3 problems in this implementation.

1. The first problem is that if we wanna create another employee object, we have to repeat this declaration, so we will end up duplicating our code which is really bad. We always want to confirm to the DRY principle(Don't Repeat Yourself).

2. The second problem is that the other employee object might have other properties, so these two employee objects might not have consistent shape(properties and methods) because we don't have a single place to define the shape an employee object.

3. Overall this structure is making our code a little bit hard to read and understand, so this is where we use Type Alias. Using a Type Aliase we can define a custom type.
*/

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
