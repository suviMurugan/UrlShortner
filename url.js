 var http = require('http');
 var fs   = require('fs');

 var server = http.createServer(function (request, response) {
   fs.readFile('./weblink.json','utf8',function outit(err,data){
	if(err){ console.log(err);}
	var x = JSON.parse(data);
	console.log(x[request.url]);
	response.writeHead(301,{"Location":x[request.url]});
	response.end();
   });
 });
 server.listen(8080);
