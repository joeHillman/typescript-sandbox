// Object types

let aPerson: {
  name: string,
  age: number
}

// Type error: age property has the wrong type.
aPerson = {name: 'Aisle Nevertell', age: "wouldn't you like to know"};

// Type error: no age property. 
aPerson = {name: 'Kushim', yearsOld: 5000};

// Valid code. 
aPerson = {name: 'User McCodecad', age: 22};

// There are no restrictions on the types of an objects properties

let aCompany2: {
  companyName: string, 
  boss: {name: string, age: number}, 
  employees: {name: string, age: number}[], 
  employeeOfTheMonth: {name: string, age: number},  
  moneyEarned: number
};

// you can declare this inline, in the functions params

function sayHappyBirthdayWithObject(
  personObject: {name: string, age: number, giftWish: string, success: boolean}
)
  {
    // ...
  }

// ... or as array of objects

let birthdayBabies: {name: string, age: number, giftWish: string, success: boolean}[] = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
];

sayHappyBirthdayWithObject(birthdayBabies)