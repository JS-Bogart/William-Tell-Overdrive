const planet1 = new Image();
planet1.src = "assets/images/planet1.png";

class Planet {
  constructor(ctx) {
    this.ctx = ctx;
    this.planet1 = planet1;
    this.pos = [500, 50];
  }

  draw() {
    this.ctx.drawImage(this.planet1, 500, 50, 200, 200)
  }
}


export default Planet;
