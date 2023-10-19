// https://www.typescriptlang.org/docs/handbook/enums.html
// Enums are a feature added to JavaScript by TypeScript which allows for
// // describing a value which could be one of a set of possible named constants.
// // Unlike most TypeScript features, this is not a type-level addition to
// // JavaScript but something added to the language and runtime. Because of this,
// // it’s a feature which you should know exists,
// // but maybe hold off on using unless you are sure. You can read more about enums in the Enum reference page.

// Enums are one of the few features TypeScript
// // has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants.
// // Using enums can make it easier to document intent, or create
// // a set of distinct cases. TypeScript provides both numeric and string-based enums.

// Devs can also use unions which are simpler, and even the TS docs note don't go too deep until you need to on Enums.

// used to enumerate all the possible values a variable could have

// // Numeric Enums
enum Direction {
  North, // implicit type number and value 0 // if assigned 5
  South, // implicit type number and value 1 // implicit 6
  East,
  West
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.
whichWayToArcticOcean = Direction.Southeast; // Type error: Southeast is not a valid value for the Direction enum.
whichWayToArcticOcean = West; // Wrong syntax, we must use Direction.West instead. 

// TS will number these, you can reassign the starting or all of them
// 0, 1, 2, 3

let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

// Write your code below:

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

// a tuple, [Pet Type, Number][]
// // for the below...
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
]

// type needs to be declared here as Pet, its a type
let petOnSaleTS: Pet = Pet.Chinchilla;

// this will not push to the array, there is no Jerboa declared in the Pet enums
ordersArrayTS.push([Pet.Jerboa, 3])

// String enums
// // declaration is the same except you define strings explicitly
// // string enums are recommended over numeric because bugs can wind its way into numeric
enum DirectionNumber { North, South, East, West }
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }

let whichWayToAntarctica: DirectionString;
whichWayToAntarctica = '\ (•◡•) / Arbitrary String \ (•◡•) /'; // Type error!
whichWayToAntarctica = 'SOUTH'; // STILL a type error!
whichWayToAntarctica = DirectionString.South; // The only allowable way to do this.

// enums can have computed or constant members
// // constant
// // // first member with no initializer, would be assigned a 0
// // // no initializer and preceeding member was a numeric constant
// // // initialized with a constant enum expression, a subset of TS expressions to be evald at compile time
 // // // // literal enum expression / string or numeric literal
 // // // // reference to prev defined enum member, could be a different enum
 // // // // parenthesized constant enum expression
 // // // // +, -, ~ unary operators applied to constant enum expression
 // // // // +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators with constant enum expressions as operands

 // // // in all other cases, it would be a computed value

// custom type string enum
enum PetString {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA'
}

let petOnSaleTS: PetString = PetString.Chinchilla;

// typed as array of tuples
let ordersArrayTS: [PetString, number][] = [
  [PetString.Rat, 2],
  [PetString.Chinchilla, 1],
  [PetString.Hamster, 2],
  [PetString.Chinchilla, 50]
]

ordersArrayTS.push(['HAMSTER', 1])