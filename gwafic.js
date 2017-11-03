var ball;

function setup() {
    createCanvas(500, 500);
    frameRate(30);

    ball = new Ball();
}

function draw() {
    // Step 1: Calculate ball's position
    ball.update();

    // Step 2: Clear previous frame
    background('white');

    // Step 3: Draw!
    ball.draw();
}

function Ball() {
    this.xPos = random(width  - 50);
    this.yPos = random(height - 50);
    this.xMid = this.xPos + 25;
    this.yMid = this.yPos + 25;
    this.xMouseRel = this.xMid - mouseX;
    this.yMouseRel = this.yMid - mouseY;
    this.xSpd = 0;
    this.ySpd = 0;
    this.diameter = 50;

    this.update = function() {

        // Step 1: Update relative mouse position

        // Step 2: Calulate change in speed value
        if(this.mouseInRange()) {
            // Update speed values depending on where mouse is
            var resultMap = map(this.xMouseRel, , 100, 0, width);
        }

        // Step 3: Apply new speed value to get new xPos and yPos
    }

    this.draw = function() {
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
    }

    this.mouseInRange() {
        if(    (this.xMouseRel <=  25 && this.xMouseRel >= 0)
            || (this.xMouseRel <= -25 && this.xMouseRel <= 0)
            || (this.yMouseRel <=  25 && this.yMouseRel >= 0)
            || (this.yMouseRel <= -25 && this.yMouseRel <= 0)
        ) {
            return true;
        } else {
            return false;
        }
    }
}
