const fs = require('fs');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Enter Folder name: `, name => {
    const path = name != ''? name : "Sample Code Snippets";
    rl.question(`Enter Project name: `, name => {
        const folder = name != ''? name : "project1";
        fs.mkdirSync( `${path}/${folder}`);
        fs.writeFileSync(`${path}/${folder}/index.html`,'');
        fs.writeFileSync(`${path}/${folder}/styles.css`,'');
        fs.writeFileSync(`${path}/${folder}/app.js`,'');
        rl.close();
    });
});