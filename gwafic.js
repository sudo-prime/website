var ball;

function setup() {
    createCanvas(1000, 1000);
    frameRate(30);

    ball = new Ball();
}

function draw() {
    // Step 1: Calculate ball's position
    ball.update();
    console.log(ball.xMid);

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
        this.xMouseRel = this.xMid - mouseX;
        this.yMouseRel = this.yMid - mouseY;

        // Step 2: Calulate change in speed value
        if(this.mouseInRange()) {
            // Update speed values depending on where mouse is
            this.xAccel = map(this.xMouseRel, -50, 50, -1, 1);
            this.yAccel = map(this.yMouseRel, -50, 50, -1, 1);
        } else {
            this.xAccel *= 0.9;
            this.yAccel *= 0.9;
        }

        this.xSpd += this.xAccel;
        this.ySpd += this.yAccel;

        this.xSpd = Math.min(10, this.xSpd);
        this.xSpd = Math.max( 0, this.xSpd);

        this.ySpd = Math.min(10, this.ySpd);
        this.ySpd = Math.max( 0, this.ySpd);

        // Step 3: Apply new speed value to get new xPos and yPos
        this.xPos += this.xSpd;
        this.yPos += this.ySpd;

        this.xMid = this.xPos + 25;
        this.yMid = this.yPos + 25;
    }

    this.draw = function() {
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
    }

    this.mouseInRange = function() {
        if(    (this.xMouseRel <= 50 && this.xMouseRel >= -50)
            || (this.yMouseRel <= 50 && this.yMouseRel <= -50))
        {
            return true;
        } else {
            return false;
        }
    }
}
