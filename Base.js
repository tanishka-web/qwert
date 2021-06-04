class Base {
    constructor (x, y, width, height){
        var options = {
            isStatic: true,
            'restitution':0,
            'friction':0,
            'density':1
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("New folder/trash.png");
        World.add(world, this.body);
    }
    display () {
        imageMode(CENTER);
        fill("black");
        var pos = this.body.position;
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
  }