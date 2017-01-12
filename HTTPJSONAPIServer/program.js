var http = require('http');
var url = require('url');


function parseTime(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}


function unixTime(time){
  return { unixtime : time.getTime() };
}


var server = http.createServer(function callback(request, response){
// request handling logic
  var urlObject = url.parse(request.url, true);
  var time = new Date(urlObject.query.iso);
  var timeObject;

  switch(urlObject.pathname){
    case "/api/parsetime":
      timeObject = parseTime(time);
      break;
    case "/api/unixtime":
      timeObject = unixTime(time);
      break;
  }

  if(timeObject){
    response.writeHead(200, {'Content-type': 'application/json'});
    response.end(JSON.stringify(timeObject));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(process.argv[2]);
