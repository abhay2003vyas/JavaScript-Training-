// callback = function passed to another function to run later

function greet(name , callback){
    console.log("Hello "+ name);
    callback();
}

function sayBye(){
    console.log("Bye");
}

greet("Abhay",sayBye);