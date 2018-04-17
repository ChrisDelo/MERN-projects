var http = require("http"),
	port = process.argv[2],
	fs = require('fs'),
	server; 
server = http.createServer(function (request, response) {
	console.log(request.url)
	if(request.method == "GET"){
		fs.readFile('./index.html', function(err, data){
			if(err){
				console.log("err"); 
				response.write("err", "utf8");
			}
			else{
				console.log("test")
				fs.createReadStream('./index.html').pipe(response)
			}
		})
	}

})
		
server.listen(port);
	

 