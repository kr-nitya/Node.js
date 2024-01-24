// Folder
// Create new folder using Node
const fs = require('node:fs');
const folderName = './Test123';
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}
//Get the content of the folder
// const fs = require('node:fs');
// const folderPath = './Test';
// console.log(fs.readdirSync(folderPath));