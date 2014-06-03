var net = require('net');

var server = net.createServer(function(socket){

	socket.on('data', function(data){
		console.log('got data from client');
		console.log(data.toString());
	});
});

server.listen(9999, function(){
	console.log('test server listening on port 9999');
});