const http = require('http'),
    { fork } = require('child_process');

const TOTAL_WORKERS = 2,
    workers = [];
    server = http.createServer();

server.listen(8002, () => console.log('running on port 8002'));

for(i=0; i<TOTAL_WORKERS; i++) {
    workers[i] = fork('./worker.js');
    workers[i].send('serverHandle', server._handle);
}
