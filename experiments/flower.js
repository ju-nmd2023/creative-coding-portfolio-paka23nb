function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);
  frameRate(6);

  // colorMode(HSB);
}

let flowerSize = 20;
let amount = 4;
let gap = 90;

function flower() {
  noStroke();
  let petals = 5;
  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      fill(255, random(20, 150), 133);
      rect(x, y, 40, 12, 100);

      //makes the color random from this range

      fill(255, random(204, 255), 4, 150);
      rect(x, y, 20, 15, 100);

      fill(133, 0, 255);
      rect(x, y, 3);

      rotate(PI / 5);

      fill(0, 200, 0);
      strokeWeight(5);
      line(x, y, x + 100, y);
    }
  }
}

function draw() {
  //MAKES IT TO THE CENTER
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
