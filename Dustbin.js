class Dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=200
        this.height=100
        this.thickness=20
        this.angle=0
        this.image=loadImage("d.png")
        this.Bbody=Bodies.rectangle(this.x, this.y, this.width, this.thickness,{isStatic:true})
        this.Lbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})  
        this.Rbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,{isStatic:true})  
       
        World.add(world,this.Bbody);
        World.add(world,this.Lbody);
        World.add(world,this.Rbody);

        Matter.Body.setAngle(this.Lbody,this.angle)
        Matter.Body.setAngle(this.Rbody,this.angle)
     }
    display(){
        var Bpos = this.Bbody.position;
        push();
        translate(Bpos.x,Bpos.y);
        rect( 0, 0, this.width, this.thickness);
        rectMode(CENTER)
        imageMode(CENTER);
      image(this.image, 0, -30, 200, 200);
        pop();   
    
    
        var Lpos = this.Lbody.position;
        push();
        translate(Lpos.x,Lpos.y);
        rotate(this.angle)
        rect( 0, 0, this.thickness, this.height);
        rectMode(CENTER)
        pop();   
    

        var Rpos = this.Rbody.position;
        push();
        translate(Rpos.x,Rpos.y);
        rotate(-1*this.angle)
        rect( 0, 0, this.thickness, this.height);
        rectMode(CENTER)
        pop();   
    
    }
   }