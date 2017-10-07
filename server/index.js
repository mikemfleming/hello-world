'use strict';

// create a new app
const fastify = require('fastify')();

exports.listen = function (port) {

  const options = {
    something: true,
  };

  // register multiple routes (fastify uses them like middleware)
  fastify.register([
    require('./route'),
  ], options, function (err) {
    if (err) throw err;
  });

  fastify.listen(port, function (err) {
    if (err) throw err;
    console.log(`fastify listening on ${fastify.server.address().port}`);
  });
};
