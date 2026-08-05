// MAZE GRID

const tileSize = 40;

const COLS = 25;

const ROWS = 14;

// 0 = path

// 1 = wall

// 2 = start

// 3 = end

const ZOOM = 3.5;

// MAZE MAP

let maze1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 3, 1],

  [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],

  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],

  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],

  [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],

  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],

  [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],

  [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],

  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1],

  [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],

  [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],

  [1, 2, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let maze2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 2, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],

  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],

  [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],

  [1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],

  [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],

  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],

  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1],

  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1],

  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],

  [1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],

  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],

  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let maze3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 3, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 2, 1],

  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],

  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1],

  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],

  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],

  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

  [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],

  [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],

  [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],

  [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],

  [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let maze = maze1;

// GAME STATE & LEVELS

let gameStarted = false;

let gameOver = false;

let firstLevelComplete = false;

let secondLevelComplete = false;

let thirdLevelComplete = false;

// LEVEL 3 CHASE

let level3AllFoodCollected = false;

// IMAGES

let character;

let characterlvl2;

let characterlvl3;

let goblinslvl3running;

let goblins;
let goblinslvl2;
let goblinslvl3;
let goblin;

let startScreen;

let restartScreen;

let levelOneComplete;

let fireflySprite;

let completelvl2;

let gamecompleted;

let faillvl2;

let faillvl3;

let fireflyBadge;

let potionbadge;

let foodBadge;

let forest;

let library;

let cafeteria;

let wall;

let ground;

let home;

let school;

let banner;

let classroomdoor;

let cafedoor;

let cafeentrance;
let blackhole;

let beaker;

let desk;

let desk1;

let desk2;

let desk3;

let cobblestone;

let crackedStone;

let mossStone;

let paperStone;

let paperStone2;

let cafeTable;

let emptyCafeTable;

let floorlvl3;

let garbage;

let feather;

let eyeballs;

let krakenInk;

let stardust;

let bone;

let apple;

let watermelon;

let chicken;

let burger;

let sandwich;

let cookie;

let corn;

let foodcounter1;

let foodcounter2;

let foodcounter3;

let foodcounter4;

let fork;

// SOUNDS

let playerHitSound;

let fail;

let win;

let collect;

let walking;

let bgMusic;

let lvl2Music;

let lvl3Music;

let click;


let legendTimer = 0;

const LEGEND_VISIBLE_FRAMES = 900; 

const LEGEND_FADE_FRAMES = 60;

// SOCIAL BATTERY

let socialBattery = 100;

// INGREDIENTS (LVL2)

const ingredientTypes = [
  "Feather",

  "Eyeballs",

  "Kraken Ink",

  "Stardust",

  "Bone",
];

let potionbadgeUnlocked = false;

let foodBadgeUnlocked = false;

// FIREFLY BADGE

let badgeUnlocked = false;

let badgeX = 0;

let badgeY = 0;

let badgeScale = 1;

let badgeMessageTimer = 0;

// FIREFLY SPRITE SHEET

const FIREFLY = {
  frameWidth: 276.125,

  frameHeight: 268,

  numFrames: 8,

  animSpeed: 11,

  scale: 0.09,
};

// WALL EXPANSION/SHRINK

const WALL_MAX_EXPAND = 10;

const WALL_EXPAND_SPEED = 0.04;

const WALL_SHRINK_SPEED = 0.02;

const PROXIMITY_RADIUS = 7;

let wallExpansion = [];

let wallVariation = [];

// WALL MECHANIC (LOSE STATE)

let trappedTimer = 0;

const TRAPPED_DELAY = 30;

// PLAYER PERSPECTIVE

let camX = 0;

let camY = 0;

const CAM_SMOOTHING = 0.1;

// DIALOGUE (INTRO)

let introDialogueActive = false;

let introDialogueIndex = 0;

const introDialogue = [
  "... School's starting soon, I should get going.",

  "I don't want to be late for class!",

  "Oh, and the fireflies! Don't forget the fireflies.",
];

// DIALOGUE (LEVEL 2 INTRO)

let level2DialogueActive = false;

let level2DialogueIndex = 0;

const level2Dialogue = [
  "Okay, that journey was a lot... but I made it.",

  "I can't be late for chemistry class! I need ingredients for the potions assignment.",

  "Let's get moving before the ingredients run out!",
];

// DIALOGUE (LEVEL 3 INTRO)

let level3DialogueActive = false;

let level3DialogueIndex = 0;

const level3Dialogue = [
  "Whew, the potions are done. Now to get to the exit.",

  "This place looks trickier than the last one...",

  "Okay Faith, one more stretch. You've got this!",
];

// DIALOGUE (LEVEL 3 FOOD COLLECTED)

let level3FoodCollectedDialogueActive = false;

let level3FoodCollectedDialogueIndex = 0;

const level3FoodCollectedDialogue = [
  "Okay, that's all the food. Wait - the goblins noticed me!",

  "They're coming this way. I need to reach the exit!",

  "No time to waste, Faith. Move!",
];

const LEVEL3_CHASE_GOBLIN_COUNT = 4;

const LEVEL3_CHASE_GOBLIN_SPEED = 1.7;

const LEVEL3_CHASE_CATCH_RADIUS = 16;

const LEVEL3_CHASE_MIN_SPAWN_DISTANCE = 5; // in tiles, from the player

let level3ChaseActive = false;

let level3ChaseGoblins = [];

let level3ExitRevealed = false;

let level3ChaseCompleteDialogueActive = false;

let level3ChaseCompleteDialogueIndex = 0;

const level3ChaseCompleteDialogue = [
  "That was way too close!",

  "Okay, Faith... you made it out.",
];

// GOBLIN CHASE SPRITE SHEET (running animation)

const GOBLIN_COLLISION_RADIUS = 14;

const GOBLIN_LVL3_RUNNING = {
  frameWidth: 160,

  frameHeight: 180,

  numFrames: 15,

  animSpeed: 4,

  scale: 0.3,
};

// LASER DAMAGE

const INVINCIBLE_FRAMES = 60;

let playerInvincible = false;

let invincibleTimer = 0;

const LASER_DAMAGE = 10;

// FOR BORDERS | i.e. for when player gets hit by the laser beams

let hitFlashAlpha = 0;

const HIT_FLASH_MAX = 150;

const HIT_FLASH_DECAY = 8;

// GREEN HEALTH RECOVERY EDGE GLOW

let healFlashAlpha = 0;

const HEAL_FLASH_MAX = 120;

const HEAL_FLASH_DECAY = 5;

// COLLECTIBLE COUNTER FLASH

let collectibleFlashTimer = 0;

const COLLECTIBLE_FLASH_DURATION = 40; // frames

// PLAYER HITBOX

const HITBOX_RADIUS = 8;

const HITBOX_OFFSET_Y = 10;

function updateBeakers() {
  if (maze !== maze2 && maze !== maze3) return;

  let activeBeakers = maze === maze3 ? beakers3 : beakers;

  for (let b of activeBeakers) {
    if (b.state === "waiting") {
      b.timer++;

      if (b.timer >= 90) {
        b.state = "warning";

        b.timer = 0;
      }
    } else if (b.state === "warning") {
      b.timer++;

      if (b.timer >= 30) {
        b.state = "smashing";

        b.timer = 0;

        b.hasHitPlayer = false;
      }
    } else if (b.state === "smashing") {
      b.y += 8;

      if (b.y >= b.bottomY) {
        b.y = b.bottomY;

        b.state = "holding";

        b.timer = 0;
      }
    } else if (b.state === "holding") {
      b.timer++;

      if (b.timer >= 30) {
        b.state = "returning";
      }
    } else if (b.state === "returning") {
      b.y -= 5;

      if (b.y <= b.topY) {
        b.y = b.topY;

        b.state = "waiting";

        b.timer = 0;

        b.hasHitPlayer = false;
      }
    }
  }
}

function checkBeakerPlayerCollision() {
  // Only check collisions in Level 2

  if (maze !== maze2 && maze !== maze3) return;

  // Prevent repeated damage during invincibility

  if (playerInvincible) return;

  let playerFeetY = player.y + HITBOX_OFFSET_Y;

  let activeBeakers = maze === maze3 ? beakers3 : beakers;

  for (let beaker of activeBeakers) {
    // Only damage while smashing or while fully down

    let dangerous = beaker.state === "smashing" || beaker.state === "holding";

    if (!dangerous || beaker.hasHitPlayer) continue;

    let distanceToPlayer = dist(player.x, playerFeetY, beaker.x, beaker.y);

    if (distanceToPlayer < HITBOX_RADIUS + beaker.radius) {
      socialBattery -= BEAKER_DAMAGE;

      socialBattery = max(0, socialBattery);

      beaker.hasHitPlayer = true;

      // Reuse your existing damage effects

      playerInvincible = true;

      invincibleTimer = INVINCIBLE_FRAMES;

      playerHitSound.play();

      hitFlashAlpha = HIT_FLASH_MAX;
    }
  }
}

// LEVEL 3 FOOD COUNTER DECOR

function drawFoodCounters() {
  if (maze !== maze3) return;

  imageMode(CENTER);

  let counters = [
    { img: foodcounter1, row: 4, col: 23 },

    { img: foodcounter2, row: 5, col: 23 },

    { img: foodcounter3, row: 6, col: 23 },

    { img: foodcounter4, row: 7, col: 23 }, // <-- flagged: you gave row 6 twice, adjust if needed
  ];

  for (let c of counters) {
    let x = c.col * tileSize + tileSize / 2;

    let y = c.row * tileSize + tileSize / 2;

    image(c.img, x, y, tileSize, tileSize);
  }
}

// LEVEL 3 GARBAGE DECOR

function drawGarbage() {
  if (maze !== maze3) return;

  imageMode(CENTER);

  let x = 23 * tileSize + tileSize / 2;

  let y = 3 * tileSize + tileSize / 2;

  image(garbage, x, y, tileSize, tileSize);
}

let lasers = [
  // Top-most goblin

  {
    row: 2.3,

    col: 6.3,

    facing: "up",

    direction: "left",

    blinkRate: 80,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  // Right-most goblin

  {
    row: 5.3,

    col: 13.8,

    facing: "down",

    direction: "right",

    blinkRate: 100,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  // Goblin covering longest hallway

  {
    row: 9.3,

    col: 18.2,

    facing: "up",

    direction: "left",

    blinkRate: 150,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  // Goblin blocking the exit

  {
    row: 7.3,

    col: 23.2,

    facing: "up",

    direction: "left",

    blinkRate: 60,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },
];

let lasers2 = [
  // Top-most goblin

  {
    row: 2.3,

    col: 20.3,

    facing: "up",

    direction: "left",

    blinkRate: 80,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  {
    // 2ND TOP

    row: 4.9,

    col: 7.4,

    facing: "up",

    direction: "left",

    blinkRate: 150,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  {
    // 2ND BOTTOM

    row: 6.9,

    col: 2.3,

    facing: "up",

    direction: "left",

    blinkRate: 100,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  {
    // BOTTOM GOBLIN

    row: 11.9,

    col: 10.2,

    facing: "up",

    direction: "left",

    blinkRate: 60,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },
];

let lasers3 = [
  // Top-most goblin

  {
    row: 2.3,

    col: 23.3,

    facing: "up",

    direction: "left",

    blinkRate: 80,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  //2ND FROM TOP

  {
    row: 3.9,

    col: 5.3,

    facing: "up",

    direction: "left",

    blinkRate: 150,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  //3rd FROM TOP

  {
    row: 5.9,

    col: 4.3,

    facing: "down",

    direction: "right",

    blinkRate: 100,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },

  //BOTTOM MOST

  {
    row: 10.3,

    col: 22.2,

    facing: "up",

    direction: "left",

    blinkRate: 60,

    on: true,

    timer: 0,

    shaking: false,

    popOffset: 18,
  },
];

let laserBeams = [
  //top most laser

  {
    x1: 85,

    y1: 105, // beam start (pixel coordinates)

    x2: 260,

    y2: 105, // beam end (pixel coordinates)

    blinkRate: 80, // HAS TO MATCH WITH LASERS ABOVE

    on: true,

    timer: 0,
  },

  {
    x1: 575,

    y1: 225,

    x2: 680,

    y2: 225,

    blinkRate: 100,

    on: true,

    timer: 0,
  },

  {
    x1: 320,

    y1: 385,

    x2: 740,

    y2: 385,

    blinkRate: 150,

    on: true,

    timer: 0,
  },

  {
    x1: 844,

    y1: 305,

    x2: 940,

    y2: 305,

    blinkRate: 60,

    on: true,

    timer: 0,
  },
];

let laserBeams2 = [
  //top most laser

  {
    x1: 125,

    y1: 105, // beam start (pixel coordinates)

    x2: 810,

    y2: 105, // beam end (pixel coordinates)

    blinkRate: 80, // HAS TO MATCH WITH LASERS ABOVE

    on: true,

    timer: 0,
  },

  {
    x1: 325,

    y1: 225,

    x2: 550,

    y2: 225,

    blinkRate: 100,

    on: true,

    timer: 0,
  },

  {
    x1: 130,

    y1: 305,

    x2: 475,

    y2: 305,

    blinkRate: 150,

    on: true,

    timer: 0,
  },

  {
    x1: 450,

    y1: 500,

    x2: 950,

    y2: 500,

    blinkRate: 60,

    on: true,

    timer: 0,
  },
];

let laserBeams3 = [
  //top most laser

  {
    x1: 160,

    y1: 100, // beam start (pixel coordinates)

    x2: 955,

    y2: 100, // beam end (pixel coordinates)

    blinkRate: 80, // HAS TO MATCH WITH LASERS ABOVE

    on: true,

    timer: 0,
  },

  {
    x1: 50,

    y1: 165,

    x2: 230,

    y2: 165,

    blinkRate: 100,

    on: true,

    timer: 0,
  },

  {
    x1: 215,

    y1: 245,

    x2: 920,

    y2: 245,

    blinkRate: 150,

    on: true,

    timer: 0,
  },

  {
    x1: 170,

    y1: 420,

    x2: 900,

    y2: 420,

    blinkRate: 60,

    on: true,

    timer: 0,
  },
];

// LEVEL 3 CAFETERIA BAR DIRECTION ARROW

// GOAL DIRECTION ARROWS (orbit near the screen edge, distinct from laser warnings)

const GOAL_ARROW_ORBIT_RADIUS = 95; // pushed out closer to the visible edge

function drawGoalArrow(targetX, targetY, colorArr, label) {
  let angle = atan2(targetY - player.y, targetX - player.x);

  let ax = player.x + cos(angle) * GOAL_ARROW_ORBIT_RADIUS;

  let ay = player.y + sin(angle) * GOAL_ARROW_ORBIT_RADIUS;

  let pulse = 1 + sin(frameCount * 0.12) * 0.15;

  push();

  translate(ax, ay);

  rotate(angle);

  // Glowing ring behind the arrow for visibility

  noStroke();

  fill(colorArr[0], colorArr[1], colorArr[2], 70);

  circle(0, 0, 36 * pulse);

  // White-outlined chevron arrow

  stroke(255);

  strokeWeight(2.5);

  fill(colorArr[0], colorArr[1], colorArr[2], 255);

  triangle(16 * pulse, 0, -10 * pulse, -11 * pulse, -10 * pulse, 11 * pulse);

  pop();

  // Objective label â€” drawn upright and screen-sized, centered under the arrow

  if (label) {
    push();

    translate(ax, ay + 26);

    scale(1 / ZOOM); // counteract the camera zoom so text stays a fixed screen size

    noStroke();

    fill(0, 0, 0, 180);

    rectMode(CENTER);

    textFont("Monospace");

    textStyle(BOLD);

    textSize(15);

    let labelW = textWidth(label) + 20;

    rect(0, 0, labelW, 24, 6);

    fill(255);

    textAlign(CENTER, CENTER);

    text(label, 0, 1);

    pop();
  }
}

// Finds the {row, col} of the maze's exit tile (value 3)

function findExitTile() {
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] === 3) {
        return { row: r, col: c };
      }
    }
  }

  return null;
}

// LEVEL 3 EXIT DIRECTION ARROW

function drawExitArrow() {
  let exitTile = findExitTile();

  if (!exitTile) return;

  let targetX = exitTile.col * tileSize + tileSize / 2;

  let targetY = exitTile.row * tileSize + tileSize / 2;

  drawGoalArrow(targetX, targetY, [220, 90, 255], "Go to the Exit"); // magenta
}

// PATHWAY TILE VARIATION (LEVEL 2)

let pathTiles = []; // pathTiles[row][col] = image to use for that floor tile

function setupPathTiles() {
  let stoneVariants = [
    cobblestone,

    crackedStone,

    mossStone,

    paperStone,

    paperStone2,
  ];

  pathTiles = [];

  for (let r = 0; r < ROWS; r++) {
    pathTiles[r] = [];

    for (let c = 0; c < COLS; c++) {
      let index = floor(random(stoneVariants.length));

      pathTiles[r][c] = stoneVariants[index];
    }
  }
}

// WALL TILE VARIATION (LEVEL 3)

let wallTiles3 = []; // wallTiles3[row][col] = image to use for that wall tile

function setupWallTiles3() {
  let tableVariants = [cafeTable, emptyCafeTable];

  wallTiles3 = [];

  for (let r = 0; r < ROWS; r++) {
    wallTiles3[r] = [];

    for (let c = 0; c < COLS; c++) {
      let index = floor(random(tableVariants.length));

      wallTiles3[r][c] = tableVariants[index];
    }
  }
}

// WALL TILE VARIATION (LEVEL 2)

let wallTiles = []; // wallTiles[row][col] = image to use for that wall tile

function setupWallTiles() {
  let deskVariants = [desk, desk1, desk2, desk3];

  wallTiles = [];

  for (let r = 0; r < ROWS; r++) {
    wallTiles[r] = [];

    for (let c = 0; c < COLS; c++) {
      let index = floor(random(deskVariants.length));

      wallTiles[r][c] = deskVariants[index];
    }
  }
}

// LEVEL 2 BEAKER OBSTACLES

const BEAKER_DAMAGE = 10;

let beakers = [
  // 1. Near the start

  {
    x: 4 * tileSize + tileSize / 2,

    topY: 20,

    bottomY: 2 * tileSize + tileSize / 2,

    y: 20,

    radius: 18,

    state: "waiting",

    timer: 0,

    hasHitPlayer: false,
  },

  // 2. Top-right corridor

  {
    x: 20 * tileSize + tileSize / 2,

    topY: 20,

    bottomY: 2 * tileSize + tileSize / 2,

    y: 20,

    radius: 18,

    state: "waiting",

    timer: 30,

    hasHitPlayer: false,
  },

  // 3. Centre

  {
    x: 11 * tileSize + tileSize / 2,

    topY: 140,

    bottomY: 5 * tileSize + tileSize / 2,

    y: 140,

    radius: 18,

    state: "waiting",

    timer: 60,

    hasHitPlayer: false,
  },

  // 4. Middle-right

  {
    x: 18 * tileSize + tileSize / 2,

    topY: 180,

    bottomY: 7 * tileSize + tileSize / 2,

    y: 180,

    radius: 18,

    state: "waiting",

    timer: 90,

    hasHitPlayer: false,
  },

  // 5. Lower-left

  {
    x: 5 * tileSize + tileSize / 2,

    topY: 280,

    bottomY: 10 * tileSize + tileSize / 2,

    y: 280,

    radius: 18,

    state: "waiting",

    timer: 15,

    hasHitPlayer: false,
  },

  // 6. Bottom-middle

  {
    x: 13 * tileSize + tileSize / 2,

    topY: 320,

    bottomY: 12 * tileSize + tileSize / 2,

    y: 320,

    radius: 18,

    state: "waiting",

    timer: 45,

    hasHitPlayer: false,
  },

  // 7. Near the exit

  {
    x: 22 * tileSize + tileSize / 2,

    topY: 320,

    bottomY: 12 * tileSize + tileSize / 2,

    y: 320,

    radius: 18,

    state: "waiting",

    timer: 75,

    hasHitPlayer: false,
  },
];

function drawBeakers() {
  if (maze !== maze2 && maze !== maze3) return;

  imageMode(CENTER);

  let activeBeakers = maze === maze3 ? beakers3 : beakers;

  let hazardImg = maze === maze3 ? fork : beaker;

  for (let b of activeBeakers) {
    let shakeX = 0;

    if (b.state === "warning") {
      shakeX = sin(frameCount * 1.5) * 3;
    }

    let hazardSize = b.radius * 2.2;

    stroke(100);

    strokeWeight(3);

    if (maze === maze3) {
      line(b.x, b.anchorY, b.x + shakeX, b.y - hazardSize / 2);
    } else {
      line(b.x, b.topY - 40, b.x + shakeX, b.y - hazardSize / 2);
    }

    noStroke();

    image(hazardImg, b.x + shakeX, b.y, hazardSize, hazardSize);
  }
}

let beakers3 = [
  // Fork 1 â€” attached to top wall/table

  {
    x: 9 * tileSize + tileSize / 2,

    anchorY: 2 * tileSize,

    topY: 3 * tileSize,

    bottomY: 6 * tileSize,

    y: 3 * tileSize,

    radius: 18,

    state: "waiting",

    timer: 0,

    hasHitPlayer: false,
  },

  // Top-right fork â€” attached to the table above

  {
    x: 18 * tileSize + tileSize / 2,

    anchorY: 2 * tileSize, // bottom edge of top table

    topY: 2 * tileSize + tileSize / 2, // fork starts below table

    bottomY: 6 * tileSize + tileSize / 2, // how far it drops

    y: 2 * tileSize + tileSize / 2,

    radius: 18,

    state: "waiting",

    timer: 60,

    hasHitPlayer: false,
  },

  // Fork 3 â€” attached under middle table

  {
    x: 13 * tileSize + tileSize / 2,

    anchorY: 5 * tileSize,

    topY: 6 * tileSize,

    bottomY: 9 * tileSize,

    y: 6 * tileSize,

    radius: 18,

    state: "waiting",

    timer: 60,

    hasHitPlayer: false,
  },

  // Fork 4 â€” attached under middle-left table

  {
    x: 7 * tileSize + tileSize / 2,

    anchorY: 7 * tileSize,

    topY: 8 * tileSize,

    bottomY: 11 * tileSize,

    y: 8 * tileSize,

    radius: 18,

    state: "waiting",

    timer: 90,

    hasHitPlayer: false,
  },

  // Fork 5 â€” attached under lower-middle table

  {
    x: 15 * tileSize + tileSize / 2,

    anchorY: 8 * tileSize,

    topY: 9 * tileSize,

    bottomY: 12 * tileSize,

    y: 9 * tileSize,

    radius: 18,

    state: "waiting",

    timer: 15,

    hasHitPlayer: false,
  },

  // Fork 6 â€” attached under lower-right table

  {
    x: 20 * tileSize + tileSize / 2,

    anchorY: 8 * tileSize,

    topY: 9 * tileSize,

    bottomY: 12 * tileSize,

    y: 9 * tileSize,

    radius: 18,

    state: "waiting",

    timer: 45,

    hasHitPlayer: false,
  },
];

// PLAYER MODEL CONSTRUCTOR

let player;

let collectibles = [];

let collectedCount = 0;

let flyingCollectibles = [];

const COUNTER_X = 670;

const COUNTER_Y = 32;

class Player {
  constructor(x, y) {
    this.x = x;

    this.y = y;

    this.speed = 2.5;

    this.vx = 0;

    this.vy = 0;

    this.facing = "down";

    this.frame = 0;
  }

  update() {
    let inputX = 0;

    let inputY = 0;

    if (keyIsDown(65)) inputX = -1;

    if (keyIsDown(68)) inputX = 1;

    if (keyIsDown(87)) inputY = -1;

    if (keyIsDown(83)) inputY = 1;

    if (inputX !== 0) {
      this.vx = inputX;

      this.vy = 0;
    } else if (inputY !== 0) {
      this.vx = 0;

      this.vy = inputY;
    } else {
      this.vx = 0;

      this.vy = 0;
    }

    if (this.vx === 1) this.facing = "right";

    if (this.vx === -1) this.facing = "left";

    if (this.vy === -1) this.facing = "up";

    if (this.vy === 1) this.facing = "down";

    if (socialBattery <= 0) {
      this.vx = 0;

      this.vy = 0;

      if (walking.isPlaying()) walking.stop();

      return;
    }

    let nextX = this.x + this.vx * this.speed;

    let nextY = this.y + this.vy * this.speed;

    const isMoving = this.vx !== 0 || this.vy !== 0;

    if (isMoving && !walking.isPlaying()) {
      walking.play();
    }

    if (!isMoving && walking.isPlaying()) {
      walking.stop();
    }

    const SLIDE_AMOUNT = 3;

    if (this.vx !== 0) {
      // Try normal horizontal movement

      if (canMoveTo(nextX, this.y)) {
        this.x = nextX;
      }

      // If blocked, gently slide upward
      else if (canMoveTo(nextX, this.y - SLIDE_AMOUNT)) {
        this.x = nextX;

        this.y -= SLIDE_AMOUNT;
      }

      // If still blocked, gently slide downward
      else if (canMoveTo(nextX, this.y + SLIDE_AMOUNT)) {
        this.x = nextX;

        this.y += SLIDE_AMOUNT;
      }
    }

    if (this.vy !== 0) {
      // Try normal vertical movement

      if (canMoveTo(this.x, nextY)) {
        this.y = nextY;
      }

      // If blocked, gently slide left
      else if (canMoveTo(this.x - SLIDE_AMOUNT, nextY)) {
        this.x -= SLIDE_AMOUNT;

        this.y = nextY;
      }

      // If still blocked, gently slide right
      else if (canMoveTo(this.x + SLIDE_AMOUNT, nextY)) {
        this.x += SLIDE_AMOUNT;

        this.y = nextY;
      }
    }
  }

  draw() {
    //This will flicker the character sprite when they get hit by laser

    if (playerInvincible && floor(invincibleTimer / 6) % 2 === 0) return;

    let row = SPRITE.rows[this.facing];

    let frameW = SPRITE.frameWidth;

    let frameH = SPRITE.frameHeight;

    if (this.vx !== 0 || this.vy !== 0) {
      this.frame = (this.frame + 1) % (SPRITE.numFrames * SPRITE.animSpeed);
    }

    let col = floor(this.frame / SPRITE.animSpeed);

    let srcX = col * frameW;

    let srcY = row * frameH;

    let drawW = frameW * SPRITE.scale;

    let drawH = frameH * SPRITE.scale;

    imageMode(CENTER);

    let offset = SPRITE.offsets[this.facing];

    image(
      character,

      this.x + offset.x,

      this.y + HITBOX_OFFSET_Y + offset.y,

      drawW,

      drawH,

      srcX,

      srcY,

      frameW,

      frameH,
    );
  }
}

// PLAYER SPRITE SHEET

const SPRITE = {
  frameWidth: 150,

  frameHeight: 300,

  numFrames: 4,

  animSpeed: 20,

  scale: 0.2,

  rows: {
    down: 0,

    up: 1,

    right: 2,

    left: 3,
  },

  offsets: {
    down: { x: 0, y: 0 },

    up: { x: 0, y: 0 },

    right: { x: 0.1, y: -10 },

    left: { x: 2.2, y: -10 },
  },
};

const GOBLIN_LVL1 = {
  frameWidth: 100,

  frameHeight: 120,

  numFrames: 16,

  animSpeed: 12,

  scale: 0.4,

  redEyeStart: 9,

  redEyeEnd: 12,
};

const GOBLIN_LVL2 = {
  frameWidth: 149,

  frameHeight: 180,

  numFrames: 16,

  animSpeed: 12,

  scale: 0.27, // scaled down since frames are 3x bigger â€” tune to taste

  redEyeStart: 8,

  redEyeEnd: 11,
};

const GOBLIN_LVL3 = {
  frameWidth: 150,

  frameHeight: 180,

  numFrames: 16,

  animSpeed: 10,

  scale: 0.3, // scaled down since frames are 3x bigger â€” tune to taste

  redEyeStart: 8,

  redEyeEnd: 11,
};

let GOBLIN = GOBLIN_LVL1;

// TUTORIAL PAGE

let showTutorial = false;

const tutorialButton = {
  x: 290,

  y: 420,

  w: 220,

  h: 50,
};

function preload() {
  character = loadImage("assets/images/character.png");

  characterlvl2 = loadImage("assets/images/characterlvl2.png");

  characterlvl3 = loadImage("assets/images/characterlvl3.png");

  startScreen = loadImage("assets/images/homescreen.png");

  restartScreen = loadImage("assets/images/restartscreen.png");

  levelOneComplete = loadImage("assets/images/completelvl1.png");

  fireflySprite = loadImage("assets/images/firefly.png");

  fireflyBadge = loadImage("assets/images/fireflybadge.png");

  potionbadge = loadImage("assets/images/potionbadge.png");

  foodBadge = loadImage("assets/images/foodBadge.png");

  completelvl2 = loadImage("assets/images/completelvl2.png");

  gamecompleted = loadImage("assets/images/gamecompleted.png");

  faillvl2 = loadImage("assets/images/faillvl2.png");

  faillvl3 = loadImage("assets/images/faillvl3.png");

  forest = loadImage("assets/images/forest.png");

  library = loadImage("assets/images/library.png");

  cafeteria = loadImage("assets/images/cafeteria.png");

  wall = loadImage("assets/images/trees.png");

  ground = loadImage("assets/images/dirt.png");

  home = loadImage("assets/images/house.png");

  school = loadImage("assets/images/school.png");

  banner = loadImage("assets/images/HUD.png");

  goblins = loadImage("assets/images/goblins.png");

  goblinslvl2 = loadImage("assets/images/goblinslvl2.png");

  goblinslvl3 = loadImage("assets/images/goblinslvl3.png");

  goblinslvl3running = loadImage("assets/images/goblinslvl3-running.png");

  goblin = loadImage("assets/images/goblin.png");

  classroomdoor = loadImage("assets/images/classroomdoor.png");

  cafedoor = loadImage("assets/images/cafedoor.png");

  cafeentrance = loadImage("assets/images/cafeentrance.png");

  blackhole = loadImage("assets/images/blackhole.png");

  beaker = loadImage("assets/images/flask.png");

  desk = loadImage("assets/images/desk.png");

  desk1 = loadImage("assets/images/desksMaterials.jpg");

  desk2 = loadImage("assets/images/desksMaterials2.jpg");

  desk3 = loadImage("assets/images/desksMaterials3.jpg");

  cobblestone = loadImage("assets/images/cobblestone.png");

  crackedStone = loadImage("assets/images/crackedStone.png");

  mossStone = loadImage("assets/images/mossStone.png");

  paperStone = loadImage("assets/images/paperStone.png");

  paperStone2 = loadImage("assets/images/paperStone2.png");

  cafeTable = loadImage("assets/images/cafeTable.png");

  emptyCafeTable = loadImage("assets/images/emptyCafeTable.png");

  floorlvl3 = loadImage("assets/images/floorlvl3.png");

  garbage = loadImage("assets/images/garbage.png");

  feather = loadImage("assets/images/feather.png");

  eyeballs = loadImage("assets/images/eyeballs.png");

  krakenInk = loadImage("assets/images/krakenInk.png");

  stardust = loadImage("assets/images/stardust.png");

  bone = loadImage("assets/images/bone.png");

  apple = loadImage("assets/images/apple.png");

  watermelon = loadImage("assets/images/watermelon.png");

  chicken = loadImage("assets/images/drumstick.png");

  burger = loadImage("assets/images/burger.png");

  sandwich = loadImage("assets/images/pbjsandwich.png");

  cookie = loadImage("assets/images/cookie.png");

  corn = loadImage("assets/images/corn.png");

  foodcounter1 = loadImage("assets/images/foodcounter1.png");

  foodcounter2 = loadImage("assets/images/foodcounter2.png");

  foodcounter3 = loadImage("assets/images/foodcounter3.png");

  foodcounter4 = loadImage("assets/images/foodcounter4.png");

  fork = loadImage("assets/images/fork.png");

  playerHitSound = loadSound("assets/sounds/hit.mp3");

  fail = loadSound("assets/sounds/fail.mp3");

  win = loadSound("assets/sounds/win.mp3");

  collect = loadSound("assets/sounds/collect.mp3");

  walking = loadSound("assets/sounds/walking.mp3");

  bgMusic = loadSound("assets/sounds/bgmusic.mp3");

  lvl2Music = loadSound("assets/sounds/lvl2Music.mp3");

  lvl3Music = loadSound("assets/sounds/lvl3Music.mp3");

  click = loadSound("assets/sounds/pop.mp3");
}

function setup() {
  createCanvas(1280, 720);

  outer: for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] === 2) {
        let x = c * tileSize + tileSize / 2;

        let y = r * tileSize + tileSize / 2;

        player = new Player(x, y);

        break outer;
      }
    }
  }

  legendTimer = 0

  initWallExpansion();

  setupCollectibles();

  setupPathTiles();

  setupWallTiles();

  setupWallTiles3();
}

function updateCamera() {
  let targetX = player.x - width / 2;

  let targetY = player.y - height / 2;

  camX = lerp(camX, targetX, CAM_SMOOTHING);

  camY = lerp(camY, targetY, CAM_SMOOTHING);
}

function draw() {
  imageMode(CORNER);

  rectMode(CORNER);

  background(forest);

  if (!gameStarted && !showTutorial) {
    drawStartScreen();

    return;
  }

  if (showTutorial) {
    drawTutorialOverlay();

    return;
  }

  if (firstLevelComplete) {
    drawFirstLevelCompleteScreen();

    return;
  }

  if (secondLevelComplete) {
    drawSecondLevelCompleteScreen();

    return;
  }

  if (thirdLevelComplete) {
    drawThirdLevelCompleteScreen();

    return;
  }

  if (introDialogueActive) {
    updateCamera();


    push();

    let zoom = 3.5;

    translate(width / 2, height / 2);

    scale(zoom);

    translate(-player.x, -player.y);

    drawMaze();

    player.draw();

    pop();

    drawSocialBar();

    drawIntroDialogueBox();

    return; // skip player movement, lasers, collectibles until she's done talking
  }

  if (level2DialogueActive) {
    updateCamera();

    push();

    let zoom = 3.5;

    translate(width / 2, height / 2);

    scale(zoom);

    translate(-player.x, -player.y);

    drawMaze();

    player.draw();

    pop();

    drawSocialBar();

    drawLevel2DialogueBox();

    return;
  }

  if (level3DialogueActive) {
    updateCamera();

    push();

    let zoom = 3.5;

    translate(width / 2, height / 2);

    scale(zoom);

    translate(-player.x, -player.y);

    drawMaze();

    player.draw();

    pop();

    drawSocialBar();

    drawLevel3DialogueBox();

    return;
  }

  if (level3FoodCollectedDialogueActive) {
    updateCamera();

    push();

    let zoom = 3.5;

    translate(width / 2, height / 2);

    scale(zoom);

    translate(-player.x, -player.y);

    drawMaze();

    drawFoodCounters();

    drawGarbage();

    player.draw();

    pop();

    drawSocialBar();

    drawLevel3FoodDialogueBox(
      level3FoodCollectedDialogue,

      level3FoodCollectedDialogueIndex,
    );

    return;
  }

  if (level3ChaseCompleteDialogueActive) {
    background(15, 15, 30);

    drawLevel3FoodDialogueBox(
      level3ChaseCompleteDialogue,

      level3ChaseCompleteDialogueIndex,
    );

    return;
  }

  updateCamera();

  if (gameOver) {
    drawLoseScreen();

    return;
  }

  if (!gameOver && !introDialogueActive && !level2DialogueActive && !level3DialogueActive) {
  legendTimer++;
}

  push();

  let zoom = 3.5;

  translate(width / 2, height / 2);

  scale(zoom);

  translate(-player.x, -player.y);

  updateWallExpansion();

  drawMaze();

  drawFoodCounters();

  drawGarbage();

  // LEVEL 1 HAZARDS

  if (maze === maze1 || maze === maze2 || maze === maze3) {
    updateLasers();

    drawLasers();
  }

  // LEVEL 2 AND LEVEL 3 BEAKER HAZARDS

  if (maze === maze2 || maze === maze3) {
    updateBeakers();

    drawBeakers();
  }

  player.update();

  if (socialBattery > 0) {
    resolveWallPush();
  }

  // Laser beams

  if (maze === maze1 || maze === maze2 || maze === maze3) {
    drawLaserBeams();
  }

  updateFireflies();

  drawCollectibles();

  checkCollectibles();

  if (maze === maze3 && level3ChaseActive) {
    updateLevel3Chase();

    checkLevel3ChaseCatch();
  }

  player.draw();

  if (maze === maze3 && level3ChaseActive) {
    drawLevel3ChaseGoblins();

    drawExitArrow();
  }

  if (maze === maze1 || maze === maze2 || maze === maze3) {
    checkLaserPlayerCollision();
  }

  // LEVEL 2 AND LEVEL 3 BEAKER DAMAGE

  if (maze === maze2 || maze === maze3) {
    checkBeakerPlayerCollision();
  }

  // updateinvincibility checks if the character is invisible, if it is, then the character takesno damage

  //    1 second, otherwise they take damage and the counter is reset to 60 FRAMES (aka 1 second)

  updateInvincibility();

  pop();

  updateFlyingCollectibles();

  if (hitFlashAlpha > 0) {
    hitFlashAlpha = max(0, hitFlashAlpha - HIT_FLASH_DECAY);

    drawRedFlash(hitFlashAlpha);
  }

  if (healFlashAlpha > 0) {
    drawHealFlash(healFlashAlpha);

    healFlashAlpha = max(0, healFlashAlpha - HEAL_FLASH_DECAY);
  }

  drawVignette();

  drawLaserWarnings();

  drawLaserWarningLegend();

  updateBadge();

  drawBadge();

  if (socialBattery > 70) {
    player.speed = 2.5;
  } else if (socialBattery > 30) {
    player.speed = 2;
  } else {
    player.speed = 1.5;
  }

  let playerCol = floor(player.x / tileSize);

  let playerRow = floor(player.y / tileSize);

  if (maze[playerRow][playerCol] === 3) {
    if (maze === maze1) {
      firstLevelComplete = true;
    } else if (maze === maze2) {
      secondLevelComplete = true;
    } else if (maze === maze3 && level3ChaseActive) {
      level3ChaseActive = false;

      level3ChaseGoblins = [];

      level3ChaseCompleteDialogueActive = true;

      level3ChaseCompleteDialogueIndex = 0;
    }
  }

  // HUD first

  drawSocialBar();

  // Flying collectible above the wooden HUD

  drawFlyingCollectibles();
}

function completeLevel3() {
  if (lvl3Music.isPlaying()) lvl3Music.stop();

  win.play();

  thirdLevelComplete = true;
}

function keyPressed() {
  if (introDialogueActive && (key === " " || keyCode === ENTER)) {
    click.play();

    introDialogueIndex++;

    if (introDialogueIndex >= introDialogue.length) {
      introDialogueActive = false;
    }

    return;
  }

  if (level2DialogueActive && (key === " " || keyCode === ENTER)) {
    click.play();

    level2DialogueIndex++;

    if (level2DialogueIndex >= level2Dialogue.length) {
      level2DialogueActive = false;
    }

    return;
  }

  if (level3DialogueActive && (key === " " || keyCode === ENTER)) {
    click.play();

    level3DialogueIndex++;

    if (level3DialogueIndex >= level3Dialogue.length) {
      level3DialogueActive = false;
    }

    return;
  }

  if (level3FoodCollectedDialogueActive && (key === " " || keyCode === ENTER)) {
    click.play();

    level3FoodCollectedDialogueIndex++;

    if (
      level3FoodCollectedDialogueIndex >= level3FoodCollectedDialogue.length
    ) {
      level3FoodCollectedDialogueActive = false;
    }

    return;
  }

  if (level3ChaseCompleteDialogueActive && (key === " " || keyCode === ENTER)) {
    level3ChaseCompleteDialogueIndex++;

    if (
      level3ChaseCompleteDialogueIndex >= level3ChaseCompleteDialogue.length
    ) {
      level3ChaseCompleteDialogueActive = false;

      completeLevel3();
    }

    return;
  }

  if (key === " " && !gameStarted) {
    showTutorial = true;

    // start background music once

    if (!bgMusic.isPlaying()) {
      bgMusic.loop(); // loop keeps it playing continuously
    }
  }

  if (key === "r" || key === "R") {
    if (gameOver) restartGame();
  }

  if (key === "n" || key === "N") {
    loadSecondLevel();
  }

  if (key === "m" || key === "M") {
    loadThirdLevel();
  }
}

function mousePressed() {
  if (introDialogueActive) {
    click.play();

    introDialogueIndex++;

    if (introDialogueIndex >= introDialogue.length) {
      introDialogueActive = false;
    }

    return; // don't let this click fall through to help button etc.
  }

  if (level2DialogueActive) {
    click.play();

    level2DialogueIndex++;

    if (level2DialogueIndex >= level2Dialogue.length) {
      level2DialogueActive = false;
    }

    return;
  }

  if (level3DialogueActive) {
    click.play();

    level3DialogueIndex++;

    if (level3DialogueIndex >= level3Dialogue.length) {
      level3DialogueActive = false;
    }

    return;
  }

  if (level3FoodCollectedDialogueActive) {
    click.play();

    level3FoodCollectedDialogueIndex++;

    if (
      level3FoodCollectedDialogueIndex >= level3FoodCollectedDialogue.length
    ) {
      level3FoodCollectedDialogueActive = false;
    }

    return;
  }

  if (level3ChaseCompleteDialogueActive) {
    level3ChaseCompleteDialogueIndex++;

    if (
      level3ChaseCompleteDialogueIndex >= level3ChaseCompleteDialogue.length
    ) {
      level3ChaseCompleteDialogueActive = false;

      completeLevel3();
    }

    return;
  }

  // Continue button

  if (showTutorial) {
    if (
      mouseX >= tutorialButton.x &&
      mouseX <= tutorialButton.x + tutorialButton.w &&
      mouseY >= tutorialButton.y &&
      mouseY <= tutorialButton.y + tutorialButton.h
    ) {
      click.play();

      showTutorial = false;

      // Only start the game the very first time

      if (!gameStarted) {
        gameStarted = true;

        introDialogueActive = true;

        introDialogueIndex = 0;
      }
    }
  }

  // Help button on the HUD

  if (mouseX >= 1210 && mouseX <= 1240 && mouseY >= 15 && mouseY <= 45) {
    click.play();

    showTutorial = true;

    return;
  }
}

// COLLISION CHECK

function canMoveTo(x, y) {
  let feetY = y + HITBOX_OFFSET_Y;

  let points = [
    [x - HITBOX_RADIUS, feetY],

    [x + HITBOX_RADIUS, feetY],

    [x, feetY - HITBOX_RADIUS],

    [x, feetY + HITBOX_RADIUS],
  ];

  for (let [px, py] of points) {
    let col = floor(px / tileSize);

    let row = floor(py / tileSize);

    if (row < 0 || row >= ROWS || col < 0 || col >= COLS) return false;

    let tile = maze[row][col];

    if (tile !== 0 && tile !== 2 && tile !== 3) return false;

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        let nr = row + dr,
          nc = col + dc;

        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;

        if (maze[nr][nc] !== 1) continue;

        let expand = getFlowingExpand(nr, nc);

        let left = nc * tileSize - expand;

        let right = nc * tileSize + tileSize + expand;

        let top = nr * tileSize - expand;

        let bottom = nr * tileSize + tileSize + expand;

        if (px > left && px < right && py > top && py < bottom) return false;
      }
    }
  
      for (let g of lasers) {
      let gx = g.col * tileSize + tileSize / 2;
      let gy = g.row * tileSize + tileSize / 2;

      let d = dist(px, py, gx, gy);
      if (d < GOBLIN_COLLISION_RADIUS) return false;
    }
  }


  return true;
}

