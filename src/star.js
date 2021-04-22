const star = new Image();
star.src = "assets/images/stars/star.png"
const explosion = new Image();
explosion.src = "assets/images/explosions/mm_explosion.png";

class Star {
  constructor(ctx, startPos) {
    this.ctx = ctx;
    this.startPos = startPos;
    this.size = 5; // Change
    this.hit = false;
    this.explosion = explosion;
    this.explosionSize = 100; // Change
    this.star = star;

    if (this.startPos === "pos1") this.pos = [390, 50];
    if (this.startPos === "pos2") this.pos = [490, 50];

    this.centerPos = [
      (this.pos[0] + (this.size / 2)),
      (this.pos[1] + (this.size / 2))
    ];
  }

  draw() {
    if (this.hit) {
      this.ctx.drawImage(
        this.explosion,
        this.pos[0] + 10,
        this.pos[1] + 30,
        this.explosionSize,
        this.explosionSize
      );
    } else {
      const grd = this.ctx.createRadialGradient(
        (this.pos[0] + (this.size / 2)),
        (this.pos[1] + (this.size / 2)),
        this.size * 0.3,
        (this.pos[0] + (this.size / 2)),
        (this.pos[1] + (this.size / 2)),
        this.size * 1.0
      );
      grd.addColorStop(0, "orange");
      grd.addColorStop(1, "transparent");

      this.ctx.beginPath();
      this.ctx.arc(
        (this.pos[0] + (this.size / 2)),
        (this.pos[1] + (this.size / 2)),
        (this.size / 2) * 1.3,
        0,
        2 * Math.PI
      );
      this.ctx.strokeStyle = "transparent";
      this.ctx.stroke();
      this.ctx.fillStyle = grd;
      this.ctx.fill();


      this.ctx.drawImage(
        this.star,
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
      this.size += 0.9;
      this.pos[1] += 3;

      if (this.startPos === "pos1") {
        this.pos[0] -= 2.0;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 1.2;
      }

      this.centerPos = [
        (this.pos[0] + (this.size / 3)),
        (this.pos[1] + (this.size / 3))
      ];
    }
  }

}

export default Star;