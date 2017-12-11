// Lab_1
const http = require('http');
const fs = require('fs');
let file = fs.readFileSync('index.html');

let app = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Hello, this is Tolik ' + decodeURIComponent(file));
    res.end();
    
}).listen(8080);
console.log('listening on port 8080');