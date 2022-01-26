class Division{
    constructor(x, y, width, height) {
        var options = {
            //'restitution':0.8,
            isStatic:true
            //'friction':1.0,
            //'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        rectMode(CENTER);
        fill("black");
        rect( pos.x, pos.y, this.width, this.height);
        pop();
      }
}