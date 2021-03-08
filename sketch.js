const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box9,box10,box11;
var ground;
var polygon,slingShot,stand1;
var polygon_img;
function preload(){
    polygon_img=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1600,900);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground=new Ground();
    stand1=new Stand(390,300,250,10);
box1=new Box(300,275,30,40)
box2=new Box(330,275,30,40)
box3=new Box(360,275,30,40)
box4=new Box(390,275,30,40)
box5=new Box(420,235,30,40)
box6=new Box(450,235,30,40)
box7=new Box(480,235,30,40)
box9=new Box(330,195,30,40)
box10=new Box(360,195,30,40)
box11=new Box(425,155,30,40)
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
slingShot=new SlingShot(this.polygon.body,{x:100,y:200});
}
function draw(){
    background("brown");
    Engine.update(engine)
    ground.display();
    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box9.display();
    box10.display();
    box11.display();
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly()

}
function keyPressed(){
    if(keyCode === 32){
      slingShot.attach(this.polygon);
    }
}
