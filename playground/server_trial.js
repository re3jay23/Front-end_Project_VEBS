var http = require('http');
var {handleRequest} = require('./app');
http.createServer(handleRequest).listen(8000);
