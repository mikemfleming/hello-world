'use strict';

const http = require('http');

exports.listen = function (port) {

  // create a new EventEmitter object
  const server = http.createServer();

  // attach a req listener
  server.on('request', function (request, response) {
    const { headers, method, url } = request;
    let body = [];
    // request has a stream on it we can listen to
    request.on('error', function (error) {
      console.log(error);
    }).on('data', function (chunk) {
      body.push(chunk);
    }).on('end', function () {
      body = Buffer.concat(body).toString();

      response.on('error', function (error) {
        console.log(error);
      });

      response.writeHead(200, { 'content-type': 'application/json'});

      const responseBody = { headers, method, url, body };

      response.end(JSON.stringify(responseBody, null, 4) + '\n');
    });
  });

  server.listen(port, function () {
    console.log(`node is listening on ${port}`);
  });
};
