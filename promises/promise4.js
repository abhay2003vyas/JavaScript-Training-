// Promise 1
let p1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("first");
  }, 1000);
});

// Promise 2
let p2 = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove("second");
  }, 2000);
});

// promise all method
// both the promises resolve parallelly
// if ANY promise fails then , Promise.all falis immediately
Promise.all([p1, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

// Promise race method
// which ever promises finises first wins
Promise.race([p1,p2])
  .then((value)=>{
    console.log(value);
  })