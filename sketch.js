const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hour;

function preload() {
  getTime();
}

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  stand = new Ground(390, 307, 300, 20);

  //level one
  block1 = new Box(300, 275, 30, 40);
  block2 = new Box(330, 275, 30, 40);
  block3 = new Box(360, 275, 30, 40);
  block4 = new Box(390, 275, 30, 40);
  block5 = new Box(420, 275, 30, 40);
  block6 = new Box(450, 275, 30, 40);
  block7 = new Box(480, 275, 30, 40);

  //level two
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);

  //level three
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);

  //top
  block16 = new Box(390, 155, 30, 40);


  polygon = new Polygon(100, 100, 30, 30);
  slingshot = new RubberBand(polygon.body, { x: 100, y: 268 });


  score = 0;
}

function draw() {
  background(255);

  if (hour > 6 && hour < 18) {
    background("turquoise")
  } else if (hour < 6 && hour > 18) {
    background("darkblue");
  }


  Engine.update(engine);

  ground.display();
  stand.display();

  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()

  polygon.display()

  slingshot.display();

  text("Score: " + score, 40, 40);
  text(`Drag the hexagon to knock over the boxes\n\n+20 points for each box knocked over`, 200, 40);
}

function mouseDragged() {
  if (slingshot.constraint.bodyA) {
    Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
  }
}

function mouseReleased() {
  slingshot.release();
}

function keyPressed() {
  if (keyCode === 32) {
    Body.setPosition(polygon.body, { x: 49, y: 306 });
    slingshot.attach(polygon.body);
  }
}

async function getTime() {
  var tokyoapi = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");

  var tokyoApiJSON = await tokyoapi.json();

  var dateTime = tokyoApiJSON.datetime;

  hour = dateTime.slice(11, 13);

}