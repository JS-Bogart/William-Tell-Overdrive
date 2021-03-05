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
    // this.radius = 23.5;
    this.radius = 10;
    // this.centerPos = [573.5, 622.5]
    this.centerPos = [573.5, 580]
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
      this.centerPos[0] -= this.speed;
    } else if (this.moveRight && this.pos[0] < 1140) {
      this.pos[0] += this.speed;
      this.centerPos[0] += this.speed;
    }
  }

  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  }

  isCollidedWith(otherObject) {
    const centerDist = this.dist(this.centerPos, (otherObject.centerPos));
    return centerDist < (this.radius + (otherObject.size/2*0.9));
  };

}

export default Bolt;