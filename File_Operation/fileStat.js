//File Operation
const fs = require("node:fs");
fs.stat("data.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Is File = ", stats.isFile());
  console.log("Is Directory = ", stats.isDirectory());
  console.log("Is Symbolic link = ", stats.isSymbolicLink());
  console.log("Size of the file = ", stats.size);
});