var tower,towerImage
var door,doorImage,doorsGroup
var climber,climberImage,climbersGroup
var ghost,ghostImage
function preload(){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  doorsGroup=new Group()
  climberImage=loadImage("climber.png")
  climbersGroup=new Group()
 ghostImage=loadImage("ghost-standing.png") 
}

function setup(){
  createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage(towerImage)
  tower.velocityY=1
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImage)
  ghost.scale=0.3
  
}
function draw(){
  background(0)
  if(tower.y>400){
    tower.y=300
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
  }
   if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
    if(keyDown("space")){
    ghost.velocityY=-5
  }
  ghost.velocityY+=0.8
  if(climbersGroup.isTouching(ghost)){
    
  }
  spawnDoors()
  drawSprites()
  
}
function spawnDoors(){
  if(frameCount % 240===0){
  var door= createSprite(200,-50)
  door.addImage(doorImage)
    var climber=createSprite(200,10)
    climber.addImage(climberImage)
    climber.x=door.x
    climber.velocityY=1
    climber.lifetime=800
    ghost.depth=door.depth
    ghost.depth+=1
    door.x=Math.round(random(120,400))
  door.velocityY=1
    door.lifetime=800
    doorsGroup.add(door)
  } 
}







