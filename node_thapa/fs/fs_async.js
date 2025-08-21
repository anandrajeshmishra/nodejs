const fs = require("fs")
const path = require("path")
const fileName = "TEST.txt"
const filePath = path.join(__dirname,fileName)
//syntax of async is //fs.writeFile(path,data,options,callback);


//To write the file using js
// fs.writeFile(filePath,"This is the intial Data of the txt file", 'utf-8',
//     (err)=>{
//         if(err) console.error(err);
//         else console.log("File has been saved in the memory");
//     });

//To read the file using the js
// fs.readFile(filePath,'utf-8',
//     (err,data)=>{
//         if(err)console.error(err);
//         else console.log(data);
//     }
// );

//To append the file using the js
// fs.appendFile(filePath,"\nHello this is the next line of the code (append)",'utf-8',
//     (err)=>{
//     if(err) console.log(err);
//     else console.log("Data appended successfully");
//     }
// )


//To delete the file using js
fs.unlink(filePath,
    (err)=>{
        if(err) console.err(error);
        else console.log("The file has been deleted");
})