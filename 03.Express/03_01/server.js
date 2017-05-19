// Load the 'express' module
const express = require('express');

// Create a new Express application instance
const app = express();

// use 함수의 첫번째 경로의 순서대로 처리한다.
// root 경로를 가장 마지막에 있어야 한다.
// hooking 될 수 있음.
app.use('/heroes', function(req, res) {
    // Use the 'response' object to send a respone
	let hero = [
		{
            id: 1,
            name: '똘이장군'
        },
        {
            id: 2,
            name: 'jupilius'
        }
	];
    res.json(hero); // json 형식으로 response 한다.
});

// Mount a new middleware function
app.use('/', function(req, res) {
    // Use the 'response' object to send a respone
    // text 형식으로 response 한다.
    res.send('안녕');
});
// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;