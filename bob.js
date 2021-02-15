class BOB{
constructor(x,y,radius){
 var op={
    isStatic: false,
    'restitution':1,
    'friction':0,
    'density':3
}
 this.body = Matter.Bodies.circle(x,y,radius,op);
 this.radius = radius;
 World.add(world,this.body);  

}
display(){
 var posX = this.body.position.x;
 var posY = this.body.position.y;
 push();
 ellipseMode(RADIUS);
 fill(285,255,215);
 ellipse(posX,posY,this.radius,this.radius);
 pop();
}




}