'use strict';

// create a new app
const fastify = require('fastify')();

exports.listen = (port) => {
  // use json schema (ajv) to speed up serialization of app's output
  const schema = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            hello: {
              type: 'string'
            }
          }
        }
      }
    }
  };

  // declare a route with an output schema
  fastify.get('/', schema, (req, reply) => {
    reply.send({ hello: 'world' });
  });

  fastify.listen(port, (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
  });
};
