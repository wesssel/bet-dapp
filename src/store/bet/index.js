import truffleContract from 'truffle-contract'
import BetSlips from '../../../build/contracts/BetSlips.json'
import { logger } from '../../utils/logger'
import { reverseTransformBetSlip } from '../../transformers/betSlip'
import { transformFixture } from '../../transformers/fixture'
import { getFixturesById } from '../../utils/rest'
import { numberToInt } from '../../utils/number'

const contract = truffleContract(BetSlips)

export default {
  state: {
    betSlips: [],
  },

  actions: {
    async PUSH_BET_SLIP({ getters }) {
      contract
        .setProvider(this.$web3.currentProvider)

      const accounts = await this.$web3.eth.getAccounts()
      const instance = await contract.deployed()

      instance
        .addBetSlip(
          getters.betFixtureIds,
          getters.betSides,
          numberToInt(getters.betAmount, 10),
          numberToInt(getters.totalOdds, 10),
          { from: accounts[0] },
        )
        .then((result) => {
          logger(result, 'bet success')
        })
        .catch(e => logger(e, 'push active bet error'))
    },

    async LOAD_BET_SLIPS({ commit, dispatch }) {
      contract
        .setProvider(this.$web3.currentProvider)

      const instance = await contract.deployed()
      const betSlipsCount = await instance.betSlipsCount.call()

      for (let index = 0; index < betSlipsCount.toNumber() + 1; index += 1) {
        instance
          .getBetSlip(index + 1)
          .then((result) => {
            const betSlip = reverseTransformBetSlip(result)

            commit('ADD_BET_SLIP', { betSlip })
            dispatch('LOAD_BET_SLIP_FIXTURES', { index, bets: betSlip.bets })
          })
          .catch(e => logger(e, 'load active bets error'))
      }
    },

    async LOAD_BET_SLIP_FIXTURES({ commit }, { index, bets }) {
      bets.forEach((bet) => {
        getFixturesById(bet.fixtureId)
          .then((result) => {
            commit('SET_BET_SLIP_FIXTURE', { index, fixture: transformFixture(result) })
          })
          .catch(e => logger(e, 'load betslips fixtures error'))
      })
    },
  },

  mutations: {
    ADD_BET_SLIP(state, { betSlip }) {
      state.betSlips.push(betSlip)
    },

    SET_BET_SLIP_FIXTURE(state, { index, fixture }) {
      const { bets } = state.betSlips[index]

      bets.find(b => b.fixtureId === parseInt(fixture.id, 10)).fixture = fixture
    },
  },

  getters: {
    betSlips(state) {
      return state.betSlips
    },
  },
}
