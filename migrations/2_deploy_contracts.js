const MainAccount = artifacts.require('MainAccount')
const BetSlips = artifacts.require('BetSlips')

module.exports = function (deployer) {
  deployer.deploy(MainAccount)
  deployer.deploy(BetSlips)
}
