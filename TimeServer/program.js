var net = require('net');

function checkZero(num, newChar){
  if(typeof num !== 'string'){
    num = String(num);
  }

  if(num.length === 1) {
    return newChar + num;
  } else {
    return num;
  }
}

var server = net.createServer(function listener(socket){
  // socket handling logic
  var date = new Date(), dateString = "";

  dateString += date.getFullYear() + "-";
  dateString += checkZero(date.getMonth() + 1, '0') + '-';
  dateString += checkZero(date.getDate(), '0') + ' ';
  dateString += checkZero(date.getHours(), '0') + ':';
  dateString += checkZero(date.getMinutes(), '0') + '\n';

  socket.end(dateString);
});

server.listen(process.argv[2]);
