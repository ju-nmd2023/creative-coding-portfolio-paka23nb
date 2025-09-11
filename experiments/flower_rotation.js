function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  frameRate(10);

  colorMode(HSB);
}

let flowerSize = 20;
let amount = 4;
let gap = 90;

function flower() {
  noStroke();
  let petals = 10;
  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      fill(255, random(20, 60), 133);
      rect(x, y, 40, 12, 100);

      fill(255, random(204, 255), 4, 150);
      rect(x, y, 20, 15, 100);

      fill(133, 0, 255, random(0, 30));
      arc(0, 0, 30, 30, 0, PI + QUARTER_PI, PIE, 5);

      // rect(x, y, 3);

      rotate(PI / 8);
    }
  }
}

function draw() {
  let y = (height - flowerSize * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - flowerSize * amount - gap * (amount - 1)) / 2;
    for (let j = 0; j < amount; j++) {
      push();
      translate(x, y);
      flower();
      pop();
      x += flowerSize + gap;
    }
    y += flowerSize + gap;
  }
}
