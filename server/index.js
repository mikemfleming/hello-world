'use strict';

const Hapi = require('hapi');

exports.listen = (port) => {
  const server = new Hapi.Server();
  server.connection({ port: port, host: 'localhost' });

  server.start((err) => {
    if (err) throw err;
    console.log(`hapi is listening on: ${server.info.uri}`);
  });
};
