function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    var xPos = 2 * Math.cos(frameCount / 2);
    var yPos = 2 * Math.sin(frameCount / 2);

    clear();

    ellipse(50 + xPos, 50 + yPos, 80, 80);
}
