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
    let total = 0
    getters.betFixtures.forEach((bf) => {
      total += bf.fixture.odds.matchWin[bf.bet.side]
    })
    return total
  },

  totalPotential(state, getters) {
    return state.betAmount * getters.totalOdds
  },
}
