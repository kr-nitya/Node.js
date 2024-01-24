//Appending the content
const fs = require('node:fs');
const content = ' Some content Appended';
fs.appendFile('data.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // done!
  }
});