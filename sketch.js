var wall, thickness;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(23,83);

  bullet = createSprite(50, 250, 30, 20);
  bullet.shapeColour = "white";
  bullet.velocityX = speed;

  wall = createSprite(700, 200, thickness, height/2);
  wall.shapeColor = (80,80,80)
}

function draw() {
  background("pink");  
 
  if (hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);


if (damage<10){
wall.shapeColor = "blue";
}

if(damage>10){
  wall.shapeColor = "purple";
}
  }
 
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
      return true
  }
  return false;
}