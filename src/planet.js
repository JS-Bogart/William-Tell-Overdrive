const planet1 = new Image();
planet1.src = "assets/images/planet1.png";

class Planet {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5
    if (this.type === "planet1") this.planet = planet1;

    if (this.startPos === "pos1") this.pos = [390, 50];
    if (this.startPos === "pos2") this.pos = [490, 50];
    if (this.startPos === "pos3") this.pos = [590, 50];
    if (this.startPos === "pos4") this.pos = [690, 50];
    if (this.startPos === "pos5") this.pos = [790, 50];
  }

  draw() {
    this.ctx.drawImage(
      this.planet, 
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
      this.pos[0] -= 2.7;
    } else if (this.startPos === "pos2") {
      this.pos[0] -= 1.7;
    } else if (this.startPos === "pos3") {
      this.pos[0] -= 0.7;
    } else if (this.startPos === "pos4") {
      this.pos[0] += 0.3;
    } else if (this.startPos === "pos5") {
      this.pos[0] += 1.3;
    }
  }
}


export default Planet;
