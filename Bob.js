class Bob{
    constructor(x,y,r){
    var options = {
        isStatic: true,
        restitution: 0.3,
        friction: 0,
        density:1.2
    }
    this.r = r
    //this.crumpledImage = loadImage("paper.png");
    this.body = Bodies.circle(x,y,r,options)
    World.add(world, this.body)
    }
    display(){
    push()
    translate(this.body.position.x,this.body.position.y)
    //image(this.crumpledImage,0,0, this.r, this.r)
    ellipse(0,0, this.r,this.r)
    pop()
    }
    }
    