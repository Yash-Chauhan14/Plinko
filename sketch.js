var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var line;

var divisionHeight=300;
var score =0;
var gameState = "PLAY";

var count = 0;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background(0);
  Engine.update(engine);
  textSize(35)
  text("Score : "+score,20,30);
  fill(255);

  fill("white");
  text("500",25,550);

  fill("white");
  text("500",105,550);

  fill("white");
  text("500",185,550);

  fill("white");
  text("500",265,550);

  fill("white");
  text("100",345,550);

  fill("white");
  text("100",425,550);

  fill("white");
  text("100",505,550);

  fill("white");
  text("200",585,550);

  fill("white");
  text("200",665,550);

  fill("white");
  text("200",745,550);


  ground.display();
  if(gameState =="END")
  {
    background("black");
    fill("red");
    textSize(100);
    text("Game Over", 200,400);

  }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }


 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

}

function mousePressed()
{
  if(gameState!=="end")
  {
    particle = new Particle(mouseX, 10, 10 ,10);
  }
}