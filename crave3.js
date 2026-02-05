// write a function divide that takes two numbers as arguments and returns their division. Handle the case where the second number is zero by returning 'undefined'.
function divide(a, b) {
    // if (b === 0) {
    //     return undefined;
    // }
    return a / b;
}

// write in try catch  block to handle error
var functionCaller = function () {
    try {
        console.log(divide(10, 0));
    } catch (e) {
        console.log('undefined');
    }
    finally {
        console.log(divide(10, 2));

    }
}
functionCaller();