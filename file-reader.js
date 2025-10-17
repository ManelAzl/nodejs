const fs = require('fs');

// Read from hello.txt (assuming it's the same as welcome.txt)
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});