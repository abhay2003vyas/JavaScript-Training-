let Promis1 = new Promise((resolve, reject) => {
    setInterval(reject('some error'),5000);
});
Promis1.then((value) => {
    console.log("Promise resolved with value: " + value);
}).catch((error) => {
    console.error("Promise rejected with error: " + error);
});
console.log("some exexuting code ... after request made but before response");