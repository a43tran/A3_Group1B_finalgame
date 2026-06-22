// ---------------------------
// MAZE DATA
// ---------------------------
// 0 = wall
// 1 = path
// 2 = start
// 3 = end

let maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,2,0,0,1,0,0,0,0,1,0,0,0,0,3,1],
  [1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1],
  [1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
  [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
  [1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1],
  [1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
  [1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

const tileSize = 50;
const COLS = 16;
const ROWS = 12;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  drawMaze();
}

function drawMaze() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let tile = maze[row][col];

      noStroke();

      if (tile === 1) {
        fill(60, 60, 80); // wall
      } else if (tile === 0) {
        fill(200); // path
      } else if (tile === 2) {
        fill(0, 255, 0); // start
      } else if (tile === 3) {
        fill(255, 0, 0); // end
      }

      const offSetX = (width - COLS * tileSize) / 2;
      const offSetY = (height - ROWS * tileSize) / 2;

      rect(col * tileSize + offSetX, row * tileSize + offSetY, tileSize, tileSize);
    }
  }
}