// WALL EXPANSION

function resolveWallPush() {
  if (socialBattery <= 0) return;

  let radius = HITBOX_RADIUS;

  let feetX = player.x;

  let feetY = player.y + HITBOX_OFFSET_Y;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] !== 1) continue;

      let expand = getFlowingExpand(r, c);

      let wallLeft = c * tileSize - expand;

      let wallRight = c * tileSize + tileSize + expand;

      let wallTop = r * tileSize - expand;

      let wallBottom = r * tileSize + tileSize + expand;

      let closestX = constrain(feetX, wallLeft, wallRight);

      let closestY = constrain(feetY, wallTop, wallBottom);

      let dx = feetX - closestX;

      let dy = feetY - closestY;

      let d = sqrt(dx * dx + dy * dy);

      if (d < radius && d > 0) {
        let overlap = radius - d;

        player.x += (dx / d) * overlap;

        player.y += (dy / d) * overlap;
      }
    }
  }
}

function initWallExpansion() {
  for (let r = 0; r < ROWS; r++) {
    wallExpansion[r] = [];

    wallVariation[r] = [];

    for (let c = 0; c < COLS; c++) {
      wallExpansion[r][c] = 0;

      wallVariation[r][c] = random(0.6, 1.3);
    }
  }
}

function updateWallExpansion() {
  let batteryTarget = map(socialBattery, 100, 0, 0, 1);

  batteryTarget = constrain(batteryTarget, 0, 1);

  batteryTarget = pow(batteryTarget, 3);

  let playerCol = player.x / tileSize;

  let playerRow = player.y / tileSize;

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] !== 1) continue;

      let d = dist(c, r, playerCol, playerRow);

      let proximity = constrain(map(d, 0, PROXIMITY_RADIUS, 1, 0), 0, 1);

      let target;

      if (socialBattery <= 0) {
        target = 1; // still fully locks at zero, variation doesn't apply here
      } else {
        target = batteryTarget * proximity * wallVariation[r][c];

        target = constrain(target, 0, 1); // in case variation pushes it over 1
      }

      if (wallExpansion[r][c] < target) {
        wallExpansion[r][c] = min(
          wallExpansion[r][c] + WALL_EXPAND_SPEED,

          target,
        );
      } else if (wallExpansion[r][c] > target) {
        wallExpansion[r][c] = max(
          wallExpansion[r][c] - WALL_SHRINK_SPEED,

          target,
        );
      }
    }
  }
}

