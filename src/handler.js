'use strict';
const response = require('./factory/responses/httpFactory');

module.exports.hello = async event => {
  return response.response({
    message: 'Essas são variáveis',
    body: JSON.parse(event.body),
    path: event.pathParameters,
    query: event.queryStringParameters
  }, 200);
};
