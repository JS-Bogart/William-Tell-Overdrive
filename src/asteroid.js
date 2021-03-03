const asteroid1 = new Image();
asteroid1.src = "assets/images/asteroids/asteroid1.png";
const asteroid2 = new Image();
asteroid2.src = "assets/images/asteroids/asteroid2.png";
const asteroid3 = new Image();
asteroid3.src = "assets/images/asteroids/asteroid3.png";
const asteroid4 = new Image();
asteroid4.src = "assets/images/asteroids/asteroid4.png";
const asteroid5 = new Image();
asteroid5.src = "assets/images/asteroids/asteroid5.png";
const asteroid6 = new Image();
asteroid6.src = "assets/images/asteroids/asteroid6.png";
const asteroid7 = new Image();
asteroid7.src = "assets/images/asteroids/asteroid7.png";

class Asteroid {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    if (this.type === "asteroid1") this.asteroid = asteroid1;
    if (this.type === "asteroid2") this.asteroid = asteroid2;
    if (this.type === "asteroid3") this.asteroid = asteroid3;
    if (this.type === "asteroid4") this.asteroid = asteroid4;
    if (this.type === "asteroid5") this.asteroid = asteroid5;
    if (this.type === "asteroid6") this.asteroid = asteroid6;
    if (this.type === "asteroid7") this.asteroid = asteroid7;

    if (this.startPos === "pos1") this.pos = [440, 50];
    if (this.startPos === "pos2") this.pos = [540, 50];
    if (this.startPos === "pos3") this.pos = [640, 50];
    if (this.startPos === "pos4") this.pos = [740, 50];
  }

  draw() {
    this.ctx.drawImage(
      this.asteroid,
      this.pos[0],
      this.pos[1],
      this.size,
      this.size
    )
  }

  move() {
    this.size += 0.9;
    this.pos[1] += 3;

    if (this.startPos === "pos1") {
      this.pos[0] -= 1.9;
    } else if (this.startPos === "pos2") {
      this.pos[0] -= 1.2;
    } else if (this.startPos === "pos3") {
      this.pos[0] -= 0.45;
    } else if (this.startPos === "pos4") {
      this.pos[0] += 0.3;
    }
  }
}

export default Asteroid;