function getFlowingExpand(r, c) {
  let base = wallExpansion[r][c] * WALL_MAX_EXPAND;

  // Each tile gets its own noise "channel" via offset seeds (r, c),

  // animated over time via frameCount. This makes every wall wobble

  // independently and smoothly, rather than in lockstep.

  let n = noise(c * 0.3, r * 0.3, frameCount * 0.01);

  // Map noise (0â€“1) to a wobble range, e.g. Â±3px

  let wobble = map(n, 0, 1, -3, 3);

  // Only wobble once the wall has started expanding â€”

  // fully-open walls (expansion 0) shouldn't wiggle at all

  wobble *= wallExpansion[r][c];

  return base + wobble;
}

// COLLECTIBLES

function setupCollectibles() {
  collectibles = [
    // Top section

    {
      col: 2,

      row: 1,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 10,

      row: 2,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 16,

      row: 3,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 20,

      row: 5,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    // Middle section

    {
      col: 3,

      row: 8,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 8,

      row: 9,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 16,

      row: 9,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    // Bottom section

    {
      col: 5,

      row: 10,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 12,

      row: 11,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 17,

      row: 11,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },

    {
      col: 22,

      row: 12,

      collected: false,

      frame: floor(random(FIREFLY.numFrames)),

      frameTimer: 0,
    },
  ];
}

function setupFoodCollectibles() {
  collectibles = [
    { col: 21, row: 2, collected: false, type: "apple" },

    { col: 17, row: 3, collected: false, type: "watermelon" },

    { col: 12, row: 5, collected: false, type: "burger" },

    { col: 5, row: 5, collected: false, type: "sandwich" },

    { col: 18, row: 7, collected: false, type: "cookie" },

    { col: 4, row: 8, collected: false, type: "corn" },

    { col: 11, row: 10, collected: false, type: "chicken" },
  ];
}

function setupPotionIngredients() {
  collectibles = [];

  // Find all path tiles in maze2

  let validTiles = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze2[r][c] === 0) {
        validTiles.push({ row: r, col: c });
      }
    }
  }

  // Randomly place 5 ingredients

  for (let i = 0; i < 5; i++) {
    let index = floor(random(validTiles.length));

    let spot = validTiles[index];

    validTiles.splice(index, 1);

    collectibles.push({
      row: spot.row,

      col: spot.col,

      collected: false,

      type: ingredientTypes[i],
    });
  }
}

