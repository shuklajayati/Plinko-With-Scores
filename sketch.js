const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,particle;

var ground;
var particles = [];
var plinkos = []; 
var divisions =[];
var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,800);
  ground = new Ground(400,height,1200,20);
  for (var k = 0; k <=800; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
    }

    for (var j = 75; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,75));
     }
     for (var j = 50; j <=width-10; j=j+50) { 
      plinkos.push(new Plinko(j,175));
     }
     for (var j = 75; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,275));
     }
     for (var j = 50; j <=width-10; j=j+50) { 
      plinkos.push(new Plinko(j,375));
     }
}

function draw() {
  background(255,255,255);  
  textSize(35)
  text("Score : "+score,20,40);
  text(" 500 ", 5, 550);
   text(" 500 ", 80, 550);
    text(" 500 ", 160, 550); 
    text(" 500 ", 240, 550); 
    text(" 100 ", 320, 550); 
    text(" 100 ", 400, 550); 
    text(" 100 ", 480, 550);
     text(" 200 ", 560, 550); 
     text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();
  if ( gameState =="end") {
    textSize(100);
    text("GameOver", 150, 250);
      //return
     }

     if(particle!=null) {
       particle.display(); 
       if (particle.body.position.y>760) {
        if (particle.body.position.x < 300) {
           score=score+500; 
           particle=null;
            if ( count>= 5) gameState ="end"; 
          } 
          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) {
             score = score + 100;
              particle=null;
               if ( count>= 5) gameState ="end";
               }
                else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) {
                   score = score + 200;
                    particle=null;
                     if ( count>= 5) gameState ="end";
                     }
                    }
                   }
  for (var k = 0; k <plinkos.length; k = k + 1) {
    plinkos[k].display(); 
   }
  for (var k = 0; k <divisions.length; k = k + 1) {
    divisions[k].display(); 
   }
   //if(frameCount%60===0){ 
    // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //  score++;
    // }
     //for (var k = 0; k <particles.length; k = k + 1) {
      //particles[k].display(); 
     //}
}
function mousePressed() {
  console.log("HI") 
  if(gameState!=="end") { 
    count++;
    particle=new Particle(mouseX, 10, 10, 10);
   } }