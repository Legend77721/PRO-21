var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1100, 200, thickness, height / 2);

  bulllet = createSprite(50,200,20,20);
 
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  car.velocityX = speed;
}

function draw() {
  background("black");  


wall.shapeColor = (80,80,80);


if(hasCollided(bullet,wall)) {
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed *speed/(thickness *thickness *thickness);
}

if(damage>10)
{
  wall.shapeColor = color(255,0,0);
}

if (damage<10){
  wall.shapecolor = color(0,255,0);
}



  drawSprites();
}

function hasCollided(bullet,wall) {
 
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}