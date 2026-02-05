// create a class point , its has two propeerty x and y , write a static method distance that takes two point objects and returns the distance between them.
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(point1, point2) {
        let dx = point2.x - point1.x;
        let dy = point2.y - point1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let p1 = new Point(2, 3);
let p2 = new Point(5, 7);
console.log("Distance between points: " + Point.distance(p1, p2));

// using Math.hypot
console.log("Distance using Math.hypot: " + Math.hypot(p2.x - p1.x, p2.y - p1.y));