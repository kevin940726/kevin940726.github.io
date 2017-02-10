const fs = require('fs');
const gm = require('gm');

module.exports = function (content) {
  this.cacheable && this.cacheable(); // eslint-disable-line no-unused-expressions

  const callback = this.async();

  const stream = fs.createReadStream(content);

  gm(stream)
    .autoOrient()
    .stream(function (err, stdout) {
      callback(err, stdout);
    });
};
