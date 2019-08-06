// Dependecies

const http = require('http');
const url = require('url');

// The server should respond to all requests with a string
const server = http.createServer((req, res) => {

    // Get the URL and parse it
    const parseUrl = url.parse(req.url, true);

    // Get the path 
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/ˆ\/+|\/+$/g, '');

    // Send the response
    res.end('Hello World\n');

    // Log the request path
    console.log('Request received on path: ' + trimmedPath);


})

// Start the server, and have it listen to port 3000
server.listen(3000, () => {
    console.log('The server is listening on port 3000');

})


