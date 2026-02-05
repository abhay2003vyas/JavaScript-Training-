// create a consrtrustior function City (name , metro:Y/N ,state)
function City(name, isMetro, state) {
    this.name = name;
    this.isMetro = isMetro;
    this.state = state;
}

// create an array of city objects
let cities = [
    new City("Mumbai", "Y", "Maharashtra"),
    new City("Delhi", "Y", "Delhi"),
    new City("Bangalore", "Y", "Karnataka"),
    new City("Chennai", "N", "Tamil Nadu"),
    new City("Hyderabad", "Y", "Telangana")
];

// print metro city in UPPER case
let metroCities = cities.filter(city => city.isMetro === "Y");
console.log("Metro Cities:");
metroCities.forEach(city => console.log(city.name.toUpperCase() + ", " + city.state));