function updateFireflies() {
  // Fireflies only exist in Level 1

  if (maze !== maze1) return;

  for (let item of collectibles) {
    if (item.collected) continue;

    item.frameTimer++;

    if (item.frameTimer >= FIREFLY.animSpeed) {
      item.frameTimer = 0;

      item.frame = (item.frame + 1) % FIREFLY.numFrames;
    }
  }
}

function drawCollectibles() {
  imageMode(CENTER);

  for (let item of collectibles) {
    if (item.collected) continue;

    let x = item.col * tileSize + tileSize / 2;

    let y = item.row * tileSize + tileSize / 2;

    // LEVEL 1: Fireflies

    if (maze === maze1) {
      let sx = item.frame * FIREFLY.frameWidth;

      let sy = 0;

      let dw = FIREFLY.frameWidth * FIREFLY.scale;

      let dh = FIREFLY.frameHeight * FIREFLY.scale;

      image(
        fireflySprite,

        x,

        y,

        dw,

        dh,

        sx,

        sy,

        FIREFLY.frameWidth,

        FIREFLY.frameHeight,
      );
    }

    // LEVEL 2: POTION COLLECTIBLE
    else if (maze === maze2) {
      let img;

      if (item.type === "Feather") {
        img = feather;
      } else if (item.type === "Eyeballs") {
        img = eyeballs;
      } else if (item.type === "Kraken Ink") {
        img = krakenInk;
      } else if (item.type === "Stardust") {
        img = stardust;
      } else if (item.type === "Bone") {
        img = bone;
      }

      image(img, x, y, 32, 32);
    }

    // LEVEL 3: Food images
    else if (maze === maze3) {
      let img = null;

      switch (item.type) {
        case "apple":
          img = apple;

          break;

        case "watermelon":
          img = watermelon;

          break;

        case "chicken":
          img = chicken;

          break;

        case "burger":
          img = burger;

          break;

        case "sandwich":
          img = sandwich;

          break;

        case "cookie":
          img = cookie;

          break;

        case "corn":
          img = corn;

          break;
      }

      // Only draw when a valid image was found

      if (img) {
        image(img, x, y, 37, 28);
      } else {
        console.log("Invalid Level 3 food type:", item.type);
      }
    }
  }
}

