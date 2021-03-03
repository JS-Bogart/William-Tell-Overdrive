class Asteroid {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
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