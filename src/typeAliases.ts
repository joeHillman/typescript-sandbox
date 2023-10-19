// type aliases are helpful for condensing complex or repeititive types...
type Coord = [number, number, string, number, number, string]

// you can certainly see the difference
let codecademyCoordinatesNA: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];

// a subtle difference between type aliases and interfaces is you can't extend an aliases
// // https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases