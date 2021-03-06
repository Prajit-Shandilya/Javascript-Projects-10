class OBS2 {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.3,
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.x = x;
        this.y = y;
        this.radius = radius;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        strokeWeight(2);
        fill(255, 0, 0);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}