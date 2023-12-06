interface VehicleInterface {
  maxSpeed: number;
  brand: string;
}

interface Car extends VehicleInterface {
  horsePower: number
}

let car: Car

type VehicleType = {
  maxSpeed: number;
  brand: string;
}

let v1 : VehicleInterface
let v2 : VehicleType

v1 = {
  maxSpeed: 300,
  brand: 'Mazda'
}

// it will merge the 2 interfaces, will not merge types
// interface uses extends, type uses type NAME = {} & INTERFACE_NAME
interface Movie {
  title: string;
  year: number;
}

interface Movie {
  director: string;
}

let m1: Movie;

// will expect title and director
m1 = {
  year: 1997
}