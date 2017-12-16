const request = require('request');
const argv = require('yargs').argv;

let apiKey = '0e25872b1acc4a2132c42b338bab5412';
let city = argv.c || 'Kyiv';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//это урл темногонеба
//let url = 'https://api.darksky.net/forecast/0d0e4ed5620acca00ff169aa7620bdca/37.8267,-122.4233'
request(url, (err, req, body)=>{
    if(err){
        console.log('error: ', err);
    }
    else{
        let weathers = JSON.parse(body);
        let message = `It is ${weathers.main.temp} degress in ${weathers.name} !`; 
        console.log (message);
    }
})

