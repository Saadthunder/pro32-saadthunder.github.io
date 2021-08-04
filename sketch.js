const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
  ball = new Ball(width / 2 + 80, height / 2 - 80, 80,80);

  blowerMouth = new Blower(width / 2 + 70, height / 2 + 20, 100, 90);

 button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  //button.class("blowButton");
  button.mouseClicked(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  blower.show();
  ball.show();
  blowerMouth.show();

}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0 }, { x: 0, y: 0.05 });
}