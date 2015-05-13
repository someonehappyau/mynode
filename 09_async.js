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
			
		response.on('data', function(data){
			mystream.append(data.toString());
			//console.log(data.toString());
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


function print(result,count){
	if (count===0){
		for(var i=0;i<3;i++){
			console.log(result[i]);
		}
	}
}

var count=3;
var result=['','',''];

getIt(process.argv[2],function(data){
	result[0]=data;
	count--;
	print(result,count);
//	console.log('2');
//	console.log(count);	
//	console.log(data);
});
getIt(process.argv[3],function(data){
	result[1]=data;
	count--;
	print(result,count);
//	console.log('3');
//	console.log(count);	
//	console.log(data);
});
getIt(process.argv[4],function(data){
	result[2]=data;
	count--;
	print(result,count);
//	console.log('4');
//	console.log(count);	
//	console.log(data);
});



