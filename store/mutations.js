export default {
  SET_FIXTURES(state, { fixtures }) {
    state.fixtures = fixtures
  },

  SET_FIXTURE_ODDS(state, { fixtureId, odds }) {
    state.fixtures.find(f => f.id === fixtureId).odds = odds
  },
}
