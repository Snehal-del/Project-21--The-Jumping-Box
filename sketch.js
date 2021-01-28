var canvas;
var sound;
var edges;

var blueBlock;
var greenBlock;
var orangeBlock;
var redBlock;

var bounceBlock;

function preload(){
    sound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

    //console.log(windowWidth, windowHeight);

    blueBlock = createSprite(190, windowHeight - 50, 350, 50);
    blueBlock.shapeColor = "blue";

    greenBlock = createSprite(580, windowHeight - 50, 350, 50);
    greenBlock.shapeColor = "green";

    orangeBlock = createSprite(960, windowHeight - 50, 350, 50);
    orangeBlock.shapeColor = "orange";

    redBlock = createSprite(1340, windowHeight - 50, 350, 50);
    redBlock.shapeColor = "red";

    bounceBlock = createSprite(Math.round(random(100, windowWidth - 100)), 100, 60, 60);
    bounceBlock.shapeColor = "white";
    bounceBlock.velocityX = 7;
    bounceBlock.velocityY = 8.76;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();

    bounceBlock.bounceOff(edges);

    if(colliding(redBlock, bounceBlock)) {
        sound.play();
        
        bounceBlock.shapeColor = "red";
        bounceBlock.velocityX = 0;
        bounceBlock.velocityY = 0;
    }

  if(colliding(blueBlock, bounceBlock) && bouncingOff(blueBlock, bounceBlock)) {
      bounceBlock.shapeColor = "blue";
      sound.stop();
  }
  
  if(colliding(greenBlock, bounceBlock) && bouncingOff(greenBlock, bounceBlock)) {
      bounceBlock.shapeColor = "green";
      sound.play();
  }
  
  if(colliding(orangeBlock, bounceBlock) && bouncingOff(orangeBlock, bounceBlock)) {
      bounceBlock.shapeColor = "orange";
     sound.stop();
  }

  drawSprites();
}

function bouncingOff(object1, object2) {

    if(object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.x - object2.x < object2.width/2 + object1.width/2 && object2.y - object1.y < object2.height/2 + object1.height/2 && 
      object1.y - object2.y < object2.height/2 + object1.height/2) {
  
        object2.velocityX = object2.velocityX * (-1);
        object2.velocityY = object2.velocityY * (-1);
  
        object1.velocityX = object1.velocityX * (-1);
        object1.velocityY = object1.velocityY * (-1);

        return true;

    }  
  }

  function colliding(object1, object2) {

    if(object2.x - object1.x < object2.width/2 + object1.width/2 &&
      object1.x - object2.x < object2.width/2 + object1.width/2 && object2.y - object1.y < object2.height/2 + object1.height/2 && 
      object1.y - object2.y < object2.height/2 + object1.height/2) {
  
        return true;
        
       }
     
  }
  
  
