const murderMoon = new Image();
murderMoon.src = "assets/images/murder_moon/murder_moon.png";
const explosion = new Image();
explosion.src = "assets/images/explosions/mm_explosion.png";

class MurderMoon {
  constructor(ctx, endPos) {
    this.ctx = ctx;
    this.endPos = endPos;
    this.size = 5;
    this.hit = false;
    this.explosion = explosion;
    this.explosionSize = 100;
    this.murderMoon = murderMoon;
    if (this.endPos === "endPos1") this.pos = [690, 50];
    if (this.endPos === "endPos2") this.pos = [490, 50];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(
        this.explosion,
        this.pos[0] + 50,
        this.pos[1] + 30,
        this.explosionSize,
        this.explosionSize
      );
    } else {
      this.ctx.drawImage(
        this.murderMoon,
        this.pos[0],
        this.pos[1],
        this.size,
        this.size
      );
    }
  }

  move() {
    if (this.hit) {
      this.explosionSize += 10;
      this.pos[0] -= 5;
      this.pos[1] -= 5;
    } else {
      this.size += 1.0;
      this.pos[1] += 2;
      if (this.endPos === "endPos1") this.pos[0] += 0.3;
      if (this.endPos === "endPos2") this.pos[0] -= 1.2;

      this.centerPos = [
        (this.pos[0] + (this.size / 3)),
        (this.pos[1] + (this.size / 3))
      ];
    }
  }

}

export default MurderMoon;