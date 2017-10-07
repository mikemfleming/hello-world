'use strict';

const fastify = require('fastify')();

exports.listen = (port) => {
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

  fastify.get('/', schema, (req, reply) => {
    reply.send({ hello: 'world' });
  });

  fastify.listen(port, (err) => {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
  });
};