function checkCollectibleCompletion() {
  if (
    maze === maze1 &&
    collectedCount === collectibles.length &&
    !badgeUnlocked
  ) {
    badgeUnlocked = true;

    badgeX = width / 2;

    badgeY = height / 2 - 80;

    badgeScale = 1.3;

    badgeMessageTimer = 180;
  }

  if (
    maze === maze2 &&
    collectedCount === collectibles.length &&
    !potionbadgeUnlocked
  ) {
    potionbadgeUnlocked = true;

    badgeX = width / 2;

    badgeY = height / 2 - 80;

    badgeScale = 1.3;

    badgeMessageTimer = 180;
  }

  if (
    maze === maze3 &&
    collectedCount === collectibles.length &&
    !foodBadgeUnlocked
  ) {
    foodBadgeUnlocked = true;

    badgeX = width / 2;

    badgeY = height / 2 - 80;

    badgeScale = 1.3;

    badgeMessageTimer = 180;

    level3AllFoodCollected = true;

    startLevel3Chase();

    level3FoodCollectedDialogueActive = true;

    level3FoodCollectedDialogueIndex = 0;
  }
}

function getCollectibleImage(type) {
  if (maze === maze1) return fireflySprite;

  if (type === "Feather") return feather;

  if (type === "Eyeballs") return eyeballs;

  if (type === "Kraken Ink") return krakenInk;

  if (type === "Stardust") return stardust;

  if (type === "Bone") return bone;

  if (type === "apple") return apple;

  if (type === "watermelon") return watermelon;

  if (type === "chicken") return chicken;

  if (type === "burger") return burger;

  if (type === "sandwich") return sandwich;

  if (type === "cookie") return cookie;

  if (type === "corn") return corn;

  return null;
}

function drawFlyingCollectibles() {
  imageMode(CENTER);

  for (let flying of flyingCollectibles) {
    let size = 32;

    // Level 1 firefly sprite sheet

    if (flying.level === maze1) {
      image(
        fireflySprite,

        flying.x,

        flying.y,

        size,

        size,

        0,

        0,

        FIREFLY.frameWidth,

        FIREFLY.frameHeight,
      );
    }

    // Level 2 and Level 3 images
    else {
      let img = getCollectibleImage(flying.type);

      if (img) {
        image(img, flying.x, flying.y, size, size);
      }
    }
  }
}

function checkCollectibles() {
  for (let item of collectibles) {
    if (item.collected) continue;

    let worldX = item.col * tileSize + tileSize / 2;

    let worldY = item.row * tileSize + tileSize / 2;

    let d = dist(player.x, player.y + HITBOX_OFFSET_Y, worldX, worldY);

    if (d < 30) {
      item.collected = true;

      collect.play();

      // Convert the collectible's maze position into a screen position.

      // Normal gameplay currently uses ZOOM = 3.5.

      let screenX = width / 2 + (worldX - player.x) * ZOOM;

      let screenY = height / 2 + (worldY - player.y) * ZOOM;

      flyingCollectibles.push({
        x: screenX,

        y: screenY,

        targetX: COUNTER_X,

        targetY: COUNTER_Y,

        type: item.type,

        level: maze,

        progress: 0,
      });

      // Heal once

      if (socialBattery < 100) {
        socialBattery = min(100, socialBattery + 5);

        healFlashAlpha = HEAL_FLASH_MAX;
      }
    }
  }
}

