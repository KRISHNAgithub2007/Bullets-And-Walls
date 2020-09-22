var bull1,weight1,speed1,damage1;
var bull2,weight2,speed2,damage2;
var bull3,weight3,speed3,damage3;
var wall1,wall2,wall3;

function setup() {
  createCanvas(1000,600);

  bull1=createSprite(10, 60, 50, 30);
  bull1.shapeColor="white";

  bull2=createSprite(10, 300, 50, 30);
  bull2.shapeColor="white";

  bull3=createSprite(10, 540, 50, 30);
  bull3.shapeColor="white";

  wall1=createSprite(990,60,50,50);
  wall1.shapeColor="purple";

  wall2=createSprite(990,300,50,50);
  wall2.shapeColor="purple";

  wall3=createSprite(990,540,50,50);
  wall3.shapeColor="purple";

  weight1=random(30,52);
  weight2=random(30,52);
  weight3=random(30,52);

  speed1=random(223,321);
  speed2=random(223,321);
  speed3=random(223,321);

  damage1=0.5*weight1*speed1*speed1/9702
  damage2=0.5*weight2*speed2*speed2/9702
  damage3=0.5*weight3*speed3*speed3/9702

}

function draw() {
  background("black");  

    bull1fun();

    bull2fun();

    bull3fun();
 
 if(keyDown("space") )
 {
   bull1.velocityX=speed1/11;
   bull2.velocityX=speed2/11;
   bull3.velocityX=speed3/11;
 }
 
  drawSprites();
}

function bull1fun()
{

  if(bull1.isTouching(wall1))
  {
   bull1.velocityX=0;
 
   if(damage1>180)
   {
     bull1.shapeColor="red";
   }
 
   if(damage1>100 && damage1<180)
   {
     bull1.shapeColor="yellow";
   }
 
   if(damage1<100)
   {
     bull1.shapeColor="green";
   }
 
  }

}

function bull2fun()
{

  if(bull2.isTouching(wall2))
  {
   bull2.velocityX=0;
 
   if(damage2>180)
   {
     bull2.shapeColor="red";
   }
 
   if(damage2>100 && damage2<180)
   {
     bull2.shapeColor="yellow";
   }
 
   if(damage2<100)
   {
     bull2.shapeColor="green";
   }
   
  }

}

function bull3fun()
{

  if(bull3.isTouching(wall3))
 {

    bull3.velocityX=0;

  if(damage3>180)
  {
    bull3.shapeColor="red";
  }

  if(damage3>100 && damage3<180)
  {
    bull3.shapeColor="yellow";
  }

  if(damage3<100)
  {
    bull3.shapeColor="green";
  }
  
 }

}