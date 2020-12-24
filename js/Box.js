class Box extends BaseClass {
  constructor(x, y, width, height) {
    super(x, y, width, height);

    this.visibility = 255;

    this.image = loadImage('box.png');
  }

  display() {
    if (this.body.speed > 3) {

      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      translate(this.body.position.x, this.body.position.y);
      angleMode(RADIANS)
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      World.remove(world, this.body);
    } else {
      super.display();
    }
  }

  score() {
    if (this.visibility < 0 && this.visibility > - 105){
      score++;
    }
  }

};
