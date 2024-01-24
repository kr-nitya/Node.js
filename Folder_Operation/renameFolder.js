//Rename folder
const fs = require('node:fs');
fs.rename('./Test123','./Demo',err=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Folder Name Changed");
    }
})