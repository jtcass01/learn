var http = require('http');

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');

  response.on('data', function(chunk){
    console.log(chunk);
  });

  response.on('error', function(e){
    console.log("Got error from response: " + e.message);
  });

}).on('error', function(e){
  console.log("Got error from get: " + e.message);
});
