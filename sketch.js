var issimage, spacebg, spacecraft1, spacecraft2, spacecraft3, spacecraft4;
var iss, spaceCraft, hasDocked = false
var undock

function preload(){
spacebg = loadImage("Docking-undocking/spacebg.jpg");
issimage = loadImage("Docking-undocking/iss.png");
spaceCraft1 = loadImage("Docking-undocking/spacecraft1.png");
spaceCraft2 = loadImage("Docking-undocking/spacecraft2.png");
spaceCraft3 = loadImage("Docking-undocking/spacecraft3.png");
spaceCraft4 = loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  createCanvas(800,500);
  spaceCraft = createSprite(400, 200, 50, 50);
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale = 0.25
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issimage);
  undock = createSprite(755,465,70,30);
  undock.shapecolor = "blue"
  undock.visible = false
}

function draw() {
  background(spacebg);  
  if(!hasDocked){
    //spaceCraft.x = Math.round(random(spaceCraft.x-1,spaceCraft.x+1))
    if(keyDown("left")) {
      spaceCraft.x -= 5
      spaceCraft.addImage(spaceCraft4)
      spaceCraft.scale = 0.27
    } else if(keyDown("right")){
      spaceCraft.x += 5
      spaceCraft.addImage(spaceCraft3)
      spaceCraft.scale = 0.27
    } else if(keyDown("up")){
      spaceCraft.y -= 5
      spaceCraft.addImage(spaceCraft2)
    } else if(keyDown("down")){
      spaceCraft.y += 5
      spaceCraft.addImage(spaceCraft1)
      spaceCraft.scale = 0.27
    }else{
      spaceCraft.addImage(spaceCraft1)
      spaceCraft.scale = 0.3
    }
    if(spaceCraft.x === 330 && spaceCraft.y === 295){
      hasDocked = true
      spaceCraft.addImage(spaceCraft1)
      spaceCraft.scale = 0.3
    }
} 
else{
  fill("red")
  rect(720,450,70,30)
  fill("white")
  text("Undock",735,470)
  textSize(40)
  fill("yellow")
  text("Docking Sucessful",200, 450)
  if(mousePressedOver(undock)){
    spaceCraft.x = 400
    spaceCraft.y = 350
    hasDocked = false
  }
}
  drawSprites();
}