var http=require('http');

var server=http.createServer(function(request, response){
	var fs=require('fs');
	var stream=fs.createReadStream(process.argv[3]);
	stream.pipe(response);
	response.end();
});

server.listen(process.argv[2]);
