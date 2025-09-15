function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);
}

const size = 20;
const divider = 20;
const numRows = 200;
const numCols = 200;

let counter = 0;
let color;

function draw() {
  background(255);
  noStroke();
  fill(0);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      fill(random(255), random(255), random(255));
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }
}

function mouseDragged() {
  counter += 0.05;
}
