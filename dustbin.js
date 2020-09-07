class Dustbin{

    constructor(x,y,angle){
        var options= {
            restitution: 0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,20,100,angle);
        this.width = width;
        this.height = height;
        World.add(world, this.body)

        
    }

    display(){
        var angle = this.body.angle;
        rectMode(CENTER);
    }

}