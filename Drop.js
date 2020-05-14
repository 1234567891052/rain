function Drop(){
    this.x=random(0,width);
    this.y=random(0,-height);
    
    this.show= function(){
      noStroke();
      fill("blue");
      ellipse(this.x,this.y,2,10);
    }
    this.update= function(){
      this.speed= random(5,15);
      this.y= this.y+ this.speed*1.8;
  
      if (this.y>height){
        this.y=random(0,-height);
      }
  
    }
  }