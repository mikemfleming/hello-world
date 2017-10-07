'use strict';

module.exports = function (fastify, options, next) {
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

  // this is middleware!
  next();
};
