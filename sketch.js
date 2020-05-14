var drop=[];

function setup(){
createCanvas(1000,800);
for (var i= 0; i<100;i=i+1){
  drop[i]= new Drop();

}
}

function draw(){
  background("black");
  for (var i= 0; i<100;i=i+1){
  drop[i].show();
  drop[i].update();

  if (frameCount===50){
    drop[i].shapeColor= drop[i].shapeColor+10;
  }
}
}

