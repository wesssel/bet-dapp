export default {
  fixturesByDate(state) {
    return state.fixtures.sort((a, b) => (a.event_timestamp - b.event_timestamp))
  },

  betFixtures(state) {
    return state.bets.map(bet => ({
      bet,
      fixture: state.fixtures.find(f => f.id === bet.fixtureId),
    })) || []
  },

  betFixtureIds(state) {
    return state.bets.map(b => parseInt(b.fixtureId, 10))
  },

  betAmount(state) {
    return state.betAmount
  },

  betSides(state) {
    return state.bets.map((bet) => {
      switch (bet.side) {
      case 'home':
        return 1
      case 'draw':
        return 2
      case 'away':
        return 3
      default:
        return null
      }
    })
  },

  totalOdds(state, getters) {
    return getters.betFixtures.reduce((a, bf) => {
      const odds = bf.fixture.odds.matchWin[bf.bet.side]

      return odds * a
    }, 1)
  },

  totalPotential(state, getters) {
    return state.betAmount * getters.totalOdds
  },

  maxStakeEther(state, getters) {
    return getters.mainAccountBalanceEther / getters.totalOdds
  },

  currentAccount(state) {
    return state.currentAccount.toLowerCase()
  },

  currentUserIsMainAccount(state, getters) {
    return getters.mainAccount === getters.currentAccount
  },
}
