var createParams = require('./src/utils.js').createParams

module.exports = createParams({
  blockchain: require('./src/blockchain.js'),
  net: {}
}, false)
