let nums = [10, 20, 30, 40, 50];
// only square of even numbaers 
let squaredEvens = nums.filter(num => num % 2 === 0).map(num => num * num);
console.log(squaredEvens); // Output: [100, 400, 900, 1600, 2500]


// sum  of all numbers 
let totalSum = nums.reduce((acc, num) => acc + num, 0);
console.log(totalSum); // Output: 150