
// you cant make an instance of a abstract, abstract used as a type

abstract class VideoGame {
  protected name: string;
  protected genre: string;
  protected platform: string;

  constructor(name: string, genre: string, platform: string) {
    this.name = name;
    this.genre = genre;
    this.platform = platform;
  }

  // we can require the children to implement there own play, requires abstract keyword
  abstract play(): void;

  // cannot declare function in an interface
  // this just works on the children
  displayInfo() {
    console.log(this.name, this.genre, this.platform)
  }
}

class ArcadeGame extends VideoGame {
  constructor(name: string, platform: string) {
    // call constructor of parent, fill in the genre
    super(name, "Arcade", platform)
  }

  play(): void {
    console.log("Jump jump")
  }
}

class Shooter extends VideoGame {
  constructor(name: string, platform: string) {
    // call constructor of parent, fill in the genre
    super(name, "Shooter", platform)
  }

  play(): void {
    console.log("Boom boom")
  }
}

const mario = new ArcadeGame("Mario", "Gameboy")
const callOfDuty = new Shooter("Call of Duty", "PC")