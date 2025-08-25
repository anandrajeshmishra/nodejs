const EventEmitter = require("events");
const emitter = new EventEmitter();
const eventCounts = {
    "user-Login":0,
    "user-Purchase":0,
    "Profile-Updated":0,
    "user-Logout":0,
}
emitter.on("user-Login", (username)=>{
    eventCounts["user-Login"]++;
    console.log(`you have successfully loged in as, ${username}`)
})
emitter.on("user-Purchase",(username,device)=>{
    eventCounts["user-Purchase"]++;
    console.log(`${username}, have successfully purchase,${device}`)
})
emitter.on("Profile-Updated",(username,app)=>{
    eventCounts["Profile-Updated"]++;
    console.log(`${username} have successfully updated ${app}`)
})
emitter.on("user-Logout",(username)=>{
    eventCounts["user-Logout"]++;
    console.log(`${username}, have successfully loged out`)
})
emitter.on("summary",()=>{
    console.log(eventCounts);
})
emitter.emit("user-Login","Anandkumar");
emitter.emit("user-Purchase", "Anandkumar","MobilePhone");
emitter.emit("Profile-Updated", "Anandkumar","Whatsapp");
emitter.emit("user-Logout", "Anandkumar")
emitter.emit("summary");