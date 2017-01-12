var http = require('http');

var server = http.createServer(function(request,response){
  switch(request.url){
    case "/":
      response.writeHead(200, {"Content-type" : "text/html"});
      response.end("Welcome to the homepage!");
      break;
    case "/about":
      response.writeHead(200, {"Content-type" : "text/html"});
      response.end("Welcome to the about page!");
      break;
    default:
      response.writeHead(404, { "Content-type" : "text/plain" });
      response.end("404 error! File not found.");
      break;
  }
});

server.listen(1337);
