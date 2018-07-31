import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const store = {
  actions,
  getters,
  mutations,
  state,
}

export default () => (new Vuex.Store(store))
