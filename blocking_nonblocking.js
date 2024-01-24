// Blocking and Non - blocking behaviour

// Blocking
const fs = require("node:fs");
const data = fs.readFileSync("data.txt"); // blocks here until file is read
console.log(data);
console.log("Blocking");

// Nonblocking
const fs = require("node:fs");
fs.readFile("data.txt", (err, data) => {
  if (err) throw err;
  else console.log(data);
});
console.log("Non Blocking");
//setTimeout
setTimeout(()=>{
    console.log("Hello After 2 second");
},2000);
//setInterval
setInterval(()=>{
    console.log("Hello in Interval ");
},1000);
