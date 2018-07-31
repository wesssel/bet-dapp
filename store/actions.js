import { getFixturesByDate, getFixtureOdds } from '../utils/rest'
import { transformFixtures } from '../transformers/fixture'
import { transformOdds } from '../transformers/odds'

export default {
  async nuxtServerInit({ dispatch }) {
    await dispatch('LOAD_FIXTURES_OF_TODAY')
  },

  LOAD_FIXTURES_OF_TODAY({ commit }) {
    const now = new Date()

    getFixturesByDate(now)
      .then((rawFixtures) => {
        const fixtures = transformFixtures(rawFixtures)

        commit('SET_FIXTURES', { fixtures })
      })
  },

  LOAD_FIXTURE_ODS({ commit }, { fixtureId }) {
    getFixtureOdds(fixtureId)
      .then((rawOdds) => {
        const odds = transformOdds(rawOdds)

        commit('SET_FIXTURE_ODDS', { fixtureId, odds })
      })
  },
}
