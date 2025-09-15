//Code inspiration from: https://codepen.io/pixelkind/pen/VwqKyoP

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    const a = Math.random() * Math.PI * 2;
    const v = 0.2 + Math.random();
    this.velocity = createVector(Math.cos(a) * v, Math.sin(a) * v);
    this.lifespan = 1 + Math.random() * 10;
    //https://p5js.org/reference/p5/color/
  }

  update() {
    this.lifespan--;

    this.velocity.mult(0.99);
    this.position.add(this.velocity);
  }

  draw() {
    push();
    translate(this.position.x, this.position.y);
    noStroke();
    fill(random(200, 255), random(200, 255), 0, random(10, 100));
    // ellipse(0, 0, 6);
    nPointedStar(0, 0, 5, 50, 25, 0);
    pop();
  }

  isDead() {
    return this.lifespan <= 0;
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
}

//Code taken from: https://www.youtube.com/watch?v=rSp5iSTXwAY
function nPointedStar(x, y, n, outerRadius, innerRadius, rotation) {
  let theta = TAU / n;
  beginShape();

  for (let i = 0; i < n; i++) {
    vertex(x + cos(i * theta) * outerRadius, y + sin(i * theta) * outerRadius);
    vertex(
      x + cos((i + 0.5) * theta) * innerRadius,
      y + sin((i + 0.5) * theta) * innerRadius
    );
  }

  endShape(CLOSE);
}

function generateParticles(x, y) {
  for (let i = 0; i < 10; i++) {
    const px = x + random(-50, 50);
    const py = y + random(-50, 50);
    const particle = new Particle(px, py);
    particles.push(particle);
  }
}

let particles = [];

function draw() {
  background(0, 0, 0);

  if (mouseIsPressed) {
    generateParticles(mouseX, mouseY);
  }

  for (let particle of particles) {
    particle.update();
    particle.draw();

    if (particle.isDead()) {
      particles.splice(particles.indexOf(particle), 1);
    }
  }
}
