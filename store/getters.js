export default {
  fixturesByDate(state) {
    return state.fixtures.sort((a, b) => (a.event_timestamp - b.event_timestamp))
  },
}
