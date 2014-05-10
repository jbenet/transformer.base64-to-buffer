var transformer = require('dat-transformer');
var tBase64 = transformer('base64');
var tBuffer = transformer('buffer');
// require any other modules you may need here.

module.exports = transformer.Conversion(tBase64, tBuffer, convert);

function convert(input) {
  return new Buffer(input, 'base64');
}
