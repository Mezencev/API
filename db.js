/*const http = require('http').createServer().listen(8080);
const fs = require('fs');
http.on('request', (req, res)=>{
    res.writeHead(200);
    let new_file = fs.createWriteStream('text_1.txt');
    //req.pipe(new_file);
    req.on('data', (txt)=>{
        txt = 'new: ' + txt;
        new_file.write(txt);
    })
    req.on('end',()=>{
        res.end('UPLOADED');
    })
})

const http = require('http');
http.createServer((req, res)=>{
    console.log('lisening...')
    res.writeHead(200);
    req.on('data', (data)=>{
        console.log('req: ', data.toString());
        res.write('res: ' + data.toString());
    })
    req.on('end', ()=>{
        console.log('The end');
    })
}).listen(8080);*/
const file = require('./get_file');
const msg = require('./log');
msg.warm('hello');
msg.info('very_good');
msg.error('no_promlem');

