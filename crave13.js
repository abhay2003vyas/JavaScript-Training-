// print square of each number in array

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num * num);
});

// Using arrow function
numbers.forEach(num => console.log(num * num));