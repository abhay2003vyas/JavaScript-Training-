// A Prommise is an Object That  reresents  future completion 
// Promise has 3 states 
// 1) Pending
// 2) Fulfilled / resolve
// 3) Rejectes
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //reject(0);
    resolve("Promise resolve after 3 sec");
  }, 3000);
});

p1.then((value)=>{
    console.log(p1);
}).catch((error)=>{
    console.log(error);
})