let currentPos = [[], [], []];
let targetPos = [];
//let centreOfScreen = {x, y};

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  // Creates the random
  for (let i = 0; i < 360; i++) {
    currentPos[0].push(1);
    currentPos[1].push(1);
    currentPos[2].push(1);
  }
  console.log(currentPos[0]);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(53, 59, 68);
  translate(width / 2, height / 2);
  noFill();
  stroke(255);
  setTargetPos(5);
  drawCircle(0.1, 4, 200, 206, 0);
  stroke(180);
  drawCircle(0.1, 4, 215, 218, 1);
  stroke(100);
  drawCircle(0.1, 4, 225, 228, 2);
}
function setTargetPos(frameNumber) {
  if (frameCount === 1) {
    for (let i = 0; i < 360; i++) {
      let t = 1;
      targetPos.push(t);
    }
  }
  if (frameCount % frameNumber === 0) {
    for (let i = 0; i < 360; i++) {
      let t = randomGaussian();
      targetPos[i] = t;
    }
  }
}

function drawCircle(animSpeed, vertexIterator, minVal, maxVal, ringNum) {
  beginShape();
  for (let a = 0; a < 360; a += vertexIterator) {
    let r = lerp(
      currentPos[ringNum][a],
      map(targetPos[a], 0, 1, minVal, maxVal),
      animSpeed
    );
    currentPos[ringNum][a] = r;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
