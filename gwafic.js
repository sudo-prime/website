function setup() {
    createCanvas(500, 500);
    frameRate(30);
}

function draw() {
    var xPos = Math.cos(frameCount);
    var yPos = Math.sin(frameCount);

    background('white');

    ellipse(xPos, yPos, 80, 80);
}
