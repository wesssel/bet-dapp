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
}
