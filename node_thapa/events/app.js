// Import EventEmitter class
const EventEmitter = require('events');
// Create an instances of EventEmitter
const emitter = new EventEmitter();
const Anand = new EventEmitter();
// 1. Define an event listener (addListener)
// yeh woh wala part hai jaha par ham log ek function ko define karte hain
// emitter.on("greet",()=>{
//     console.log(`Hello world welcome to the world of the programming`);
// })
// 2. Trigger (emimt) the "greet" event
// yeh woh wala part hai jaha par ham log who function ko call karte hain
// emitter.emit("greet")
// emitter.emit("greet")
//To do the same via passing the arguments
// emitter.on("greet",(username, prof)=>{
//     console.log(`Hello ${username}, You are an ${prof}`);
// })
// emitter.emit("greet","Anandkumar", "Engineering");
// Anand.on("greet",(username,petname)=>{
//     console.log(`Hello bhai ${username}, Tumahara pet name ${petname} hai`);
// })
// Anand.emit("greet", "Anand", "Shyam")
// ! but it's best idea to take a single argument as an object.
// but it can be done better
// IT IS BETTER BECAUSE IT CAN BE DONE SIMPLE NOW LIKE PREVIOUSLY WE WERE PASSING THE ARGUMENTS AS IT IS BUT
// THERE MAY BE ISSUE IF WE HAVE TO PASS MANY THINGS TOGETHER THAT'S WHY WE HAVE PASSES IT THROUGH ARGS
emitter.on("greet",(arg)=>{
    console.log(`Hello ${arg.username},You are a ${arg.prof}`);//yaha par arg se usse retrive kar liya gaya hai
})
emitter.emit("greet", {username: "Anandkumar", prof:"Engineer"});//yaha par object jaisa kuch bana kar bheja hai 