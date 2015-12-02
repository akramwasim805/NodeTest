var http = require('http');
http.createServer(function(req,res) {
//send http header
//HTTP Status 200:OK

    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Hello World\n');

}).listen(8081);

console.log('server running at 8081');


