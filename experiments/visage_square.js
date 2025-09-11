function setup() {
  createCanvas(1000, 800);
  frameRate(5);
}

const size = 100;
const layers = 10;

function getRandomValue(pos, variance) {
  return pos + random(-variance, variance);
}

//CREATES MULTIPLE SQUARES OF DIFFERENT SIZES INSIDE EACHOTHER
function drawLayers(x, y, size, layers) {
  fill(random(10, 255), 0, 100, random(10, 100));
  //MAKES IT LESS RANDOM
  const variance = size / 10;
  for (let i = 0; i < layers; i++) {
    const s = (size / layers) * i;
    const half = s / 2;
    //PUTS IT IN THE CENTER
    rectMode(CENTER);

    //CREATES HOURGLASS
    beginShape();
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y - half, variance)
    );
    endShape(CLOSE);
  }
}

function draw() {
  background(255);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }
}
