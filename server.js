const app = require('./src/routes/app');
const http = require('http');

const server = http.createServer(app);
const PORT = 3001;

server.listen(PORT, () => {
    console.log('running at port:', PORT);
});