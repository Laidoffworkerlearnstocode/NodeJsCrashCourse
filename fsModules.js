const fs = require('fs');
const path = require('path');

const filePath1 = path.resolve(__dirname, 'content', '2nd.txt');



fs.readFile(filePath1, 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});