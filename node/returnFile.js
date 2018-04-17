var http = require("http"),
	port = process.argv[2] || 3000,
	fs = require('fs'),
	server; 
server = http.createServer(function (request, response) {
	filename = request.url.substr(1)
	console.log("filename:"+filename)
	if(request.method == "GET"){
		fs.readFile(filename, function(err, data){
			if(err){
				response.end("the file does not exist", "utf8");
			}
			else{
				fs.createReadStream(filename).pipe(response)
			}
		})
	}

})
		
server.listen(port);
	