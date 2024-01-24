//Path
const path = require('node:path');
const file1 = 'data.txt';
console.log("Directory = ",path.dirname(file1));
console.log("File Name = ",path.basename(file1));
console.log("File Extension = ",path.extname(file1));
console.log("Only File name = ",path.basename(file1, path.extname(file1)));
//File Descriptor
const fs = require('node:fs');
try {
  const fd = fs.openSync('data.txt', 'r');
  console.log(fd);//Here fd is just a unique number assign by the system

} catch (err) {
  console.error(err);
}