var fr,mr;



function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 80, 40);
  mr=createSprite(350,350,40,80);
  fr.debug=true;
  mr.debug=true;
}

function draw() {
  background(0); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  if(mr.x-fr.x<mr.width/2+fr.width/2 &&
    fr.x-mr.x<mr.width/2+fr.width/2 &&
    mr.y-fr.y<mr.height/2+fr.height/2 &&
    fr.y-mr.y<mr.height/2+fr.height/2){
    mr.shapeColor='red';
    fr.shapeColor='red';
  }
  else{
    mr.shapeColor='green';
    fr.shapeColor='green';
  }
  drawSprites();  
}