var http = require('http'), data = [], message = "";

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');

  response.on('data', function(chunk){
    data.push(chunk);
  });

  response.on('end', function(){
    for(var data_i = 0; data_i < data.length; data_i++){
        message += data[data_i];
    }
    console.log(message.length);
    console.log(message);
  });

  response.on('error', function(e){
    console.log("Got error from response: " + e.message);
  });

}).on('error', function(e){
  console.log("Got error from get: " + e.message);
});
