function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(5);
}

const size = 100;
const layers = 10;

function getRandomValue(pos, variance) {
  return pos + random(-variance, variance);
}

//CREATES MULTIPLE SQUARES OF DIFFERENT SIZES INSIDE EACHOTHER
function drawLayers(x, y, size, layers) {
  fill(10, random(10, 255), 100, random(10, 100));
  //MAKES IT LESS RANDOM
  const variance = size / 10;
  for (let i = 0; i < layers; i++) {
    const s = (size / layers) * i;
    const half = s / 2;
    //PUTS IT IN THE CENTER
    rectMode(CENTER);

    circle(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance),
      random(10, size)
    );
  }
}

function draw() {
  background(255);
  // The following 3 lines of code was taken from ChatGPT 2025-09-10: https://chatgpt.com/share/68c122d1-1e98-800d-a675-ba35fe4bf96d
  let gridWidth = size * 10;
  let gridHeight = size * 10;
  translate((width - gridWidth) / 2, (height - gridHeight) / 2);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }
  loop(10);
}
