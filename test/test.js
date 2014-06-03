var logwranglerTcp = require('../index');

require('./testServer');

var options = {
	host: 'localhost',
	port: 9998
};

var handler = new logwranglerTcp(options);

setTimeout(function(){

	handler({ test: 'foo' }, { data: 'bar'} );

}, 2000);

