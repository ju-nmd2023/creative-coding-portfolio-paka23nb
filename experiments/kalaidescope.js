let position;
let velocity;
let acceleration;

function setup() {
  createCanvas(innerWidth, innerHeight);
  //Setting up the direction, making it easier for movment
  position = createVector(100, 100);
  velocity = createVector(5, 8);
  background(255);
  frameRate(80);
  blendMode(DARKEST);
}

let rotation = 10;

function draw() {
  //The following 1 line of code was taken from: https://p5js.org/examples/repetition-kaleidoscope/
  if (mouseIsPressed === true) {
    noStroke();

    push();
    fill(255, random(255), 100);

    ellipse(position.x, position.y, random(50));
    ellipse(width - position.x, height - position.y, random(50));
    pop();

    push();
    fill(random(200), 100, 200);
    ellipse(position.x, height - position.y, random(50));

    ellipse(width - position.x, position.y, random(50));
    pop();

    if (position.x > width || position.x < 0) {
      velocity.x *= -1;
    }

    if (position.y > height || position.y < 0) {
      velocity.y *= -1;
    }

    const mouse = createVector(mouseX, mouseY);

    //Makes a vector that makes it from
    acceleration = p5.Vector.sub(mouse, position);
    //Makes the following of the mouse not direct
    acceleration.normalize();
    //Slows down/Accelerates the mouse
    acceleration.mult(0.1);

    velocity.add(acceleration);
    velocity.limit(10);
    position.add(velocity);
  }
  position.x = mouseX;
  position.y = mouseY;
}
