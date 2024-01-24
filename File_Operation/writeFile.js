//Write File
const fs = require('node:fs');
let content = "Adding data from Node";
fs.writeFile('data.txt',content,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Content Added Sucessfully");
    } 
});