var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var border1,border2,border3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	//border 1
	border1=createSprite(380,650,200,20);
	border1.shapeColor=color("RED")

	//border 2
	border2=createSprite(470,610, 20, 100);
	border2.shapeColor=color("RED");

	//border 3
	border3=createSprite(280,610,20,100);
	border3.shapeColor=color("RED");
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	//border 1
	border1= Bodies.rectangle(380,650,200,20);
	Matter.Body.setStatic(border1,true);
	World.add(world, border1);

	//border 2
	border2= Bodies.rectangle(470,610, 20, 100);
	Matter.Body.setStatic(border2, true);
	World.add(world, border2)

	//border 3
	border3=Bodies.rectangle(280,610,20,100);
	Matter.Body.setStatic(border3, true)
	World.add(world, border3)


	 
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
  }
}



