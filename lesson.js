// Lab_1
/*const http = require('http');
const fs = require('fs');
let file = fs.readFileSync('index.html');
let app = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('Hello, this is Tolik ' + decodeURIComponent(file));
    res.end();  
}).listen(8080);
console.log('listening on port 8080');

//Lab_2
const http = require('http');
const add = http.createServer().listen(8080);
add.on('request', (req, res)=>{
    if(req.url == '/stop'){
        add.close();
    }
    res.writeHead(200);
    res.write('Hello from Node.js');
    res.end();
})
add.on('request', (req, res)=>{
    console.log(req.method, req.url, res.statusCode);
})
add.on('connection', (req, res)=>{
    console.log('Connect..');
})
add.on('close', (req, res)=>{
    console.log('The end');
})
add.on('listening', (req, res)=>{
    console.log('listen: port 8080..');
})*/
//lab_3
const events = require('events').EventEmitter;
const logger = new events;
let users = [], msgs = [];
logger.on('login', (name)=>{
    console.log('new User: ', name);
    users.push(name);
})
logger.on('message', (msg)=>{
    console.log('new message: ', msg);
    msgs.push(msg);
})
logger.emit('login', 'Tolik');
logger.emit('message', 'hello my name ' + users);

