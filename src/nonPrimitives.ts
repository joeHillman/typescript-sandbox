// non primitives
// // arrays

// arry of type
const myTypescriptNumberArray = number[];
const myTypescriptStringArray = string[];

// functions
// // type annotations can be added to function parameters
// // you can flag a paramater as optional usin the question mark
function greet(name?: string) {
  console.log('Hello, ' + (name.toUpperCase() || 'Jon') + 'you rat bastard!')
}

greet(10);

// // return types can also be specified
function farewell(name?: string): string {
  return console.log('My String!');
}

farewell('Jack!');
farewell();