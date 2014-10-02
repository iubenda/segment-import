/**
 * Segment helper library.
 */

(function() {
  var request = require('request');
  var path = 'https://api.segment.io/v1/import/';

  module.exports = {
    batchImport: function batchImport(writeKey, batch, fn) {
      var auth = {
        username: writeKey || '',
        password: ''
      };
      var opts = {
        uri: path,
        method: 'POST',
        timeout: 50000,
        followRedirect: true,
        maxRedirects: 10,
        auth: auth
      };
      request(opts, fn);
    }
  };

}());