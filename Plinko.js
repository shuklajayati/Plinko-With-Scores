class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            isStatic:true
            //'friction':1.0,
            //'density':1.0
        }
        this.r = 10;
        this.body = Bodies.circle(x, y,this.r, options);
       
       // this.color=color(random(0, 255), random(0, 255), random(0, 255));
       // this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}