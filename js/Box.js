class Box{
    constructor(x,y,color){
       var options={
           restitution:0.4,
           friction:0.0
       }
       this.Visibility= 255;
       this.body=Bodies.rectangle(x,y,30,50)
this.width=width;
this.height=height
World.add(world,this.body)
    }
display(){
    if(this.body.speed<5){
    var angle=this.body.angle
   var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
}
    else{ 
        World.remove(world,this.body);
        push();
        this.Visibility= this.Visibility - 5;
pop();
    }
}
}