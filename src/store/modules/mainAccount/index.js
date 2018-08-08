import truffleContract from 'truffle-contract'
import MainAccount from '../../../../build/contracts/MainAccount.json'

export default {
  state: {
    contract: {},
    balance: null,
  },
  actions: {
    LOAD_MAIN_ACCOUNT_BALANCE({ commit, dispatch }) {
      commit('SET_CONTRACT', { contract: truffleContract(MainAccount) })
      dispatch('SET_CONTRACT_PROVIDER')
      dispatch('SET_BALANCE')
    },
    SET_CONTRACT_PROVIDER({ state }) {
      state.contract.setProvider(window.web3.currentProvider)
    },
    SET_BALANCE({ commit, state }) {
      state.contract
        .deployed()
        .then(instance => instance.balanceOfMain.call())
        .then((balance) => {
          commit('SET_MAIN_BALANCE', { balance })
        })
    },
  },
  mutations: {
    SET_CONTRACT(state, { contract }) {
      state.contract = contract
    },
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
