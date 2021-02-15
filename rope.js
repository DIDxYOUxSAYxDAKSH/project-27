class ROPE{

 constructor(body1,body2,offsetX,offsetY){
 this.offsetX = offsetX;
 this.offsetY = offsetY;
   
  var op={
      bodyA:body1,
      bodyB:body2,
      pointB:{x:this.offsetX,y:this.offsetY},
      stiffness:0.04,
      length:100
      
      
  }  
  this.rope = Matter.Constraint.create(op);
  World.add(world,this.rope);

 }

 display(){
 line(this.rope.bodyA.position.x+this.offsetX,this.rope.bodyA.position.y+this.offsetY,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
 } 








}