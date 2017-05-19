// Load the 'http' module
const http = require('http');
// 함수 Prototype : http.createServer(Function).listen(3000);
// Use the 'http' module to create a new web server
http.createServer((req, res) => {
	// Use the 'response' object to write the 'content-type' response header

	res.writeHead(200, {
		'Content-Type': 'text/plain; charset=UTF-8'
	});

	// Use the 'response' object to write a response body and end the request
	res.end('안녕 Node');
}).listen(3000);





// Log the server status to the console
console.log('Server running at http://localhost:3000/');