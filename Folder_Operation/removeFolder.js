//Remove Folder
const fs = require('node:fs');
let dir = './Demo';
fs.rmdir(dir, err => {
  if (err) {
    throw err;
  }

  console.log(`${dir} is deleted!`);
});