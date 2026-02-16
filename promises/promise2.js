let p1 = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("successful!");
  } else {
    reject("Failed!");
  }
});

p1.then((value) => {
  console.log(value);
}).catch((error) => {
  console.log(error);
});
