var http = require('http');
//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  console.log("Connection Sucessfully Done");
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080


//Accessing process.env
//node --env-file=process.env server.js ==>Run this code for output
//console.log(process.env.PORT);
//REPL 
// const repl = require('node:repl');
// repl.start();

//Input from Command line
// const readline = require('node:readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
  
//   readline.question(`What's your name? : `, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//   });