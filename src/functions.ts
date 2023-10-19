// function types specify arguement and return types and skip the function body
// // type annotations can be added to function parameters
// // you can flag a paramater as optional usin the question mark

// 
function greet(name?: string) {
  console.log('Hello, ' + (name.toUpperCase() || 'Jon') + 'you rat bastard!')
}

greet(10);

// // return types can also be specified with syntax
// // // (params): returnType
// // // you can use this to test a series of functions for viability of the return value
function farewell(name?: string): string {
  return console.log('My String!');
}

const farewellArrowFormat = (): string => {
  return console.log('My String!');
}

farewell('Jack!');
farewell();

// // void types are useful for functions that don't return anything
function logger(): void {
  console.log('LOG THIS')
}

// TS recognizes standard comment and doc comment syntax

/**
 * Logs the fruit salad ingredients.
 * 
 * @param fruit1 - The first salad ingredient
 * @param fruit2 - The second salad ingredient
 * @returns - Nothing
 * 
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  console.log(salad);
}

// anonymous functions
// // params of the function will be the given types
// // knowing how it infers will signal if type annotations are needed
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});

// if you want deeper control, you can marry up the
// // function signature with literal values to expect
// // this won't work because it infers a string type, not a literal value
// // does this because that value could be changed, so it's considered an error

// you can set optional params as such // data?:
// // you will need to check for undefined if optional
// // // param? || if undefined
declare function handleRequest(url: string, method: "GET" | "POST", data?: string): void;
const req = { url: 'https://example.com', method: "GET" };
handleRequest(req.url, req.method);

// a few ways to lock this down
// // 1
// // // add a type assertion in either location
const req2 = { url: 'https://example.com', method: 'GET' as 'GET' };

// this wont throw until it's used as a param
const req3 = { url: 'https://example.com', method: 'PUT' as 'PUT' };
// // // or
handleRequest(req.url, req.method as 'GET');
handleRequest(req.url, req.method as 'POST', 'Hello');

handleRequest(req.url, req.method as 'PUT');
handleRequest(req.url, req3.method);

// lock is down as a const, this signals TS to act like a const for the type system
// // assures all props are assigned the literal type instead of a more generic version
const req4 = { url: 'https://example.com', method: 'GET' } as const;
// from above method GET
handleRequest(req.url, req.method, {key: 'value'});
handleRequest(req4.url, req4.method);

// union types allow for multiple types
const printId = (id: number | string) => {
  console.log(`Your id is ${id}`);
}

printId(5);
printId('string');
printId({key: 'value'});

// it will not allow without narrowing, string types used on an object
// // if two types share a method, narrowing will not be required

// a function that take two strings and returns a number
// // this type can be used for multiple functions
type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;
myFunc = function(firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

// must retain the syntax ==> (name: type, name2: type) => return type
myFunc = function(whatever: string, blah: string) {
  return whatever.length - blah.length;
};
// Neither of these assignments results in a type error.

// assigning an alias
function add(a, b){return a+b }
function wrongAdd(a, b){return (a+b)+''}

// // alternatively you can use unions,
// // // returning number | string would validate the wrongAdd return
type OperatorFunction = (a: number, b: number) => number;

// the alias appears after
function mathTutor(operationCallback: OperatorFunction) {}

mathTutor(add)
mathTutor(wrongAdd)

// generic functions
// // T as the placeholder
function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:

stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6);

coordinateArray = getFilledArray<[number, number]>([3, 4], 6)

// narrowing and functions

// // typeof narrowing

function formatStatistic(stat: string | number) {
  if(typeof stat === 'number') {
    return stat.toFixed(2);
  }

  if(typeof stat === 'string') {
    return stat.toUpperCase();
  }
}

console.log(formatStatistic('Win'));
console.log(formatStatistic(0.364));

// // for in narrowing
type Cat = {
  name: string;
  run: () => string;
}

type Fish = {
  name: string;
  swim: () => string;
}

function move(pet: Cat | Fish) {
  if('run' in pet) {
    return pet.run();
  }

  if('swim' in pet) {
    return pet.swim();
  }
}

