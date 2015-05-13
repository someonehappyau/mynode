var net=require('net');
var server=net.createServer(function(socket){
	var strftime=require('strftime');
	socket.end(strftime('%F %R'));

});

server.listen(process.argv[2]);
//console.log(strftime('%F %R'));
