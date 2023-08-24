/*********************
  
  GOTCHA: "noEmitOnError": false is default
  comments thruout assume we've set this to true

  Perspecive: If this is a first stage in a CI process, this makes a ton of sense for testing.

  TLDR: your file, by default, is compiled despite TS errors

***********************/

// inference

// // #1: all types can be extended via a union -- let myNum = '2' || 2

// // this is a number period
let myTypescriptNumber = 2;

// // this is a string period
let myNumberToBeCoerced = '2';

// // this is any type period, it's not already declared explicitly or implicitly
// // // you can set a config for noImplicitAny if desired

// // // NOTE: any will disable further typechecking
let myAnyTypescriptNumber;

// *** typescript will never allow your coerced string number to be a number type unless #1

function sqaureNumbers(numToSquare: number) {
  return numToSquare * numToSquare
}

console.log(sqaureNumbers(myTypescriptNumber));

// shape detection
// // again, a number, unless #1
let myNonString = 10;
let myTypescriptString = 'string';

// shape detection knows what properties are on your variable
// // because of shape detection, this would compile
console.log(myTypescriptString.length);
console.log(myTypescriptString.toUpperCase());

// these won't compile due to

// // type
console.log(sqaureNumbers(myNumberToBeCoerced));

// // shape detection
console.log(myNonString.length);
console.log(myNonString.toUpperCase());
