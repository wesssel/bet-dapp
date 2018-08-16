import truffleContract from 'truffle-contract'
import MainAccount from '../../../build/contracts/MainAccount.json'
import { logger } from '../../utils/logger'

const contract = truffleContract(MainAccount)

export default {
  state: {
    account: '',
    balance: null,
  },
  actions: {
    async LOAD_MAIN_ACCOUNT_BALANCE({ commit }) {
      contract
        .setProvider(this.$web3.currentProvider)

      const instance = await contract.deployed()


      instance.getMainAccountBalance
        .call()
        .then((balance) => {
          commit('SET_MAIN_BALANCE', { balance })
        })
        .catch(e => logger(e, 'balance error'))
    },
    async LOAD_MAIN_ACCOUNT({ commit }) {
      contract
        .setProvider(this.$web3.currentProvider)

      const instance = await contract.deployed()

      instance.mainAccount
        .call()
        .then((account) => {
          commit('SET_MAIN_ACCOUNT', { account })
        })
        .catch(e => logger(e, 'mainAccount get error'))
    },
  },
  mutations: {
    SET_MAIN_ACCOUNT(state, { account }) {
      state.account = account
    },
    SET_MAIN_BALANCE(state, { balance }) {
      state.balance = balance
    },
  },
  getters: {
    mainAccountBalanceEther(state) {
      return state.balance ? web3.fromWei(state.balance.toNumber(), 'ether') : null
    },

    mainAccount(state) {
      return state.account.toLowerCase()
    },
  },
}
