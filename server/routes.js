const fs = require('fs');
const path = require('path');

module.exports = function (fastify, options, next) {
  fastify.get('/', function (req, reply) {
    const stream = fs.createReadStream(path.join(__dirname, '../client/index.html'));
    reply.type('text/html').send(stream);
  });

  fastify.get('/app.js', function (req, reply) {
    const stream = fs.createReadStream(path.join(__dirname, '../app.js'));
    reply.type('javascript').send(stream);
  });

  next();
};
