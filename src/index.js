import Game from "./game.js";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function () {
  const gameCanvas = document.getElementsByClassName("game-canvas")[0];
  gameCanvas.width = 1200;
  gameCanvas.height = 700;

  const ctx = gameCanvas.getContext("2d");

  const game = new Game(ctx);
  new GameView(game, ctx).start();

  let moveLeft = false;
  let moveRight = false;

  // Keypress events

  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
      moveLeft = true;
      game.moveBolt(moveLeft, moveRight);
    } else if (event.code === "ArrowRight") {
      moveRight = true;
      game.moveBolt(moveLeft, moveRight);
    }
  });

  document.addEventListener("keyup", event => {
    if (event.code === "ArrowLeft") {
      moveLeft = false;
      game.moveBolt(moveLeft, moveRight);
    } else if (event.code === "ArrowRight") {
      moveRight = false;
      game.moveBolt(moveLeft, moveRight);
    }
  });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});