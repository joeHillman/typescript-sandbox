/*********************
  
  GOTCHA: "noEmitOnError": false is default
  comments thruout assume we've set this to true

  Typescripts defaults to this to stay out of your way while coding.

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

// unions and variables
// // unions allow define multiple types
// // all types defined must validate with whats being used

function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings(3);
printNumsAndStrings('hello!');

// // narrowing can be used to get these to validate
// // this applies to type members
type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
};

function formatValue(value: string | number) {
  if(typeof value === 'string') {
    console.log(value.toLowerCase())
  }

  if(typeof value === 'number') {
    console.log(value.toFixed(2))
  }
}

formatValue('Hiya');
formatValue(42);


// you can store types in the unions
type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

const userData: User | string = createUser()

// you can use unions paired with arrays...
// // listings: (string | number)[] // array with numbers and strings
// // listings: string | number[] // this is incorrect, this would mean a string or array of numbers

type Status = 'idle' | 'downloading' | 'complete';
function downloadStatus(status: Status) { /* if checks for status here */ }