class Ball{
    constructor(x,y,radius){
        var options={
            friction:0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
        this.radius=radius
        }
        display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill('green')
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius)
        pop()
        }
}