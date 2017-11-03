function setup() {
    createCanvas(300, 300);
    frameRate(60);
}

function draw() {
    var xPos = 5 * Math.cos(frameCount / 2);
    var yPos = 5 * Math.sin(frameCount / 2);

    clear();

    ellipse(100 + xPos, 100 + yPos, 80, 80);
}
