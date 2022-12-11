/* In the union-types lession we learned that with union type a variable or function parameter can have more than one type. Now we have another technique for combining types called "Intersection".

*/
let weight: number | string; // Union types use vertical bar
let weight2: number & string; // Now this type represents an object that is both a number and a string at the same time. Technically, this is imposibble we cannot have a object that is both a number and a string at the same time, so lets look at a more realistic example. Here we are going to create a custom type called Draggable. This represents an object that can be dragged on the screen.

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: (width: number, height: number) => number;
};
// Now we can use intersection(ampersand symbol) to combine our two custom types declared above to create a new type called UIWidget
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: (width: number, height: number) => {
    return width * height;
  },
};

console.log(textBox.resize(200, 300));
