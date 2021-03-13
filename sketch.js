
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(400,100,200,35);
	bob1 = new Bob(100,700,20,30);
	rope1 = new Rope(roof1.body,bob1.body,-BobRadius*4, 1);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  bob1.display();
  roof1.display();
  rope1.display();
  drawSprites();
 
}



