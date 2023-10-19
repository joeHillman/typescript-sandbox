// array of type

let firstArray = [1, 2, 3, 4];
let secondArray =  [5, '6', [7]];

// arrays are a little different because each position may have a different piece of data

let myTypescriptNumberArray: number[] = [1, 2, 3];
// or for interface syntax
let myTypescriptInterfaceArray: Array<number> = [1, 2, 3];

let myTypescriptStringArray: string[] = ['Danny', 'Samantha'];

myTypescriptStringArray.push(666) // will yield an error

// generics use a different syntax for arrays
// // Array<number> -- Seen more often in Typescript with React

// A Typescript Tuple = [number];
// // A tuple is a custom type along with enums (both string and numeric).
// https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// A tuple type is another sort of Array type that knows exactly how many elements it contains,
// // and exactly which types it contains at specific positions.
// // Useful in convention based API's where an element's meaning is obvious.
// // Reference if needed.

// A tuple and an array are NOT of compatible types.
let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

favoriteCoordinates = [17, 45, 'N', 142, 30, 'E']

// because a tuple remembers the quantity and types, this assignment is not valid
favoriteCoordinates[6] = -6.825

let examAnswers = [true, false, false]; // boolean[] or [boolean, boolean, boolean] - 2nd style is a tuple, not an array of booleans

// a standard style of boolean[] would allow for the below expansion because tuples are of fixed lengths
examAnswers[3] = false;

// if you want an actual tuple, you need an explicit type annotation
let tuple: [number, number, number] = [1, 2, 3];
// the inference here is an array of numbers
let concatResult = tuple.concat([4, 5, 6]);

// REST Parameters use the same syntax as arrays...
function smush(firstString: string, ...otherStrings: string[]) : string{
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}

// JS Spread syntax and Tuples...
function gpsNavigate(
  startLatitudeDegrees:number,
  startLatitudeMinutes:number,
  startNorthOrSouth:string,
  startLongitudeDegrees: number,
  startLongitudeMinutes: number,
  startEastOrWest:string,
  endLatitudeDegrees:number,
  endLatitudeMinutes:number ,
  endNorthOrSouth:string,
  endLongitudeDegrees: number,
  endLongitudeMinutes: number, 
  endEastOrWest:string
) {
  /* navigation subroutine here */
}

// you can clean up call utilizing TS

let codecademyCoordinates: [number, number, string, number, number, string]
  = [40, 43.2, 'N', 73, 59.8, 'W'];

let bermudaTCoordinates: [number, number, string, number, number, string]
  = [25, 0 , 'N' , 71, 0, 'W'];

gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);
// And by the way, this makes the return trip really convenient to compute too:
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
// If there is a return trip . . . 

function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if(hasFlair){
    console.log('I do it with flair!');
  }
}

// array of tuples
// // [tuple types][] = [[], [], []]
let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];