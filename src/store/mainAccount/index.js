import truffleContract from 'truffle-contract'
import MainAccount from '../../../build/contracts/MainAccount.json'
import { logger } from '../../utils/logger'

const contract = truffleContract(MainAccount)

export default {
  state: {
    balance: null,
  },
  actions: {
    async LOAD_MAIN_ACCOUNT_BALANCE({ commit }) {
      contract
        .setProvider(this.$web3.currentProvider)

      contract
        .deployed()
        .then(instance => instance.balanceOfMain.call())
        .then((balance) => {
          commit('SET_MAIN_BALANCE', { balance })
        })
        .catch(e => logger(e, 'balance error'))
    },
  },
  mutations: {
    SET_MAIN_BALANCE(state, { balance }) {
      state.balance = balance
    },
  },
  getters: {
    mainAccountBalanceEther(state) {
      return state.balance ? web3.fromWei(state.balance.toNumber(), 'ether') : null
    },
  },
}
