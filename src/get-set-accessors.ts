class Circle {
  private _radius: number;
  // protected will expose this var to children that extend
  // private won't be exposed

  constructor(radius: number) {
    this._radius = radius;
  }

  // setRadius(radius) {
  //   if(radius > 0) {
  //     this.radius = radius
  //   }
  //   throw new Error("Cannot set neg radius")
  // }

  set radius(radius: number) {
    if(radius > 0) {
      this._radius = radius
    } else {
      throw new Error("Cannot set neg radius")
    }
  } 

  // getRadius(): number {
  //   return this.radius
  // }

  get radius(): number {
    return this._radius
  }  
}

const circle = new Circle(5)