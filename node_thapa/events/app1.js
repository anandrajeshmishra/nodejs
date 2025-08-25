const EventEmitter = require('events');
const emitter = new EventEmitter();
const Anand = new EventEmitter();
Anand.on("greet", ()=>{
    console.log(`Hello world, My name is Anand Mishra`);
})
emitter.on("greet", ()=>{
    console.log(`Namaskar duniya walon`);
})
emitter.emit("greet")
// Anand.emit("greet")
// To do the same via passing the arguments
Anand.on("greet",(username) => {
    console.log(`Hello ${username}`)
})
Anand.emit("greet","Anandkumar")