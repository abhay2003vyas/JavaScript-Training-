// privete variable and getter and setter 


class Dog{
    constructor(name){
        this._name = name; // why not this._name ?? ans 
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}

var doggie = new Dog("Buddy");
console.log(doggie.name); // Output: Buddy