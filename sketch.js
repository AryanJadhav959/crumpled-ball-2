
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	var engine , world;

function preload()
 {
	
 }

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
    world = engine.world;

	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100,650,70);   

	bin = new Dustbin(1200,500,300,300);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(128,128,128)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	
 }


function draw() {
	
	rectMode(CENTER);
	ellipseMode(RADIUS)
  background(255);
  paper.display(); 
  bin.display();

  drawSprites();
 
 }

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:30, y:-30});
	}
 } 