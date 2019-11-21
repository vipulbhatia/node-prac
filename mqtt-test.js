var mqtt = require('mqtt');
var express = require('express');
var app = express();
var morgan = require('morgan');

//app.use(morgan('dev'));
//app.get('/send-mqtt', (req, res) => {

const client = mqtt.connect('mqtts://devmqtt.obotworld-deviceplatform.com:8883', {
	username: 'esi-user',
	password: 'ZnA00LK88tahDiS2QOS1nyXsBGJQ31rOih',
	connectTimeout: 10
});

client.on('connect', () => {
	console.log('connected');
	client.publish('test1', 'hello', {}, (err) => {
		if(err) throw err;
		client.end(false, {}, () => {
			console.log('closed');
			//res.status(200).end('sent');
		});
		console.log('after end');
	});
});

client.on('error', (err) => {
	console.log('error:', err);
});

client.on('end', () => {
	console.log('ended');
});
//});

//app.listen(8000, () => console.log('port 8000'));
