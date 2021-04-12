////with request
// var request = require('request');

// request('https://www.google.co.in/', function(err, res, body) {
//     console.log(body);
// })







///// without request 



const fetch = require('node-fetch');

fetch('https://www.google.co.in/')
    .then(res => res.text())

.then(body => console.log(body));