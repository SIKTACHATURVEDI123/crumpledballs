
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1 , Ground1 , dustbin ;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 Paper1= new Paper(300 , 650 ,50 );
 Ground1 =new Ground(400 ,550 , 100, 30);
 dustbin = new Dustbin(550 , 650)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Paper1.display();
Ground1.display();
dustbin.display();

 
 
}



