'use strict';

const Web3 = require('web3');
const TalentCoin = require('./build/contracts/TalentCoin.json');

module.exports = app => {
  app.config.coreMiddleware.unshift('jwtErrorHandler');
  const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  app.web3 = web3;

  // deploy web3 contract
  web3.eth.net.getId()
    .then(id => {
      const talentCoin = new web3.eth.Contract(TalentCoin.abi, TalentCoin.networks[id].address);
      app.contract = talentCoin;
    });
};
