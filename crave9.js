var cities = ["mumbai", "delhi", "bangalore"];
cities.forEach(function(city){
    console.log(city);
});

// // Using arrow function
// cities.forEach(city => console.log(city.length));

console.log("Length of each element :"+cities.map(city => city.length));