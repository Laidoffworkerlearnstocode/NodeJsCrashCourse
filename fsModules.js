const fs = require('fs/promises');
const path = require('path');

const filePath1 = path.resolve(__dirname, 'content', '2nd.txt');
data = '\nThis is the new data';



async function readAndWrite(_filePath) {
    const text = await fs.readFile(_filePath, 'utf8');
    console.log(text);
    await fs.writeFile(_filePath, data , {flag: 'a'});
    const newText = await fs.readFile(_filePath, 'utf8');
    console.log(newText);
}

readAndWrite(filePath1);