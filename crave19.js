// create one array messages and give 3 messages and create an object(using curley braces), it has a color property , and one function say (it takes some arguments nad pronts) , we have to print thise messages for the cat 
let messages = ["Meowww", "Purr", "Hiss"];
let cat = {
    color: "Orange",
    say: function(message) {
        console.log(this.color + " cat says: " + message);
    }
};
for(let i=0; i<messages.length; i++){
    setTimeout(() => {
        cat.say(messages[i]);
        setTimeout(() => {
            console.log("Timeout completed for message: " + messages[i]);
        }, 1000);
    }, i * 1000);
}
// why getting undefined ? because of var i is function scoped , at the time of execution of setTimeout i becomes 3 (after loop ends) , so messages[3] is undefined
// Using arrow function to retain 'this' context
// how js execute : it has a stack , it push the functions in stack and execute them one by one
// messages.forEach((message, index) => {
//     setTimeout(() => {
//         cat.say(message);
//         setTimeout(() => {
//             console.log("Timeout completed for message: " + message);
//         }, 1000);
//     }, index * 1000);
// });