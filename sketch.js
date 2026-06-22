const tileSize = 50;
const COLS = 16;
const ROWS = 12;

let gameStarted = false;
let firstLevelComplete = false;
let secondLevelComplete = false;
let thirdLevelComplete = false;

// 0 = path
// 1 = wall
// 2 = start
// 3 = end

let maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,1,1,0,1,0,0,0,0,1,1,3,1],
  [1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1],
  [1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1],
  [1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1],
  [1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1],
  [1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1],
  [1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1],
  [1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1],
  [1,2,1,1,1,0,0,0,0,0,1,1,1,0,1,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let movers = [];
  
function setup() {
  createCanvas(800, 600);
  movers.push(new Mover(1, 1));
  movers.push(new Mover(5, 5));
  movers.push(new Mover(10, 8));
}

function draw() {
  background(220);
  if (gameStarted) {
    drawMaze();
  } else {
    drawStartScreen();
  }
}

function keyPressed() {
  if (key === " ") {
    gameStarted = true;
  }
}
class Mover {
  constructor(col, row) {

    this.x = col * tileSize + tileSize / 2;
    this.y = row * tileSize + tileSize / 2;
    this.speed = 2;
    this.dir = { x: 0, y: 0};
  }

  update() {
    if (!this.canMove())
    if (!this.canMove(this.dir.x, this.dir.y)) {
      this.chooseDirection();
    }

    this.x += this.dir.x * this.speed;
    this.y += this.dir.y * this.speed;
  }

  chooseDirection() {
    let dirs = [
      { x: 1, y: 0 },
      { x: -1, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: -1 }
    ];

    dirs = shuffle(dirs);

    for (let d of dirs) {
      if (this.canMove(d.x, d.y)) {
        this.dir = d;
        return;
      }
    }

    this.dir = { x: 0, y: 0 };
  }

  canMove(dx, dy) {
    let nextX = this.x + dx * this.speed;
    let nextY = this.y + dy * this.speed;

    let col = floor(nextX / tileSize);
    let row = floor(nextY / tileSize);

    return maze[row][col] === 0;
  }

  draw() {
    fill(255, 100, 100);
    ellipse(this.x, this.y, tileSize * 0.6);
  }
}

function drawStartScreen() {
  fill(121, 164, 166);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Monospace");
  textSize(90);
  text("A2 - GAME", width / 2, 300);
  textSize(16);
  text("Press SPACE to start", width / 2, 390);
  text("Move by pressing WASD", width / 2, 420);
}

function drawMaze() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let tile = maze[row][col];

      noStroke();

      if (tile === 1) {
        fill(23, 53, 71); // wall
      } else if (tile === 0) {
        fill(121, 164, 166); // path
      } else if (tile === 2) {
        fill(215, 240, 201); // start
      } else if (tile === 3) {
        fill(35, 107, 112); // end
      }

      const offSetX = (width - COLS * tileSize) / 2;
      const offSetY = (height - ROWS * tileSize) / 2;

      rect(col * tileSize + offSetX, row * tileSize + offSetY, tileSize, tileSize);
    }
  }

  fill(255);
  textAlign(LEFT, TOP);
  textFont("Monospace");
  textStyle("BOLD");
  textSize(12);
  text("LEVEL 1: Make your way to school!", 50, 20);
  drawSocialBar();

    for (let m of movers) {
    m.update();
    m.draw();
  }
}

function drawSocialBar() {
  textAlign(RIGHT, TOP);
  text("Social Battery Bar", 550, 20);
  rect(560, 15, 190, 20);
}