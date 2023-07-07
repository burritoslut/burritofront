const { override } = require('customize-cra');

module.exports = override(
  function overrideHashFunction(config) {
    config.output = {
      ...config.output,
      hashFunction: 'xxhash64',
    };
    return config;
  }
);
