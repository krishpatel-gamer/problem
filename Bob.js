class   Bob{
    constructor(x, y, r) {
      var options = {
    
            isStatic: false,
            'restitution':0.1,
            'friction':0.5,
            'density':1.0
      }

      this.x = x;
      this.y = y;
      this.r = r;

      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }
    display() {
      var pos =this.body.position;
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      push();
      translate(pos.x, pos.y);

      ellipseMode(CENTER);

      stroke("white");
      strokeWeight(20);
      fill("black");
      ellipse(0,0,this.r,this.r);
      pop();
    }};