'use strict';

const Web3 = require('web3');

module.exports = app => {
  app.config.coreMiddleware.unshift('jwtErrorHandler');
  app.web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
};
