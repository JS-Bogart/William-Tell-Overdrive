import Game from "./game.js";
import GameView from "./game_view.js";

document.addEventListener("DOMContentLoaded", function () {
  
  const gameCanvas = document.getElementsByClassName("game-canvas")[0];
  gameCanvas.width = 1200;
  gameCanvas.height = 700;
  const ctx = gameCanvas.getContext("2d");
  const energyBar = document.getElementsByClassName("energy-bar")[0];
  energyBar.width = 75;
  energyBar.height = 700;
  const eBar = energyBar.getContext("2d");
  const wto = new Audio("assets/music/wto.mp3")
  
  document.getElementById("play-btn").addEventListener("click", () => {
    
    const game = new Game(ctx, eBar);
    new GameView(game, ctx, eBar).start();

    wto.currentTime = 0;
    wto.play();

    document.getElementById("audio-btn").addEventListener("click", () => {
      if (wto.muted) {
        wto.muted = false;
      } else {
        wto.muted = true;
      }
    });

    let moveLeft = false;
    let moveRight = false;

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
});