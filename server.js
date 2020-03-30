const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json')
const port = process.env.PORT || 5001;

server.use('/api', router);

server.listen(port, () => {
    console.log('Executando JSON Server')
})

module.exports = server;