// If we simply don't want to write the promises we can require the fs like this given below
// const fs = require("fs/promises");
// Now we don't need to write fs.promises everytime 
const fs = require("fs");
const path = require("path");
const fileName = "fspromises.txt";
const filePath = path.join(__dirname, fileName);
// .then() ensures clear changing of multipe asynchronous operations.
// .cath() centralizes error handling, making it easy to debug and manage failure.
// const file = __dirname;


// It uses to read the txt of the file and show it to the terminal
fs.promises
    .readFile(filePath,'utf-8')
    .then((data)=> console.log(data))
    .catch((err) => console.error("error reading file:",err));


// To write the file and make the txt file It can be use to overwrite the file
//     .writeFile(filePath,"this is the initial statement of this txt file", 'utf-8')
//     .then(console.log("File Created successfully!"))
//     .catch((err) => console.log(err)); 


//To append the txt inside the file
// fs.promises
//     .appendFile(filePath,"\nThis is the second line of the txt file",'utf-8')
//     .then(console.log("Files updated successfully!"))
//     .catch((err) => console.error("error reading file:",err));


// To delte the txt file which we have maded earlier
fs.promises
    .unlink(filePath)
    .then(console.log("File Deleted Successfully!"))
    .catch((err) => console.error("Error Deleting file:", err));