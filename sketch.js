const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
ball=new Ball(300,300,25)
rope=new Slingshot(ball.body,{x:300,y:50})
box1= new Box(600,100,70,70)
box2= new Box(600,100,70,70)
box3=new Box(600,100,70,70)
box4=new Box(600,100,70,70)
box5=new Box(600,100,70,70)
box6=new Box(600,100,70,70)
ground=new Ground(400,height,800,20)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)  
ball.display();
rope.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
ground.display();

}
function keyPressed(){
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-75,y:75})
  }
}