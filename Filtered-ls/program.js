var fs = require('fs'), path = process.argv[2], fileType = ("." + process.argv[3]);

fs.readdir(path, function read(err, list) {
    if(err) {
      console.log(err);
      throw err;
    }

    for(var list_i = 0; list_i < list.length; list_i++){
      if(list[list_i].substring(list[list_i].length-fileType.length) === fileType ){
        console.log(list[list_i]);
      }
    }
});
