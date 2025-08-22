const fs = require("fs");
const path = require("path");
const fileName = "asyncFile.txt";
const filePath = path.join(__dirname,fileName);
const filePath1 = __dirname;

// fs.promises
//     .readdir(filePath1)
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err));

const readFolder = async () =>{
    try{
       const res = await fs.promises.readdir(filePath1)
       console.log(res);
    }catch (error){
        console.log(error);
    }
};

const writeFileExample = async()=>{
    try{
        await fs.promises.writeFile(filePath,"This is the intial data of the txt file");
        console.log("Files created successfully!");
    }catch(error){
        console.log(error);
    }
};
const readFileExample = async()=>{
    try{
        const data = await fs.promises.readFile(filePath,'utf-8');
        console.log(data);
        console.log("---The Data Displayed Successfully---")
    }catch(error){
        console.log(error);
    }
}
const appendFileExample = async()=>{
    try{
        await fs.promises.appendFile(filePath,"\nThis is the second line of the txt file and the updated");
        console.log("Data updated successfully!")
    }
    catch(error){
        console.log(error);
    }
}
const deleteFileExample = async()=>{
    try{
        await fs.promises.unlink(filePath);
        console.log("File deleted successfully");
    }
    catch(error){
        console.log("Error deleting file:", error.message);
    }
}
// readFolder();
// writeFileExample();
// readFileExample();
// appendFileExample();
// readFileExample();
// deleteFileExample();
deleteFileExample();