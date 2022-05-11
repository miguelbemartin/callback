var http = require('http');

http.createServer(function (req, res) {


  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
      console.log(body);
      res.end('ok');
    });
  }


  console.log('Received '+ req.method + ' request');
  res.end();

}).listen(8084);
