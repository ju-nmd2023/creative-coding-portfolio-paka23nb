function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255);

  // colorMode(HSB);
}

let flowerSize = 20;
let amount = 8;
let gap = 90;

function flower() {
  noStroke();
  let petals = 5;
  for (let y = 0; y < petals; y++) {
    for (let x = 0; x < petals; x++) {
      fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
      rect(x, y, 20, 40, 100);

      //makes the color random from this range

      fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
      rect(x, y, 20, 0, 40);

      fill(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
      circle(x, y, 20);

      rotate(PI / 5);
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
  noLoop();
}
