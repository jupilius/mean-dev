// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the 'express' module
// ./config/express.js 파일
const configureExpress = require('./config/express');

// Create a new Express application instance
const app = configureExpress();

// Use the Express application instance to listen to the '3000' port
app.listen(3000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
// 다른 곳에서 쓸 수 있도록 module.exports 에 넣는다.
module.exports = app;