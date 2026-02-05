//create an array of animals and print only those contains "n";4

let animals = ["cat", "dog", "lion", "tiger", "elephant", "giraffe"];
animals.forEach(function(animal) {
    if(animal.includes("n")){
        console.log(animal);
    }
});

// Using arrow function and filter
let animalsWithN = animals.filter(animal => animal.includes("n"));
console.log("Animals containing 'n': " + animalsWithN);