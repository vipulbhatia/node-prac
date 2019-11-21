const express = require('express'),
    app = express(),
    http = require('http'),
    bodyParser = require('body-parser');

/*app.use(bodyParser.urlencoded({ extended: false }));

app.get('/data/:data', async (req, res) => {
    const { data } = req.params;
    console.log(`${process.pid}`);
    res.json({ response: `${data} handled by worker ${process.pid}` });
});*/

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(`handled by ${process.pid}`);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(`{ message: handled by worker ${process.pid} }`);
});

process.on('message', (msg, s) => {
    console.log(`${process.pid}: ${msg}`);
    server.listen(s);
});
