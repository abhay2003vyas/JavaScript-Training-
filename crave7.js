// function Person(){
//     this.age = 0;
//     var that = this;
//     setInterval(function growUp(){
//         that.age++;
//         console.log(that.age);
//  }, 1000);
// }

// var p1 = new Person();

// The above code will not work as
// `this` inside the `setInterval` callback refers to the global object, not the Person instance.