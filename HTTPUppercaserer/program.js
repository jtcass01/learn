var http = require('http');
var map = require('through2-map');

var server = http.createServer(function callback(request, response){
// request handling logic
  if(request.method !== "POST"){
    return response.end("POST please");
  }

  request.pipe(map(function (dataChunk){
    return dataChunk.toString().toUpperCase();
  })).pipe(response);
});

server.listen(process.argv[2]);
