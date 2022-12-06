const app = require('./src/routes/app');
const http = require('http');

const server = http.createServer(app);
const port = '3000';

server.listen(port, () => {
    console.log('running at port', port);
});