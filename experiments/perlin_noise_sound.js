let synth;

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(30);

  synth = new Tone.Synth().toDestination();
}

const size = 20;
const divider = 20;
const numRows = 200;
const numCols = 200;

let counter = 0;

function draw() {
  background(255);
  noStroke();
  fill(0);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      fill(0, random(150, 200), random(150, 200), random(150, 255));
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }
}

//Inspiration behind code: https://tonejs.github.io/docs/15.1.22/classes/Synth.html

function mouseMoved() {
  counter += 0.05;

  Tone.start();

  let freq = map(mouseX, 0, width, 200, 1000);
  synth.triggerAttackRelease(freq, "8n");
}
