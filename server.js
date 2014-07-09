var fs = require('fs');
var http = require('http');
var Twit = require('twit');
var keys = require('./apikeys')

   var T = new Twit(  keys  )

// tests if the tweets have images, then prints them out on the console
T.get('search/tweets', { q: 'foundersandcoders' }, function(err, data, response) {
  
  
	fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + 'data.json');
	    }
	});
  
});

http.createServer(function (request, response){
	fs.readFile("index.html", function (err, data) {
		response.writeHead(200, {"Content-Type": "text/html"})
		response.end(data)
	});
}).listen(8080)

