import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import mainAccount from './mainAccount'
import bet from './bet'

const store = {
  actions,
  getters,
  mutations,
  state,
  modules: {
    mainAccount,
    bet,
  },
}

export default () => (new Vuex.Store(store))
