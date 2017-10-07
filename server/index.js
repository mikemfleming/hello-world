'use strict';

const http = require('http');
const router = require('find-my-way')();

exports.listen = (port) => {
  router.on('GET', '/', (req, res, params) => {
    res.end('{ "message": "hello world! 🎃" }\n');
  });

  const server = http.createServer((req, res) => {
    router.lookup(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
};
