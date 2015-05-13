
function getIt(url, callback)
{
	var http=require('http');
	var bl=require('bl');
	var mystream=new bl();

	http.get(url, function(response){
//		response.pipe(bl(function(err,data){
//			if (err){
//				console.log(err);
//				return;
//			}
//			s=data;
//		}));
			
		response.setEncoding('utf8');
		response.on('data', function(data){
			mystream.append(data.toString());
			console.log(data.toString());
		});
		response.on('error',function(err){
			console.log(err);
		});
		response.on('end',function(data){
			s=mystream.toString();
			//console.log('end');
			callback(mystream.toString());
		});
	});
}


getIt(process.argv[2],function(data){
		//console.log(data.length);
		//console.log(data);
});
