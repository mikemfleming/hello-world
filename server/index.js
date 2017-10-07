'use strict';

const Hapi = require('hapi');

exports.listen = (port) => {
  // create a new hapi server object
  const server = new Hapi.Server();

  // add a connection to the server
  server.connection({ port: port, host: 'localhost' });

  // add routes
  server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
      reply(`Hello, ${encodeURIComponent(request.params.name)}!\n`);
    }
  });

  // start the server
  server.start((err) => {
    if (err) throw err;
    console.log(`hapi is listening on: ${server.info.uri}`);
  });
};
