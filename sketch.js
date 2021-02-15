
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof1 = new ROOF(350,200,550,20);

	bob1 = new BOB(250,400,25);
	bob2 = new BOB(300,400,25);
	bob3 = new BOB(350,400,25);
	bob4 = new BOB(400,400,25);
	bob5 = new BOB(480,400,25);
	bob6 = new BOB(540,400,25);

	rp1 = new ROPE(roof1.body,bob1.body,-150,0);
	rp2 = new ROPE(roof1.body,bob2.body,-100,0); 
	rp3 = new ROPE(roof1.body,bob3.body,-50,0);
	rp4 = new ROPE(roof1.body,bob4.body,50,0);
	rp5 = new ROPE(roof1.body,bob5.body,100,0);
	rp6 = new ROPE(roof1.body,bob6.body,150,0);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	rp1.display();
	rp2.display();
	rp3.display();
	rp4.display();
	rp5.display();
	rp6.display();


  roof1.display();
  
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   bob6.display();


  drawSprites();
 
}

function keyPressed(){
if(keyCode===32){
 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-50});	
}

	
}

