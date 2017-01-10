var fs = require('fs'), path = process.argv[2], fileText = "";


fs.readFile(path, function read(err, data) {
    if(err) {
      console.log(err);
      throw err;
    }

    fileText = data.toString().split("\n");
    console.log(fileText.length-1);

});
