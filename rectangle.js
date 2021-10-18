class Rectangle{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    getArea(){
        console.log(this.x*this.y);
    }
}
class Square extends Rectangle{
    
}
var sq = new Square(5,5);
sq.getArea();