function updateFlyingCollectibles() {
  for (let i = flyingCollectibles.length - 1; i >= 0; i--) {
    let flying = flyingCollectibles[i];

    flying.progress += 0.06;

    flying.x = lerp(flying.x, flying.targetX, 0.14);

    flying.y = lerp(flying.y, flying.targetY, 0.14);

    let reachedCounter =
      dist(flying.x, flying.y, flying.targetX, flying.targetY) < 8;

    if (reachedCounter) {
      collectedCount++;

      // Counter glows when the number changes

      collectibleFlashTimer = COLLECTIBLE_FLASH_DURATION;

      flyingCollectibles.splice(i, 1);

      checkCollectibleCompletion();
    }
  }
}

// DIALOGUE BOX (INTRO)

function drawIntroDialogueBox() {
  const boxW = 900;

  const boxH = 160;

  const boxX = (width - boxW) / 2;

  const boxY = height - boxH - 60;

  fill(20, 20, 30, 230);

  stroke(255);

  strokeWeight(2);

  rect(boxX, boxY, boxW, boxH, 12);

  noStroke();

  fill(255, 220, 120);

  textAlign(LEFT, TOP);

  textFont("Monospace");

  textStyle(BOLD);

  textSize(25);

  text("Faith", boxX + 30, boxY + 18);

  fill(255);

  textStyle(NORMAL);

  textSize(23);

  text(
    introDialogue[introDialogueIndex],

    boxX + 30,

    boxY + 58,

    boxW - 60,

    boxH - 90,
  );

  fill(200);

  textAlign(RIGHT, BOTTOM);

  textSize(14);

  text("click or press SPACE to continue", boxX + boxW - 20, boxY + boxH - 12);
}

function drawLevel2DialogueBox() {
  const boxW = 900;

  const boxH = 160;

  const boxX = (width - boxW) / 2;

  const boxY = height - boxH - 60;

  fill(20, 20, 30, 230);

  stroke(255);

  strokeWeight(2);

  rect(boxX, boxY, boxW, boxH, 12);

  noStroke();

  fill(255, 220, 120);

  textAlign(LEFT, TOP);

  textFont("Monospace");

  textStyle(BOLD);

  textSize(25);

  text("Faith", boxX + 30, boxY + 18);

  fill(255);

  textStyle(NORMAL);

  textSize(23);

  text(
    level2Dialogue[level2DialogueIndex],

    boxX + 30,

    boxY + 58,

    boxW - 60,

    boxH - 90,
  );

  fill(200);

  textAlign(RIGHT, BOTTOM);

  textSize(14);

  text("click or press SPACE to continue", boxX + boxW - 20, boxY + boxH - 12);
}

function drawLevel3DialogueBox() {
  const boxW = 900;

  const boxH = 160;

  const boxX = (width - boxW) / 2;

  const boxY = height - boxH - 60;

  fill(20, 20, 30, 230);

  stroke(255);

  strokeWeight(2);

  rect(boxX, boxY, boxW, boxH, 12);

  noStroke();

  fill(255, 220, 120);

  textAlign(LEFT, TOP);

  textFont("Monospace");

  textStyle(BOLD);

  textSize(25);

  text("Faith", boxX + 30, boxY + 18);

  fill(255);

  textStyle(NORMAL);

  textSize(23);

  text(
    level3Dialogue[level3DialogueIndex],

    boxX + 30,

    boxY + 58,

    boxW - 60,

    boxH - 90,
  );

  fill(200);

  textAlign(RIGHT, BOTTOM);

  textSize(14);

  text("click or press SPACE to continue", boxX + boxW - 20, boxY + boxH - 12);
}

function drawLevel3FoodDialogueBox(dialogue, dialogueIndex) {
  const boxW = 900;

  const boxH = 140;

  const boxX = (width - boxW) / 2;

  const boxY = height - boxH - 60;

  fill(20, 20, 30, 230);

  stroke(255);

  strokeWeight(2);

  rect(boxX, boxY, boxW, boxH, 12);

  noStroke();

  fill(255, 220, 120);

  textAlign(LEFT, TOP);

  textFont("Monospace");

  textStyle(BOLD);

  textSize(25);

  text("Faith", boxX + 30, boxY + 18);

  fill(255);

  textStyle(NORMAL);

  textSize(23);

  text(dialogue[dialogueIndex], boxX + 30, boxY + 55, boxW - 60, boxH - 80);

  fill(200);

  textAlign(RIGHT, BOTTOM);

  textSize(14);

  text("click or press SPACE to continue", boxX + boxW - 20, boxY + boxH - 12);
}

// -------------------------------------------------------------- GOBLIN CHASE --------------------------------------------------------------

// LEVEL 3 GOBLIN CHASE

function pickLevel3ChaseSpawnPoints(count) {
  let candidates = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze3[r][c] !== 0) continue;

      let tileDist = dist(c, r, player.x / tileSize, player.y / tileSize);

      if (tileDist < LEVEL3_CHASE_MIN_SPAWN_DISTANCE) continue;

      candidates.push({ row: r, col: c });
    }
  }

  let spots = [];

  for (let i = 0; i < count && candidates.length > 0; i++) {
    let index = floor(random(candidates.length));

    spots.push(candidates[index]);

    candidates.splice(index, 1);
  }

  return spots;
}

function startLevel3Chase() {
  level3ChaseGoblins = [];

  let spots = pickLevel3ChaseSpawnPoints(LEVEL3_CHASE_GOBLIN_COUNT);

  for (let spot of spots) {
    level3ChaseGoblins.push({
      x: spot.col * tileSize + tileSize / 2,

      y: spot.row * tileSize + tileSize / 2,

      speed: LEVEL3_CHASE_GOBLIN_SPEED,

      facingLeft: false,
    });
  }

  level3ExitRevealed = true;

  level3ChaseActive = true;
}

function updateLevel3ChaseGoblin(g) {
  let dx = player.x - g.x;

  let dy = player.y - g.y;

  let d = sqrt(dx * dx + dy * dy);

  if (d === 0) return;

  let nextX = g.x + (dx / d) * g.speed;

  let nextY = g.y + (dy / d) * g.speed;

  const SLIDE_AMOUNT = 3;

  if (canMoveTo(nextX, g.y)) {
    g.x = nextX;
  } else if (canMoveTo(nextX, g.y - SLIDE_AMOUNT)) {
    g.x = nextX;

    g.y -= SLIDE_AMOUNT;
  } else if (canMoveTo(nextX, g.y + SLIDE_AMOUNT)) {
    g.x = nextX;

    g.y += SLIDE_AMOUNT;
  }

  if (canMoveTo(g.x, nextY)) {
    g.y = nextY;
  } else if (canMoveTo(g.x - SLIDE_AMOUNT, nextY)) {
    g.x -= SLIDE_AMOUNT;

    g.y = nextY;
  } else if (canMoveTo(g.x + SLIDE_AMOUNT, nextY)) {
    g.x += SLIDE_AMOUNT;

    g.y = nextY;
  }

  g.facingLeft = dx < 0;
}

function updateLevel3Chase() {
  if (!level3ChaseActive) return;

  for (let g of level3ChaseGoblins) {
    updateLevel3ChaseGoblin(g);
  }
}

function drawLevel3ChaseGoblins() {
  if (!level3ChaseActive) return;

  imageMode(CENTER);

  let frame =
    floor(frameCount / GOBLIN_LVL3_RUNNING.animSpeed) %
    GOBLIN_LVL3_RUNNING.numFrames;

  let srcX = frame * GOBLIN_LVL3_RUNNING.frameWidth;

  let drawW = GOBLIN_LVL3_RUNNING.frameWidth * GOBLIN_LVL3_RUNNING.scale;

  let drawH = GOBLIN_LVL3_RUNNING.frameHeight * GOBLIN_LVL3_RUNNING.scale;

  for (let g of level3ChaseGoblins) {
    push();

    translate(g.x, g.y);

    if (g.facingLeft) scale(-1, 1);

    image(
      goblinslvl3running,

      0,
      0,

      drawW,
      drawH,

      srcX,
      0,

      GOBLIN_LVL3_RUNNING.frameWidth,
      GOBLIN_LVL3_RUNNING.frameHeight,
    );

    pop();
  }
}

function checkLevel3ChaseCatch() {
  if (!level3ChaseActive) return;

  for (let g of level3ChaseGoblins) {
    let d = dist(player.x, player.y + HITBOX_OFFSET_Y, g.x, g.y);

    if (d < LEVEL3_CHASE_CATCH_RADIUS) {
      level3ChaseActive = false;

      gameOver = true;

      fail.play();

      return;
    }
  }
}

function resetLevel3Chase() {
  level3ChaseActive = false;

  level3ChaseGoblins = [];

  level3ExitRevealed = false;

  level3ChaseCompleteDialogueActive = false;

  level3ChaseCompleteDialogueIndex = 0;
}

// -------------------------------------------------------------- GOBLIN CHASE --------------------------------------------------------------

// BADGE

function drawBadge() {
  if (!badgeUnlocked && !potionbadgeUnlocked && !foodBadgeUnlocked) return;

  imageMode(CENTER);

  let badgeSize = 300 * badgeScale;

  if (foodBadgeUnlocked) {
    image(foodBadge, badgeX, badgeY, badgeSize, badgeSize);
  } else if (potionbadgeUnlocked) {
    image(potionbadge, badgeX, badgeY, badgeSize, badgeSize);
  } else {
    image(fireflyBadge, badgeX, badgeY, badgeSize, badgeSize);
  }

  if (badgeMessageTimer > 0) {
    fill(255);

    stroke(0);

    strokeWeight(4);

    textAlign(CENTER);

    // Level 3 badge

    if (foodBadgeUnlocked) {
      textSize(26);

      text("Cafeteria Champion Badge Earned!", width / 2, height / 2 + 130);

      textSize(18);

      text("You collected all the food!", width / 2, height / 2 + 165);

      text("Nothing goes to waste!", width / 2, height / 2 + 195);
    }

    // Level 2 badge
    else if (potionbadgeUnlocked) {
      textSize(26);

      text("Potion Master Badge Earned!", width / 2, height / 2 + 130);

      textSize(18);

      text("You collected all 5 ingredients!", width / 2, height / 2 + 165);

      text("+5 Social Battery Boost", width / 2, height / 2 + 195);
    }

    // Level 1 badge
    else if (badgeUnlocked) {
      textSize(26);

      text("Firefly Collector Badge Earned!", width / 2, height / 2 + 130);

      textSize(18);

      text("You collected all 11 fireflies!", width / 2, height / 2 + 165);

      text(
        "Don't forget to make your way to school.",

        width / 2,

        height / 2 + 195,
      );
    }

    noStroke();
  }
}

function updateBadge() {
  if (!badgeUnlocked && !potionbadgeUnlocked && !foodBadgeUnlocked) return;

  if (badgeMessageTimer > 0) {
    badgeMessageTimer--;
  } else {
    badgeX = lerp(badgeX, width - 120, 0.08);

    badgeY = lerp(badgeY, 120, 0.08); // was 100 â€” now clears the banner

    badgeScale = lerp(badgeScale, 0.25, 0.08);
  }
}

// BLACK VIGNETTE ON SCREEN

