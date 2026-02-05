function Person(){
    this.age = 0;
    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}

var p1 = new Person();