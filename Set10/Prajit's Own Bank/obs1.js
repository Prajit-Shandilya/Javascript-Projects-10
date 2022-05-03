class OBS1 {
    constructor(x, y, width, height) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;


        World.add(world, this.body);
    }
    display() {
        push();
        var pos = this.body.position;
        rectMode(CENTER);
        stroke(0);
        strokeWeight(1);
        fill(0, 255, 0);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}