const MainAccount = artifacts.require('MainAccount')
const { MAIN_ACCOUNT_ADDRESS } = require('../config')

contract('MainAccount', (accounts) => {
  // wrote this test to check if contract can deploy
  it('deployed contract abi to be set', () => (
    MainAccount
      .deployed()
      .then((instance) => {
        assert.equal(instance.abi !== undefined, true, 'MainAccount abi is not deployed')
      })
  ))

  // wrote this test to check if main account is same in config
  it('getMainAccount to return config main account address', () => (
    MainAccount
      .deployed()
      .then(instance => instance.getMainAccount.call())
      .then((mainAccount) => {
        assert.equal(mainAccount, MAIN_ACCOUNT_ADDRESS.toLowerCase(), 'Config main account is not returned')
      })
  ))

  // wrote this test to check if account is in mock accounts
  it('getMainAccount to return a account that is in accounts', () => {
    MainAccount
      .deployed()
      .then(instance => instance.getMainAccount.call())
      .then((mainAccount) => {
        assert.equal(accounts.includes(mainAccount), true, 'Main account is not in accounts')
      })
  })

  // wrote this test to check if balance is returning the big number lib function
  it('getMainAccountBalance to return big number array', () => {
    MainAccount
      .deployed()
      .then(instance => instance.getMainAccountBalance.call())
      .then((balance) => {
        assert.equal(Object.keys(balance).length === 3, true, 'Balance is not big number')
      })
  })

  // wrote this test to check if the balance of main account is same as mocked
  it('getMainAccountBalance to return balance of main account', () => {
    MainAccount
      .deployed()
      .then(instance => instance.getMainAccountBalance.call())
      .then((balance) => {
        assert.equal(balance.toNumber(), '100000000000000000000', 'Balance is incorrect')
      })
  })
})
