// promise chaining

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 1000);
});

p.then((value) => {
  console.log("step1 :", value);
  return value * 2;
}).then((value) => {
  console.log("setp 2 :", value);
  return value + 5;
}).then((value)=>{
    console.log("final :",value);
})
.catch((error)=>{
    console.log(error);
})