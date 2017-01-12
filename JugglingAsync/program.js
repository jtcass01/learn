var bl = require('bl'), http = require('http'), results = [], urlCount = 3, endCount = 0;

function displayData(){
  for(var results_i = 0; results_i < urlCount; results_i++){
    console.log(results[results_i]);
  }
}

function performGet(index) {
  http.get(process.argv[index+2], function(response){
    response.pipe(bl(function(e, data) {
      if(e){
        return console.error(e);
      }

      results[index] = data.toString();
      endCount++;

      if(endCount == 3) {
        displayData();
      }
    }));
  });
}

for(var index = 0; index < urlCount; index++){
  performGet(index);
}
