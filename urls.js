const fs = require('fs');
const process = require('process');
const axios = require('axios');

let arg = process.argv;

async function writeContent(url){
    try {
        let res = await axios.get(url);
        let name = url.split('/');
        fs.writeFile(`./urls/${name[2]}`, res.data, err => {
            if (err) {
                console.error(err);
            }
        });
    }   catch (err){
        console.error(`could not retrieve ${url}`)
    }

}

function handleUrls(str){
    let urls = str.split(/\r?\n/);
    for(let i=0; i<urls.length-1; i++){
        writeContent(urls[i]);
        console.log(urls[i]);
    }
}

function htmlScraper(fileName){
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err){
            console.error(`could not read ${fileName}`);
            process.exit();
        } else {
            handleUrls(data);
        }
    });
}

htmlScraper(arg[2]);