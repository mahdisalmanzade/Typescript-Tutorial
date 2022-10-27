// ## Objects
/**
In JavaScript objects are dynamic so their shape can change through lifetime of our program. It means once we have an employee object with one id property we can still add properties and methods to it. employee.name = 'Mahdi';
This type is an object with a property type of number. So like all the variables we have declared so far, the TypeScript compiler will infer the shape of this employee object. if we hover or mouse over the name of employee object we can see its shape. Like all the variables we have declared and annotated so far we
can explicitly apply type annotation to the properties and methods of our object.
*/

// if we don't initialize our object with both id and number we get this error Property 'name' is missing in type '{ id: number; }' but required in type '{ id: number; name: string; }'.ts(2741)
// We have to initialize both id and name. if we don't want to assign a value or initialize it with a value, we have to make it optional property by using question mark(?)

/* Now name property is optional we can skip assiging a value to it when initializing it. but if we remove question mark we are forced to initialize it with a value.
Even though TypeScript allow us to make a property optional, this is something we should avoid because in conceptually in a real world it doesn't make sense to have an employee without a name. every employee should have a name like everyone who has a national id. it could make sense to make the fax property optional because not everyone has a fax machine. So always make sure the code you write conceptually make sense. Don't blindly use features of TypeScript or any other programming languages.

Sometimes we wanna make a certain property read-only so we don't accidentally change it later on. for example id is unique property and it shouldn't be modified so in this case make id read only property to prevent from accidentally changes. So we use something called read only modifier before the name of the property.

## Now lets see how we can define a function or more accurately a method in this object. let say every employee object should have a retire method. we need to define the signature of this method, we need to specify how many parameters it's gonna have, what is the type of each parameter and what is the type of the return value

*/

let employeee: {
  readonly id: number;
  name: string;
  fax?: string;
  retire: (date: Date) => void;
  greeting: (message: string) => string;
} = {
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

employeee.name = "Anson";
employeee.retire(new Date());
employeee.greeting("Bla Bla Bla!");
// employee.id = 2; // Cannot assign to 'id' because it is a read-only property.ts(2540)

// let employee: {
//   id: number;
//   name: string;
// } = { id: 1, name: "" };

// employee.name = "Mahdi"; // Property 'name' does not exist on type '{ id: number; }'.ts(2339)

// let employee: {
//   id: number;
// } = { id: 1 };

// employee.name = "Mahdi"; // Property 'name' does not exist on type '{ id: number; }'.ts(2339)
