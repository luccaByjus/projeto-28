class launcher{

    constructor(bodyA, pointB){
        var options = {
          bodyA: bodyA, 
          pointB: pointB,
          stiffness: 0.04,
          length: 10 
        } 
            this.pointB = pointB
            this.sling = Constraint.create(options) 
            World.add(world,this.sling)
    }
          fly(){
              this.launcher.bodyA = null
          }
       
      display(){
          if(this.sling.bodyA){
          var pa = this.sling.bodyA.position
          var pb = this.pointB
          strokeWeight(4)
          line(pa.x,pa.y,pb.x, pb.y)
            }
        }
  
  }