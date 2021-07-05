var bg;
var snowflake,snowflakeImg;



function preload(){
  bg= loadImage("snow3.jpg")
  snowflakeImg=loadImage("snow4.webp")

}





function setup() {
  createCanvas(800,400);
  snowflake=createSprite(400, 200, 50, 50);
  snowflake.addImage(snowflakeImg)
  snowflake.scale=0.2
}

function draw() {
  background(bg);  

  if(keyDown("UP_ARROW")){
    snowflake.y = snowflake.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    snowflake.x = snowflake.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    snowflake.x = snowflake.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
    snowflake.y = snowflake.y +2;
  }
  drawSprites();
}