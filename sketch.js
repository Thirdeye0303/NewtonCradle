
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1920,1080)

	engine = Engine.create();
	world = engine.world;
	bobDiameter = 40;

    bobObject1 = new Bob (400,500,100);
	bobObject2 = new Bob (500,500,100);
	bobObject3 = new Bob (600,500,100);
	bobObject4 = new Bob (700,500,100);
	bobObject5 = new Bob (800,500,100);

	groundObj = new Ground(600, 100, 500, 20)

	ropeObj1 = new Rope(bobObject1, groundObj, -bobDiameter*2,0);
    ropeObj2 = new Rope(bobObject2, groundObj, -bobDiameter*2,0);
	ropeObj3 = new Rope(bobObject3, groundObj, -bobDiameter*2,0);
	ropeObj4 = new Rope(bobObject4, groundObj, -bobDiameter*2,0);
	ropeObj5 = new Rope(bobObject5, groundObj, -bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 
 groundObj.display();
 
 ropeObj1.display();
 ropeObj2.display();
 ropeObj3.display();
 ropeObj4.display();
 ropeObj5.display();
}



