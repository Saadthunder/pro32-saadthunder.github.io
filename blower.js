class Blower
{
  constructor(x, y, w,h) 
  {
    var options = {
     isStatic:true
    };
    
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    this.x=x;
    this.y=y;
    this.w = w;
    this.h = h;
    
    World.add(world, this.body);
  }

  show() {
    
    push();
    rectMode(CENTER);
    rect(this.x,this.y, this.w, this.h);
    pop();
  }
}
