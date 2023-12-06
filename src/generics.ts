// generic types create collections of types that share certain formal similarities
type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

// T as the type placeholder, 
type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};

// Family

let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

interface Hero {
  name: string,
  superpower: string
}

const h1: Hero = { name: 'Flash', superpower: 'Fast' }
const h2: Hero = { name: 'Batman', superpower: 'Rich' }
const h3: Hero = { name: 'Superman', superpower: 'Godlike' }
const h4: Hero = { name: 'Hulk', superpower: 'Strong' }

const heroes = [h1, h2, h3, h4];

class SmartArray <T>{
  private array: T[] = [];
  constructor(array: T[]) {
    this.array = array;
  }

  get values() {
    return this.array;
  }

  shuffle(): T[] {
    return this.array.sort(() => Math.random() - 0.5)
  }

  push(element: T): void {
    this.array.push(element)
  }

  removeLast(): T[] {
    this.array.slice(0, this.array.length - 1);
    return this.array;
  }
}

const heroSmartArray = new SmartArray(heroes);

heroSmartArray.shuffle()