import truffleContract from 'truffle-contract'
import BetSlips from '../../../build/contracts/BetSlips.json'
import { logger } from '../../utils/logger'
import { reverseTransformBetSlip } from '../../transformers/betSlip'

const contract = truffleContract(BetSlips)

export default {
  state: {
    activeBets: [],
  },

  actions: {
    async PUSH_ACTIVE_BET({ getters }) {
      contract
        .setProvider(this.$web3.currentProvider)

      const accounts = await this.$web3.eth.getAccounts()
      const instance = await contract.deployed()

      instance
        .addBetSlip(
          getters.betFixtureIds,
          getters.betSides,
          getters.betAmount,
          getters.totalOdds,
          { from: accounts[0] },
        )
        .then((result) => {
          logger(result)
          logger(contract)
        })
        .catch(e => logger(e, 'push active bet error'))
    },

    async LOAD_ACTIVE_BETS({ commit }) {
      contract
        .setProvider(this.$web3.currentProvider)

      const instance = await contract.deployed()
      const betSlipsCount = await instance.betSlipsCount.call()

      for (let index = 1; index < betSlipsCount.toNumber() + 1; index += 1) {
        instance
          .getBetSlip(index)
          .then((result) => {
            commit('ADD_ACTIVE_BET', { bet: reverseTransformBetSlip(result) })
          })
          .catch(e => logger(e, 'load active bets error'))
      }
    },
  },

  mutations: {
    ADD_ACTIVE_BET(state, { bet }) {
      state.activeBets.push(bet)
    },
  },

  getters: {
    activeBets(state) {
      return state.activeBets
    },
  },
}
