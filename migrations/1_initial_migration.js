/* eslint-disable */

const TalentCoin = artifacts.require("TalentCoin");

module.exports = function(deployer) {
  deployer.deploy(TalentCoin, "TTC", "TTC");
};
