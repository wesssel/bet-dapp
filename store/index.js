import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import mainAccount from './modules/mainAccount'

const store = {
  actions,
  getters,
  mutations,
  state,
  modules: {
    mainAccount,
  },
}

export default () => (new Vuex.Store(store))
