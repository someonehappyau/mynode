var http=require('http');

var server=http.createServer(function(request,response){
	var url=require('url');
	var urlparam=url.parse(request.url,true);
	var date=new Date(urlparam.query.iso);	
	var output='';

	if (urlparam.pathname==='/api/parsetime'){
		output={hour:date.getHours(),minute:date.getMinutes(),second:date.getSeconds()};
		output=JSON.stringify(output);
	}
	else if (urlparam.pathname==='/api/unixtime'){
		output={unixtime:date.getTime()};
		output=JSON.stringify(output);
	}
	else{
		output='wrong api';
	}
	response.writeHead(200,{'Content-Type':'application/json'});
	response.write(output);
	response.end();
});

server.listen(process.argv[2]);