function drawVignette() {
  let ctx = drawingContext;

  let gradient = ctx.createRadialGradient(
    width / 2,

    height / 2,

    height / 4,

    width / 2,

    height / 2,

    height / 1.1,
  );

  gradient.addColorStop(0, "rgba(0, 0, 0, 0)");

  gradient.addColorStop(1, "rgba(0, 0, 0, 2)");

  ctx.save();

  ctx.fillStyle = gradient;

  ctx.fillRect(0, 0, width, height);

  ctx.restore();
}

// MAZE

function drawMaze() {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      let tile = maze[row][col];

      noStroke();

      if (tile === 1) {
        let expand = wallExpansion[row][col] * WALL_MAX_EXPAND;

        let wallImg;

        if (maze === maze2) {
          wallImg = wallTiles[row][col];
        } else if (maze === maze3) {
          wallImg = wallTiles3[row][col];
        } else {
          wallImg = wall;
        }

        image(
          wallImg,

          col * tileSize - expand,

          row * tileSize - expand,

          tileSize + expand * 2,

          tileSize + expand * 2,
        );
      } else {
        // Floor blocks

        if (tile === 0) {
          if (maze === maze2) {
            image(
              pathTiles[row][col],

              col * tileSize,

              row * tileSize,

              tileSize,

              tileSize,
            );
          } else if (maze === maze3) {
            image(
              floorlvl3,

              col * tileSize,

              row * tileSize,

              tileSize,

              tileSize,
            );
          } else {
            image(ground, col * tileSize, row * tileSize, tileSize, tileSize);
          }
        }

        // Start from home block
        else if (tile === 2) {
          image(home, col * tileSize, row * tileSize, tileSize, tileSize);
        }

        // Exit block
        else if (tile === 3) {
          // In Level 3, reveal the exit when the chase begins.

          if (maze === maze3) {
            if (level3ExitRevealed) {
              image(school, col * tileSize, row * tileSize, tileSize, tileSize);
            } else {
              image(
                floorlvl3,

                col * tileSize,

                row * tileSize,

                tileSize,

                tileSize,
              );
            }
          }

          // Levels 1 and 2 always show their exits
          else {
            image(school, col * tileSize, row * tileSize, tileSize, tileSize);
          }
        }
      }
    }
  }

  // Trapped Wall if Social Battery = 0

  if (socialBattery <= 0) {
    socialBattery = 0;

    trappedTimer++;

    if (trappedTimer >= TRAPPED_DELAY) {
      gameOver = true;

      fail.play();
    }
  }
}

// HEADS-UP DISPLAY (HUD)

function drawSocialBar() {
  push();

  imageMode(CORNER);

  rectMode(CORNER);

  // Solid navy backing spans the entire HUD â€” this is the real background

  fill(5, 8, 65);

  rect(0, 0, width, 70);

  // Banner art used only as decorative corner framing, at its native

  // aspect ratio â€” NOT stretched to fill the whole bar.

  let bannerAspect = banner.width / banner.height;

  let bannerDrawWidth = 70 * bannerAspect;

  imageMode(CORNER);

  image(banner, 0, 0, bannerDrawWidth, 70); // left corner

  push();

  translate(width, 0);

  scale(-1, 1); // mirror horizontally

  image(banner, 0, 0, bannerDrawWidth, 70); // right corner

  pop();

  // Objective

  fill(255);

  textAlign(LEFT, TOP);

  textFont("Monospace");

  textStyle(BOLD);

  textSize(19);

  let objective = "LVL 1: Make your way to school!";

  if (maze === maze2) objective = "LVL 2: Reach the cafe!";

  if (maze === maze3) objective = "LVL 3: Collect food and reach the exit!";

  text(objective, 50, 22);

  // Collectible Count

  if (collectibleFlashTimer > 0) {
    fill(90, 255, 120);

    collectibleFlashTimer--;
  } else {
    fill(255);
  }

  textAlign(CENTER, TOP);

  textFont("Monospace");

  textStyle(BOLD);

  textSize(19);

  let collectibleText = "";

  if (maze === maze1) {
    collectibleText =
      "Fireflies: " + collectedCount + " / " + collectibles.length;
  } else if (maze === maze2) {
    collectibleText = "Ingredients: " + collectedCount + " / 5";
  } else if (maze === maze3) {
    collectibleText = "Food: " + collectedCount + " / " + collectibles.length;
  }

  text(collectibleText, 670, 22);

  // Social Battery Bar

  textAlign(RIGHT, TOP);

  textStyle(BOLD);

  fill(255);

  textSize(19);

  text("Social Battery", 980, 24);

  fill(80);

  rect(1000, 22, 190, 24);

  fill(100, 220, 120);

  rect(1000, 22, socialBattery * 1.9, 24);

  // Help button at the end of social battery bar

  fill(255, 220, 120);

  circle(1225, 34, 34);

  fill(0);

  textAlign(CENTER, CENTER);

  textSize(19);

  textStyle(BOLD);

  text("?", 1225, 34);

  pop();
}

// LASERS

//  Here is the function that is in charge of checking whether or not the

//     player is colliding with the laser beams. If they are, their

//     social battery is decreased by 10. If they are standing in the

//     laser than they can only take damage once every second.

function checkLaserPlayerCollision() {
  if (playerInvincible) return;

  let feetY = player.y + HITBOX_OFFSET_Y;

  for (let l of laserBeams) {
    if (!l.on) continue;

    let minX = min(l.x1, l.x2) - HITBOX_RADIUS;

    let maxX = max(l.x1, l.x2) + HITBOX_RADIUS;

    let minY = min(l.y1, l.y2) - HITBOX_RADIUS;

    let maxY = max(l.y1, l.y2) + HITBOX_RADIUS;

    let hit =
      player.x > minX && player.x < maxX && feetY > minY && feetY < maxY;

    if (hit) {
      socialBattery -= LASER_DAMAGE;

      if (socialBattery < 0) socialBattery = 0;

      playerInvincible = true;

      invincibleTimer = INVINCIBLE_FRAMES;

      playerHitSound.play();

      hitFlashAlpha = HIT_FLASH_MAX;
    }
  }
}

function drawRedFlash(alpha) {
  noStroke();

  fill(255, 0, 0, alpha);

  rect(0, 0, width, height);
}

function drawHealFlash(alpha) {
  let ctx = drawingContext;

  let gradient = ctx.createRadialGradient(
    width / 2,

    height / 2,

    height * 0.25,

    width / 2,

    height / 2,

    height * 0.75,
  );

  gradient.addColorStop(0, "rgba(80, 255, 120, 0)");

  gradient.addColorStop(0.55, "rgba(80, 255, 120, 0)");

  gradient.addColorStop(1, `rgba(80, 255, 120, ${alpha / 255})`);

  ctx.save();

  ctx.fillStyle = gradient;

  ctx.fillRect(0, 0, width, height);

  ctx.restore();
}

function updateInvincibility() {
  if (playerInvincible) {
    invincibleTimer--;

    if (invincibleTimer <= 0) playerInvincible = false;
  }
}

function drawLasers() {
  imageMode(CENTER);

  for (let l of lasers) {
    let cx = l.col * tileSize + tileSize / 2;

    let cy = l.row * tileSize + tileSize / 2;

    // Animate through the goblin sprite sheet from left to right

    let frame = floor(frameCount / GOBLIN.animSpeed) % GOBLIN.numFrames;

    // Get the current frame from the sprite sheet

    let srcX = frame * GOBLIN.frameWidth;

    let srcY = 0;

    // Calculate the size of the displayed goblin

    let drawW = GOBLIN.frameWidth * GOBLIN.scale;

    let drawH = GOBLIN.frameHeight * GOBLIN.scale;

    push();

    translate(cx, cy);

    // flip horizontally if this goblin's beam shoots left

    if (l.direction === "left") {
      scale(-1, 1);
    }

    image(
      goblins,

      0,

      0,

      drawW,

      drawH,

      srcX,

      srcY,

      GOBLIN.frameWidth,

      GOBLIN.frameHeight,
    );

    pop();
  }
}

function drawLaserBeams() {
  for (let l of laserBeams) {
    if (!l.on) continue; // don't draw when blinking off

    stroke(255, 30, 30, 200);

    strokeWeight(4);

    line(l.x1, l.y1, l.x2, l.y2);

    noStroke();

    if (laserBeams === laserBeams2) {
      stroke(0, 255, 0, 255);

      strokeWeight(4);

      line(l.x1, l.y1, l.x2, l.y2);

      noStroke();
    }
  }
}

let currentGoblinFrame = 0;

function updateLasers() {
  currentGoblinFrame = floor(frameCount / GOBLIN.animSpeed) % GOBLIN.numFrames;

  for (let i = 0; i < lasers.length; i++) {
    let goblin = lasers[i];

    goblin.on =
      currentGoblinFrame >= GOBLIN.redEyeStart &&
      currentGoblinFrame <= GOBLIN.redEyeEnd;

    laserBeams[i].on = goblin.on;
  }
}

// How many "goblin frames" until it fires. 0 = firing right now.

function framesUntilLaserFires() {
  let start = GOBLIN.redEyeStart;

  let cycle = GOBLIN.numFrames;

  if (currentGoblinFrame >= start && currentGoblinFrame <= GOBLIN.redEyeEnd)
    return 0;

  let diff = start - currentGoblinFrame;

  if (diff < 0) diff += cycle;

  return diff;
}

const LASER_WARNING_RANGE = 420; // world-units â€” start showing an arrow at this distance

const LASER_ARROW_EDGE_RADIUS = 250; // how far from screen center the arrow sits

const LASER_ARROW_SIZE = 18;

function drawLaserWarnings() {
  if (maze !== maze1 && maze !== maze2 && maze !== maze3) return;

  let framesLeft = framesUntilLaserFires();

  let firing = framesLeft === 0;

  let soon = framesLeft > 0 && framesLeft <= 2;

  let halfW = width / 2 / ZOOM;

  let halfH = height / 2 / ZOOM;

  for (let l of lasers) {
    let lx = l.col * tileSize + tileSize / 2;

    let ly = l.row * tileSize + tileSize / 2;

    let dx = lx - player.x;

    let dy = ly - player.y;

    let d = sqrt(dx * dx + dy * dy);

    if (d > LASER_WARNING_RANGE) continue;

    // Already visible on screen â€” skip the arrow, the goblin itself is the warning

    if (abs(dx) < halfW && abs(dy) < halfH) continue;

    let angle = atan2(dy, dx);

    let ax = width / 2 + cos(angle) * LASER_ARROW_EDGE_RADIUS;

    let ay = height / 2 + sin(angle) * LASER_ARROW_EDGE_RADIUS;

    push();

    translate(ax, ay);

    rotate(angle);

    noStroke();

    if (firing) {
      fill(255, 40, 40, 210 + sin(frameCount * 0.6) * 30);
    } else if (soon) {
      fill(255, 190, 40, 220);
    } else {
      fill(255, 220, 120, 130);
    }

    triangle(
      LASER_ARROW_SIZE,

      0,

      -LASER_ARROW_SIZE * 0.6,

      LASER_ARROW_SIZE * 0.6,

      -LASER_ARROW_SIZE * 0.6,

      -LASER_ARROW_SIZE * 0.6,
    );

    pop();
  }
}

