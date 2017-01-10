var commandLine = [], sum = 0

commandLine = process.argv

for(var commandLine_i = 2; commandLine_i < commandLine.length; commandLine_i++){
  sum += Number(commandLine[commandLine_i])
}

console.log(sum)
