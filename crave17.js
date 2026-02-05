// print area of rectange 
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(5, 10);
console.log("Area of rectangle: " + rect.getArea());