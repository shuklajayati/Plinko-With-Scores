class Particle{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
           // 'friction':1.0,
            //'density':1.0
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
       // this.height = height;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse( 0, 0, this.r, this.r);
        pop();
      }
}