var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('olá Node!!!');
}).listen(8080);
console.log('servidor rodando em  http://localhost:8080/');