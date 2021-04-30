![alt text](https://github.com/JS-Bogart/William-Tell-Overdrive/blob/main/assets/images/backgrounds/title.jpg?raw=true "WTO Logo")

# William Tell Overdrive
[William Tell Overdrive](https://js-bogart.github.io/William-Tell-Overdrive/) is an arcade-style web-based video game set 400 years in the future.

## Demo:
The live working demo can be found here: [https://js-bogart.github.io/William-Tell-Overdrive/](https://js-bogart.github.io/William-Tell-Overdrive/)

## Site:
### Welcome Screen
The welcome screen features several clickable buttons. The New Game button begins gameplay, the directions button brings up the directions modal, and the audio button mutes/unmutes the music played during the game.
![alt text](https://github.com/JS-Bogart/William-Tell-Overdrive/blob/main/assets/images/readme/welcome_screen.png?raw=true)

### Directions
The directions modal contains the game's backstory as well as the controls used to play the game.
![alt text](https://github.com/JS-Bogart/William-Tell-Overdrive/blob/main/assets/images/readme/directions.png?raw=true)

### Gameplay
The gameplay revolves around steering a plasma bolt through space. The player must dodge incoming asteroids, planets, and stars. There is a kinetic energy bar on the right that goes down every time an asteroid is hit. 
![alt text](https://github.com/JS-Bogart/William-Tell-Overdrive/blob/main/assets/images/readme/gameplay.png?raw=true)

If the player makes it to the end of the game (which coincides with the end of the William Tell Overture), they must hit planet-like space station that is threatening Earth in order to win.
![alt text](https://github.com/JS-Bogart/William-Tell-Overdrive/blob/main/assets/images/readme/ending.png?raw=true)


## Featured Code:
### Game Controls
William Tell Overdrive features fairly simple game controls, utilizing only the left and right arrow keys. These controls are recorded using an event listener to track keydown and keyup events. 
```
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
```

These events utilize the moveBolt method in game.js to change the local state of the bolt.
```
  moveBolt(moveLeft, moveRight) {
    this.bolt.moveLeft = moveLeft;
    this.bolt.moveRight = moveRight;
  }
```

The change to the local state of the bolt allows the move() method to change the position of the bolt depending on the boolean values of the moveLeft and moveRight variables.
```
  move() {
    if (this.moveLeft && this.pos[0] > -35) {
      this.pos[0] -= this.speed;
      this.centerPos[0] -= this.speed;
      this.cbPos[0] -= this.speed;
    } else if (this.moveRight && this.pos[0] < 1140) {
      this.pos[0] += this.speed;
      this.centerPos[0] += this.speed;
      this.cbPos[0] += this.speed;
    }
  }
```