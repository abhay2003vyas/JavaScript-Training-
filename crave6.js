// create car functiom with props brand , model , year  and method showCarDetails
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.showCarDetails = function() {
        console.log("Brand: " + this.brand + ", Model: " + this.model + ", Year: " + this.year);
    };
}

var myCar = new Car("Toyota", "Corolla", 2020);
var myCar2 = new Car("Honda", "Civic", 2019);
myCar.showCarDetails();
myCar2.showCarDetails();

// but i do not want to use new keyword
function showCarDetails() {
    console.log("Brand: " + this.brand + ", Model: " + this.model + ", Year: " + this.year);
}

var car1 = {
    brand: "Ford",
    model: "Mustang",
    year: 2021
};

showCarDetails.call(car1);