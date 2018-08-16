export default {
  SET_FIXTURES(state, { fixtures }) {
    state.fixtures = fixtures
  },

  SET_FIXTURE_ODDS(state, { fixtureId, odds }) {
    state.fixtures.find(f => f.id === fixtureId).odds = odds
  },

  ADD_BET(state, { fixtureId, side }) {
    if (state.bets.find(b => b.fixtureId === fixtureId)) {
      state.bets.splice(state.bets.findIndex(b => b.fixtureId === fixtureId), 1)
    }

    state.bets.push({ fixtureId, side })
  },

  REMOVE_BET(state, { fixtureId }) {
    state.bets.splice(state.bets.findIndex(b => b.fixtureId === fixtureId), 1)
  },

  SET_BET_AMOUNT(state, { betAmount }) {
    state.betAmount = betAmount
  },

  SET_CURRENT_ACCOUNT(state, { currentAccount }) {
    state.currentAccount = currentAccount
  },
}
