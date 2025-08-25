const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("I am AnandKumar Mishra aka Shyam Mishra");
        res.end();
    }
});
// server.emit();
// server.addListener();
// It is bascially an event emitter and relation only with some additional
//  feature like with the feature of creating a server
const port = 3000;
server.listen(port,()=>{
    console.log(`Listening on PORT ${port}`)
})
// now client can try to access the server at any time therefore we allot port where we can give the access