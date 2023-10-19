// interfaces and types
type Mail = {
  postagePrice: number;
  address: string;
}

// interface is only used to Type objects
interface Mail2 {
  postagePrice2: number;
  address2: string;
}

//  there are a few differences
// // type NAME = {}


interface interfaceEx {
  example: true
}
function myFunc2(param: interfaceEx) { console.log(param.example) }

// interfaces and classes
// // because interfaces are specific to objects and
// // // classes program objects they are a good match

// // classes implement interfaces
// // // interfaces also support nested objects
interface Robot {
  indentify: (id: number) => void;
  config: {
    default: {
      encoding: string;
      permissions: string;
    }
  }  
}

class OneSeries implements Robot {
  config: {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-',
    }
  }
  // OneSeries must include indentify because it implemenets Robot
  // // it can include other memebers not in robot
  indentify(id: number) {
    console.log(`beep I'm ${id.toFixed(2)}`)
  }
}

// composed types
// // types split apart for granular reuse

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
  default: DefaultConfig
}

interface Directory {
  addFile: (name: string) => void;
  config: Config;
}

// extending interfaces
interface Developer extends Human2 {
  code: () => void;
}

// Add your interface here
// // a question mark after makes this optional
interface Human2 {
  name: string;
  hobbies?: string[];
}

const me: Developer = { 
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina', 
  hobbies: ['Building rockets']
}

// index signatures
// // for when you don't know about incoming data
{
  '40.712776': true;
  '41.203323': true;
  '40.417286': false;
}

interface SolarEclipse {
  [latitude: string]: boolean;
} 

interface Budget {
  [category: string]: number
}

const result : Budget = await getBudgetAsync

// optional type memebers