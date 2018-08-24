const MainAccount = artifacts.require('MainAccount')
const BetSlips = artifacts.require('BetSlips')
const { MAIN_ACCOUNT_ADDRESS } = require('../config')

module.exports = function (deployer) {
  deployer.deploy(MainAccount, MAIN_ACCOUNT_ADDRESS)
  deployer.deploy(BetSlips)
}
