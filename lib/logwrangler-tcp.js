var net = require('net');
var _ = require('lodash');

var logwranglerTcp = function(handlerOptions){
	handlerOptions = _.extend({
		host: 'localhost',
		port: 9999
	}, handlerOptions);

	var connected = false;
	var client;

	try {
		client = net.connect(handlerOptions, function(){
			connected = true;
		});

		client.on('end', function(){
			connected = false;
			console.log('client disconnected from server');
		});

		client.on('error', function(err){
			connected = false;
			console.log('error connecting to remote server', err);
		});
	} catch(e){
		console.log(e);
	}

	return function(options, data){
		if(!connected){
			console.log('client not connected to server');
			return;
		}

		data = data || {};
		client.write(JSON.stringify(data));
	};
};

module.exports = logwranglerTcp;