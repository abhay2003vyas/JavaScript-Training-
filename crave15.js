//create a class car with model.year and price 
class Car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
        this.speed = 0;
    }
    accelerate() {
        this.speed += 10;
        console.log(this.model + " is accelerating. Current speed: " + this.speed);
    }
}

// create an array of car objects
let cars = [
    new Car("Toyota", 2020, 20000),
    new Car("Honda", 2019, 18000),
    new Car("Ford", 2021, 25000),
    new Car("Chevrolet", 2018, 15000)
];

// print cars with price > 18000
let expensiveCars = cars.filter(car => car.price > 18000);
console.log("Cars with price greater than 18000:");
expensiveCars.forEach(car => console.log(car.model + " - $" + car.price));

// accelerate each car
cars.forEach(car => car.accelerate());

