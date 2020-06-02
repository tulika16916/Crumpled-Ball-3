var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,dustbin,groun,b1,l1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(600,640);
	ground= new Ground(400,680,800,50)
	b1= new Paper(100,100,70)
	l1= new Launcher(b1.body,{x:200,y:100})
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(165,212,144);
   
  dustbin.display();
  ground.display();
  b1.display();
  l1.display();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(b1.body,b1.body.position,{x:85,y:-85});
	}

}

function mouseDragged(){
	Matter.Body.setPosition(b1.body,{x:mouseX,y:mouseY})
 }
 
 function mouseReleased(){
	 l1.fly();
 }



