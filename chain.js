class Chain{
    constructor(object1,object2){
        var options={
            bodyA:object1,
            bodyB:object2,
            stiffness:0.04,
            lenght:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}