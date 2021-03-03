import Game from "./game";
import GameView from "./game_view";

document.addEventListener("DOMContentLoaded", function () {
  const gameCanvas = document.getElementsByClassName("game-canvas")[0];
  gameCanvas.width = 1200;
  gameCanvas.height = 700;

  const ctx = gameCanvas.getContext("2d");

  const game = new Game(ctx);
  game.draw(ctx);

  new GameView(game, ctx).start();
});

