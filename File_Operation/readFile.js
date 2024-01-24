//Reading File
const fs = require('node:fs');
fs.readFile('data.txt','utf8',(err,data)=>{
    if(err)
    {
        console.log(err);
        return
    }
    else{
        console.log(data);

    }
});
//synchronous version file read
// const fs = require("node:fs");
// try {
//   const data = fs.readFileSync("data.txt", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }
//promise-based reading file
// const fs = require('node:fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('data.txt', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();
