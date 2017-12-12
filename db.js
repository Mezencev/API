const http = require('http').createServer().listen(8080);
const fs = require('fs');
http.on('request', (req, res)=>{
    res.writeHead(200);
    let new_file = fs.createWriteStream('text_1.txt');
    req.pipe(new_file);
    req.on('end',()=>{
        res.end('UPLOADED');
    })
})
