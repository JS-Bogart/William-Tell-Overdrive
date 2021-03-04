const bolt = new Image();
bolt.src = "assets/images/bolt/bolt.png"

class Bolt {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [550, 540];
    this.bolt = bolt;
    this.dim_x = 100;
    this.dim_y = 499;
    this.speed = 5;
    this.moveLeft = false;
    this.moveRight = false;
  }

  draw() {
    this.ctx.drawImage(
      this.bolt,
      this.pos[0],
      this.pos[1],
      this.dim_x,
      this.dim_y
    );
  }

  move() {
    if (this.moveLeft && this.pos[0] > -35) {
      this.pos[0] -= this.speed;
    } else if (this.moveRight && this.pos[0] < 1140) {
      this.pos[0] += this.speed;
    }
  }

}

export default Bolt;