var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 100); // 25
  movingRect = createSprite (200, 100, 100, 50); // 50
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}

function draw() {
  background("lightblue");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(fixedRect.x - movingRect.x );
// 75             ====                  50 + 25 
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
  }
  drawSprites();
}