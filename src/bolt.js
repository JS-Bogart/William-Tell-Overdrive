const bolt = new Image();
bolt.src = "assets/images/bolt/bolt.png"

class Bolt {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [550, 540];
    this.bolt = bolt;
    this.dim_x = 100;
    this.dim_y = 499;
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

  move(dir) {
    if (dir === "left") {
      this.pos[0] -= 5;
    } else if (dir === "right") {
      this.pos[0] += 5;
    }
  }

}

export default Bolt;