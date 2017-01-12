var http = require('http');

var server = http.createServer(function(request,response){
  var info = "";

  info += "Request URL: " + request.url + "\n";
  info += "Request type: " + request.method + "\n";
  info += "Request headers: " + JSON.stringify(request.headers) + "\n";

  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.end(info);
});

server.listen(1337);
