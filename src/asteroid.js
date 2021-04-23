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
const explosion = new Image();
explosion.src = "assets/images/explosions/asteroid_explosion.png";

class Asteroid {
  constructor(ctx, type, startPos) {
    this.ctx = ctx;
    this.type = type;
    this.startPos = startPos;
    this.size = 5;
    this.angle = 0;
    this.hit = false;
    this.explosion = explosion;
    this.explosionSize = 50;
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

    this.centerPos = [
      (this.pos[0] + (this.size / 2)),
      (this.pos[1] + (this.size / 2))
    ];
  }

  draw() {
    if (this.hit) {
      this.ctx.save();
      this.ctx.translate(this.pos[0], this.pos[1]);
      this.ctx.rotate(Math.PI / 180 * (this.angle += 1));
      this.ctx.drawImage(
        this.explosion,
        -(this.explosionSize / 2),
        -(this.explosionSize / 2),
        this.explosionSize,
        this.explosionSize
      )
      this.ctx.translate(-this.pos[0], -this.pos[1]);
      this.ctx.restore();
    } else {
      const grd = this.ctx.createRadialGradient(
        (this.pos[0]),
        (this.pos[1]),
        this.size * 0.3,
        (this.pos[0]),
        (this.pos[1]),
        this.size
      );
      grd.addColorStop(0, "red");
      grd.addColorStop(1, "transparent");
  
      this.ctx.beginPath();
      this.ctx.arc(
        (this.pos[0]),
        (this.pos[1]),
        (this.size / 2) * 1.5,
        0,
        2 * Math.PI
      );
      this.ctx.strokeStyle = "transparent";
      this.ctx.stroke();
      this.ctx.fillStyle = grd;
      this.ctx.fill();
  
  
      this.ctx.save();
      this.ctx.translate(this.pos[0], this.pos[1]);
      this.ctx.rotate(Math.PI / 180 * (this.angle += 3));
      this.ctx.drawImage(
        this.asteroid,
        -(this.size / 2),
        -(this.size / 2),
        this.size,
        this.size
      )
      this.ctx.translate(-this.pos[0], -this.pos[1]);
      this.ctx.restore();
    }

  }

  move() {
    if (this.hit) {
      this.explosionSize += 6;
      this.pos[1] += 7;

      if (this.startPos === "pos1") {
        this.pos[0] -= 1.0;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.3;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.3;
      } else if (this.startPos === "pos4") {
        this.pos[0] += 1.0;
      }
    } else {
      this.size += 0.7;
      this.pos[1] += 7;
  
      if (this.startPos === "pos1") {
        this.pos[0] -= 2.4;
      } else if (this.startPos === "pos2") {
        this.pos[0] -= 0.6;
      } else if (this.startPos === "pos3") {
        this.pos[0] += 0.8;
      } else if (this.startPos === "pos4") {
        this.pos[0] += 2.4;
      }
  
      this.centerPos = [
        (this.pos[0] - (this.size / 3)),
        (this.pos[1] - (this.size / 3))
      ];
    }
  }
}

export default Asteroid;