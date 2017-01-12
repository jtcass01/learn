var http = require('http');
var fs = require('fs');

var server = http.createServer(function callback(request, response){
  // request handling logic
  var readStream = fs.createReadStream(process.argv[3]);
  readStream.pipe(response);
});

server.listen(process.argv[2]);
