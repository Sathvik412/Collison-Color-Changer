function setup() {
  createCanvas(800,400);
   block = createSprite(400, 200, 50, 50);
   block2 = createSprite(200,400,100,100)
   block.shapeColor="blue"
   block2.shapeColor="green"
}

function draw() {
  background("purple"); 
  block.x= mouseX
  block.y= mouseY
  if(block.x-block2.x<block2.width/2+block.width/2
    && block2.x-block.x<block2.width/2+block.width/2
    &&block.y-block2.y<block2.height/2+block.height/2
    && block2.y-block.y<block2.height/2+block.height/2){
      block.shapeColor="red"
      block2.shapeColor="black"
    }
    else{block.shapeColor="blue"
    block2.shapeColor="green"}
  drawSprites();
}