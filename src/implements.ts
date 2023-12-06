// assigning a type to a class
interface Printable {
  print: () => void;
}

interface Exportable {
  export: () => void;
}

// a class that implements Printable will be required to have the function print
// // with multiple it's CSV
class Book implements Printable, Exportable {
  private _title: string;
  private _author: string;

  constructor(title: string, author: string) {
    this._title = title;
    this._author = author;
  }

  print(){
    console.log(this._title, this._author)
  }
}

class Magazine implements Printable { 
  private _name: string;

  constructor(name: string) {
    this._name = name
  }

  print(){
    console.log(this._title, this._author)
  }
}

const book = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald"
)

const magazine = new Magazine("Time Magazine")