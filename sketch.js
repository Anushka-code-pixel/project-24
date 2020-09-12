
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  paper = new Paper();
  bin1 = new Dustbin(575,650,200,20);
	bin2 = new Dustbin(475,570,20,140);
  bin3 = new Dustbin(675,570,20,140);
  ground = new Ground();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }
}

