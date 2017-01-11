var fs = require('fs');

module.exports = function (dirName, fileExt, callback){
  fileExt = "." + fileExt;

  fs.readdir(dirName, function(err, list) {
    if(err){
      return callback(err);
    }

    list = list.filter(function(val){
      return val.substring(val.length-fileExt.length) === fileExt;
    });

    return callback(null, list);
  });
}
