var Conversion = require('transformer-conversion');
var tBase64 = require('transformer.base64');
var tBuffer = require('transformer.buffer');
// require any other modules you may need here.

module.exports = Conversion(tBase64, tBuffer, convert);

function convert(input) {
  return new Buffer(input, 'base64');
}
