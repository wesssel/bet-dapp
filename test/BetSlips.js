const BetSlips = artifacts.require('BetSlips')

const mock = {
  fixtureIds: [12345, 6789],
  sides: [1, 3],
  amount: 10000000,
  odd: 5230000000,
}

contract('BetSlips', (accounts) => {
  // wrote this test to check if contract can deploy
  it('deployed contract abi to be set', () => (
    BetSlips
      .deployed()
      .then((instance) => {
        assert.equal(instance.abi !== undefined, true, 'BetSlips abi is not deployed')
      })
  ))

  // wrote this test to check if adding bet slip works
  it('addBetSlip to return receipt if success', () => (
    BetSlips
      .deployed()
      .then(instance => instance.addBetSlip(mock.fixtureIds, mock.sides, mock.amount, mock.odd))
      .then((result) => {
        assert.equal(Object.keys(result.receipt).length > 0, true, 'Did not return receipt')
      })
  ))

  // wrote this test to test failure of wrong params
  it('addBetSlip to return error if params are incorrect', () => (
    BetSlips
      .deployed()
      .then(instance => instance.addBetSlip())
      .catch((result) => {
        assert.equal(result instanceof Error, true, 'Did not return error')
      })
  ))

  // wrote this test to check if betslip count is correct
  it('betSlipsCount to bet correct', () => (
    BetSlips
      .deployed()
      .then(instance => instance.betSlipsCount.call())
      .then((result) => {
        // count is 1 because first test adds betSlip
        assert.equal(result, 1, 'Count is not correct')
      })
  ))

  // wrote this test to see if getBetSlip returns correct bet
  it('getBetSlip to return mock bet slip', () => (
    BetSlips
      .deployed()
      .then(instance => instance.getBetSlip(1))
      .then((result) => {
        assert.equal(result[0], accounts[0], 'Bet slip account is incorrect')
        assert.equal(result[1].toNumber(), mock.amount, 'Amount is incorrect')
        assert.equal(result[2].toNumber(), mock.odd, 'Odd is incorrect')
        assert.equal(result[3].toString(), mock.fixtureIds.toString(), 'Fixture Ids are incorrect')
        assert.equal(result[4].toString(), mock.sides.toString(), 'Sides are incorrect')
      })
  ))
})
