var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  //spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.4;
  
  doorGroup = new Group();
  climberGroup = new Group();
  invisibleBlockGroup = new Group();
  
}

function draw() {
  background(200);
  drawSprites();
  
  if(tower.y > 400){
      tower.y = 300
    }

  if(keyDown("left_arrow")){
    ghost.x = ghost.x-3
  }
    
  if(keyDown("right_arrow")){
    ghost.x = ghost.x+3
  } 

  if(keyDown("space")){
    ghost.velocityY= -10;
  }

  ghost.velocityY +=0.8;

  spwanDoor();

  if(climberGroup.isTouching(ghost)){
    ghost.velocityY = 0;



  }

  if(gameState===END){
    tower.velocityY = 1;
    textSize(80);
    text("Game Over",100,100)
    text.shapeColor = "black"
    
    


  }
  
  

  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gameState = END
  }
  

  
 
  
}



function spwanDoor(){

  if(frameCount%200===0){
    door = createSprite(200,-50);
    climber = createSprite(200,10);

    invisibleBlock = createSprite(200,50,climber.with,2);


    door.x = Math.round(random(120,400));
    climber.x = door.x;

    invisibleBlock.x = door.x;

    door.addImage("door",doorImg);
    climber.addImage("climber",climberImg);

    door.velocityY = 1;
    climber.velocityY = 1;

    invisibleBlock.velocityY = 1;

    ghost.depth = door.depth;
    ghost.depth +=1; 

    doorGroup.add(door);
    climberGroup.add(climber);

    invisibleBlockGroup.add(invisibleBlock);

    door.lifetime = 500;
    climber.lifetime = 500;
    invisibleBlock.lifetime = 500;

    

  



    






  }



  

  
}
