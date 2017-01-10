var fs = require('fs'), path = process.argv[2], fileText = ""

fileText = fs.readFileSync(path).toString()

fileText = fileText.split("\n")

console.log(fileText.length-1)
