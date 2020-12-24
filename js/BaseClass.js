class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.8,
            friction: 0.7,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS)
        rotate(angle);
        rectMode(CENTER);
        fill("lightpink");
        rect(0, 0, this.width, this.height);
        pop();
      }
}