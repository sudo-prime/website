var ball;

function setup() {
    createCanvas(1000, 1000);
    frameRate(60);

    ball = new Ball();
}

function draw() {
    // Step 1: Calculate ball's position
    ball.update();
    console.log(ball.xMouseRel + " " + ball.xSpd);

    // Step 2: Clear previous frame
    clear();

    // Step 3: Draw!
    ball.draw();
}

function Ball() {
    this.xPos = random(width);
    this.yPos = random(height);
    this.xMid = this.xPos + 25;
    this.yMid = this.yPos + 25;
    this.xMouseRel = this.xMid - mouseX;
    this.yMouseRel = this.yMid - mouseY;
    this.xSpd = 0;
    this.ySpd = 0;
    this.diameter = 50;

    this.update = function() {
        this.xMid = this.xPos + 25;
        this.yMid = this.yPos + 25;

        // Step 1: Update relative mouse position
        this.xMouseRel = this.xMid - mouseX;
        this.yMouseRel = this.yMid - mouseY;

        // Step 2: Calulate change in speed value
        if(this.mouseInRange()) {
            // Update speed values depending on where mouse is
            if((this.xSpd * this.xMouseRel) >= 0) {
                this.xAccel = map(this.xMouseRel, 50, 0, 0, 1);
            } else {
                this.xAccel = map(this.xMouseRel, 50, 0, 0, -1);
            }

            if((this.ySpd * this.yMouseRel) >= 0) {
                this.yAccel = map(this.yMouseRel, 50, 0, 0, 1);
            } else {
                this.yAccel = map(this.yMouseRel, 50, 0, 0, -1);
            }
        } else {
            this.xAccel *= 0.99;
            this.yAccel *= 0.99;
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

        this.bounce();
    }

    this.draw = function() {
        ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
    }

    this.mouseInRange = function() {
        if(dist(mouseX, mouseY, this.xPos, this.yPos) <= 50) {
            return true;
        } else {
            return false;
        }
    }

    this.bounce = function() {
        if((this.xPos + this.diameter) > width || this.xPos < 0) {
            this.xSpd *= -1;
        } else if((this.yPos + this.diameter) > height || this.yPos < 0) {
            this.ySpd *= -1;
        }
    }
}
