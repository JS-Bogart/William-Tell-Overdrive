const star = new Image();
star.src = "assets/images/stars/star.png"
const explosion = new Image();
explosion.src = "assets/images/explosions/mm_explosion.png";

class Star {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = [690, 50]; // Change
    this.size = 5; // Change
    this.hit = false;
    this.explosion = explosion;
    this.explosionSize = 100; // Change
    this.star = star;
  }
}

export default Star;