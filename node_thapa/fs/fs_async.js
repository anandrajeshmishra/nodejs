const fs = require("fs")
const path = require("path")
const fileName = "fsAsync.txt"
const filePath = path.join(__dirname,fileName)
//syntax of async is //fs.writeFile(path,data,options,callback);
// fs.writeFile(filePath,"This is the intial Data of the txt file", 'utf-8',
//     (err)=>{
//         if(err) console.error(err);
//         else console.log("File has been saved in the memory");
//     });


// fs.readFile(filePath,'utf-8',
//     (err,data)=>{
//         if(err)console.error(err);
//         else console.log(data);
//     }
// );

fs.appendFile(filePath,"\nHello this is the next line of the code (append)",'utf-8',
    (err)=>{
    if(err) console.log(err);
    else console.log("Data appended successfully");
    }
)