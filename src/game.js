function Game() {

}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1200;
Game.DIM_Y = 700;

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  ctx.fillStyle = Game.BG_COLOR;
  ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

  // const planet1 = document.getElementById("planet1")
  // ctx.drawImage(planet1, 0, 0, 100, 100)
  const planet1 = new Image();
  planet1.src = "assets/images/planet1.png";
  planet1.onload = () => {
    ctx.drawImage(planet1, 500, 500, 200, 200)
  }
};

module.exports = Game;