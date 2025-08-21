const fs = require("fs");
const path = require("path");
const filename =  "TEST.txt";
const filePath = path.join(__dirname,__filename);
// console.log(__dirname);
// const writefile = fs.writeFileSync(
// filePath,
// "this is the initial Data, updated 2",
//  "utf-8");
// console.log(writefile);
// const readFile = fs.readFileSync(filePath);
// console.log(readFile);
const appendFile = fs.appendFileSync(
filePath,
"this is the updated Data",
 "utf-8");
 console.log(appendFile);
// fs.appendFileSync(filePath,Data,options);
