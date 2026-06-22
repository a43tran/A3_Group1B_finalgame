const tileSize = 50;
const COLS = 16;
const ROWS = 12;

// 0 = path
// 1 = wall
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
  textAlign(CENTER, TOP);
  textFont("Monospace");
  text("Make your way to school!", width / 2, 20);
}