// START SCREEN

function drawStartScreen() {
  image(startScreen, 0, 0, width, height);
}

// LOSE SCREEN

function drawLoseScreen() {
  let loseImg = restartScreen;

  if (maze === maze2) {
    loseImg = faillvl2;
  } else if (maze === maze3) {
    loseImg = faillvl3;
  }

  image(loseImg, 0, 0, width, height);
}

function restartGame() {
  socialBattery = 100;

  gameOver = false;

  trappedTimer = 0;

  // Clear all dialogue states

  introDialogueActive = false;

  level2DialogueActive = false;

  level3DialogueActive = false;

  level3FoodCollectedDialogueActive = false;

  level3ChaseCompleteDialogueActive = false;

  // Reset dialogue indexes

  introDialogueIndex = 0;

  level2DialogueIndex = 0;

  level3DialogueIndex = 0;

  level3FoodCollectedDialogueIndex = 0;

  level3ChaseCompleteDialogueIndex = 0;

  playerInvincible = false;

  invincibleTimer = 0;

  hitFlashAlpha = 0;

  healFlashAlpha = 0;

  collectibleFlashTimer = 0;

  collectedCount = 0;

  flyingCollectibles = [];

  legendTimer = 0

  // Reload the correct collectibles for the current level

  if (maze === maze1) {
    setupCollectibles();
  } else if (maze === maze2) {
    setupPotionIngredients();

    resetBeakers();
  } else if (maze === maze3) {
    setupFoodCollectibles();

    resetBeakers();

    resetLevel3State();
  }

  // Return player to the current level's start tile

  outer: for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] === 2) {
        player.x = c * tileSize + tileSize / 2;

        player.y = r * tileSize + tileSize / 2;

        break outer;
      }
    }
  }

  // Stop old movement

  player.vx = 0;

  player.vy = 0;

  if (walking.isPlaying()) {
    walking.stop();
  }

  camX = 0;

  camY = 0;

  initWallExpansion();
}

// LEVEL 1 COMPLETE SCREEN

function drawFirstLevelCompleteScreen() {
  image(levelOneComplete, 0, 0, width, height);
}

// LEVEL 2 COMPLETE SCREEN

function drawSecondLevelCompleteScreen() {
  image(completelvl2, 0, 0, width, height);
}

// LEVEL 3 / GAME COMPLETE SCREEN

function drawThirdLevelCompleteScreen() {
  image(gamecompleted, 0, 0, width, height);
}

function drawTutorialOverlay() {
  fill(0, 180);

  rect(0, 0, width, height);

  // Main panel

  const panelW = 780;

  const panelH = 520;

  const panelX = (width - panelW) / 2;

  const panelY = (height - panelH) / 2;

  fill(245);

  rect(panelX, panelY, panelW, panelH, 15);

  // Title

  fill(30);

  textAlign(CENTER, TOP);

  textSize(28);

  textStyle(BOLD);

  textFont("Monospace");

  text("How to Play", width / 2, panelY + 40);

  // WASD Instructions

  textStyle(NORMAL);

  textSize(15);

  text(
    " Help Faith find and collect every item as she makes her way through the maze!\n Use WASD to move Faith.",

    width / 2,

    panelY + 80,
  );

  // Three Boxes

  const boxW = 170;

  const boxH = 170;

  const gap = 55;

  const startX = width / 2 - (boxW * 3 + gap * 2) / 2;

  const boxY = panelY + 135;

  // Draw forest background in each box

  imageMode(CORNER);

  for (let i = 0; i < 3; i++) {
    let x = startX + i * (boxW + gap);

    image(forest, x, boxY, boxW, boxH);

    noFill();

    stroke(40);

    strokeWeight(2);

    rect(x, boxY, boxW, boxH, 10);
  }

  noStroke();

  // Images in each box

  imageMode(CENTER);

  // Box 1: Laser

  let goblinX = startX + boxW / 2;

  let goblinY = boxY + boxH / 2;

  image(goblin, goblinX, goblinY, boxW * 0.75, boxH * 0.75);

  // Box 2: Firefly

  let fireflyX = startX + (boxW + gap) + boxW / 2 - 5;

  let fireflyY = boxY + boxH / 2;

  image(
    fireflySprite,

    fireflyX,

    fireflyY,

    120,

    120,

    0,

    0,

    FIREFLY.frameWidth,

    FIREFLY.frameHeight,
  );

  // Box 3: Player (Faith

  let faithX = startX + 2 * (boxW + gap) + boxW / 2;

  let faithY = boxY + boxH / 2 - 10;

  // Animate walking

  let frame = floor(frameCount / 12) % SPRITE.numFrames;

  image(
    character,

    faithX,

    faithY,

    95, // wider

    190, // taller

    frame * SPRITE.frameWidth,

    SPRITE.rows.right * SPRITE.frameHeight,

    SPRITE.frameWidth,

    SPRITE.frameHeight,
  );

  // Instruction Text

  fill(30);

  textSize(16);

  textAlign(CENTER, TOP);

  text(
    "Watch out for\nlasers on the walls!",

    startX + boxW / 2,

    boxY + boxH + 18,
  );

  text(
    "Collect items\nalong the way!",

    startX + boxW + gap + boxW / 2,

    boxY + boxH + 18,
  );

  text(
    "Guide Faith\nto the end!",

    startX + 2 * (boxW + gap) + boxW / 2,

    boxY + boxH + 18,
  );

  // Continue Button

  tutorialButton.w = 180;

  tutorialButton.h = 45;

  tutorialButton.x = width / 2 - tutorialButton.w / 2;

  tutorialButton.y = panelY + panelH - 100;

  fill(55, 85, 180);

  rect(
    tutorialButton.x,

    tutorialButton.y,

    tutorialButton.w,

    tutorialButton.h,

    10,
  );

  fill(255);

  textAlign(CENTER, CENTER);

  textSize(18);

  text("Continue", width / 2, tutorialButton.y + tutorialButton.h / 2);
}

function loadSecondLevel() {
  maze = maze2;

  socialBattery = 100;

  gameOver = false;

  lasers = lasers2;

  laserBeams = laserBeams2;

  firstLevelComplete = false;

  home = classroomdoor;

  school = cafedoor;

  character = characterlvl2;

  goblins = goblinslvl2;

  GOBLIN = GOBLIN_LVL2;

  forest = library;

  legendTimer = 0

  // --- MUSIC SWAP ---

  if (bgMusic.isPlaying()) bgMusic.stop();

  if (lvl3Music.isPlaying()) lvl3Music.stop();

  if (!lvl2Music.isPlaying()) lvl2Music.loop();

  // Reposition player at the new start tile

  outer: for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] === 2) {
        player.x = c * tileSize + tileSize / 2;

        player.y = r * tileSize + tileSize / 2;

        break outer;
      }
    }
  }

  // Reset systems tied to the old maze

  initWallExpansion();

  collectedCount = 0;

  flyingCollectibles = [];

  setupPotionIngredients();

  badgeUnlocked = false;

  potionbadgeUnlocked = false;

  foodBadgeUnlocked = false;

  // Reset Level 2 beakers

  resetBeakers();

  // Start the Level 2 intro dialogue

  level2DialogueActive = true;

  level2DialogueIndex = 0;
}

function resetBeakers() {
  let activeBeakers = maze === maze3 ? beakers3 : beakers;

  for (let i = 0; i < activeBeakers.length; i++) {
    activeBeakers[i].y = activeBeakers[i].topY;

    activeBeakers[i].state = "waiting";

    activeBeakers[i].timer = i * 45;

    activeBeakers[i].hasHitPlayer = false;
  }
}

function loadThirdLevel() {
  maze = maze3;

  socialBattery = 100;

  gameOver = false;

  lasers = lasers3;

  laserBeams = laserBeams3;

  firstLevelComplete = false;

  secondLevelComplete = false;

  resetLevel3State();

  character = characterlvl3;

  goblins = goblinslvl3;

  GOBLIN = GOBLIN_LVL3;

  forest = cafeteria;

  home = cafeentrance;

  school = blackhole;

  legendTimer = 0

  // --- MUSIC SWAP ---

  if (bgMusic.isPlaying()) bgMusic.stop();

  if (lvl2Music.isPlaying()) lvl2Music.stop();

  if (!lvl3Music.isPlaying()) lvl3Music.loop();

  // Spawn at the tile marked 2

  outer: for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (maze[r][c] === 2) {
        player.x = c * tileSize + tileSize / 2;

        player.y = r * tileSize + tileSize / 2;

        break outer;
      }
    }
  }

  initWallExpansion();

  resetBeakers();

  collectedCount = 0;

  flyingCollectibles = [];

  badgeUnlocked = false;

  potionbadgeUnlocked = false;

  foodBadgeUnlocked = false;

  // Load Level 3 food

  setupFoodCollectibles();

  level3DialogueActive = true;

  level3DialogueIndex = 0;
}

function resetLevel3State() {
  thirdLevelComplete = false;

  level3AllFoodCollected = false;

  level3FoodCollectedDialogueActive = false;

  level3FoodCollectedDialogueIndex = 0;

  resetLevel3Chase();
}

const LASER_LEGEND_X = 20;

const LASER_LEGEND_Y = 480; // lower-left, clear of the top HUD banner

function drawLaserWarningLegend() {
  if (maze !== maze1 && maze !== maze2 && maze !== maze3) return;

  // Fully gone after the visible window + fade window
  if (legendTimer >= LEGEND_VISIBLE_FRAMES + LEGEND_FADE_FRAMES) return;

  let alpha = 1;
  if (legendTimer > LEGEND_VISIBLE_FRAMES) {
    let fadeProgress = (legendTimer - LEGEND_VISIBLE_FRAMES) / LEGEND_FADE_FRAMES;
    alpha = 1 - constrain(fadeProgress, 0, 1);
  }

  push();

  textFont("Monospace");

  textAlign(LEFT, CENTER);

  noStroke();

  // Background panel

  fill(10, 12, 20, 170);

  rect(LASER_LEGEND_X - 12, LASER_LEGEND_Y - 26, 220, 150, 8);

  fill(255);

  textStyle(BOLD);

  textSize(20);

  text("Laser Warning", LASER_LEGEND_X, LASER_LEGEND_Y);

  textStyle(NORMAL);

  textSize(20);

  const rows = [
    { color: [255, 220, 120, 200], label: "Detected nearby" },

    { color: [255, 190, 40, 255], label: "About to fire" },

    { color: [255, 40, 40, 255], label: "Firing now!" },
  ];

  let rowY = LASER_LEGEND_Y + 30;

  for (let r of rows) {
    // Small triangle swatch matching the arrow shape/rotation

    push();

    translate(LASER_LEGEND_X + 8, rowY);

    rotate(HALF_PI); // point it "up" to read naturally in a legend

    fill(...r.color);

    triangle(10, 0, -6, -6, -6, 6);

    pop();

    fill(255);

    text(r.label, LASER_LEGEND_X + 24, rowY);

    rowY += 30;
  }

  pop();
}
