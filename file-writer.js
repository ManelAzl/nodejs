const fs = require('fs');

// Create welcome.txt with "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('welcome.txt created successfully!');
});