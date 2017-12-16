const request = require('request');

let apiKey = '0e25872b1acc4a2132c42b338bab5412';
let city = 'London';
//let url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5fda05696f9db3c29f343e48b0eb9489';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//это урл немногонеба
//let url = 'https://api.darksky.net/forecast/0d0e4ed5620acca00ff169aa7620bdca/37.8267,-122.4233'
request(url, (err, req, body)=>{
    if(err){
        console.log('error: ', err);
    }
    else{
         console.log('body:', body);
    }
})

