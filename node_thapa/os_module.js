const os = require("os");
//get the os platform and  user info
console.log("platform:", os.platform());
console.log("User:", os.userInfo());
//if we want to know the architecture of the CPU
console.log("CPU Architecture:", os.arch());
//how much free memory is available in os
console.log("free memory:", os.freemem(),"bytes");
//how much total memory is available in os
console.log("total memory:", os.totalmem(),"bytes");
//to get system up time
console.log("system uptime:", os.uptime());
//get home directory
console.log("home directory:",os.homedir());
// console.log("os name", os.hostname());
// console.log("operating system", os.type());
// console.log("cpu info:", os.cpus());