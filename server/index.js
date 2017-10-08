'use strict';

const http = require('http');

exports.listen = function (port) {
  const server = http.createServer(function (req, res) {
    res.end('{ "hello": "world" }\n');
  });

  server.listen(port, function () {
    console.log(`node is listening on ${port}`);
  });
};
