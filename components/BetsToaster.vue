<template>
  <div class="toaster box" :class="{ active: isActive }">
    <form>
      <ul class="toaster__bets">
        <li v-for="betFixture in betFixtures" :key="betFixture.fixture.id">
          <bet :fixture="betFixture.fixture" :bet="betFixture.bet"></bet>
          <hr>
        </li>
      </ul>
      <input class="input" type="number" step="0.01" v-model="betAmount"
             min="0" :max="maxStakeEther" placeholder="Enter stake">
      <span class="has-text-danger">
        Max stake possible: {{maxStakeEther}}
      </span>
      <ul class="overview">
        <li>
          Total Stake:
          <span class="is-pulled-right">{{ $store.state.betAmount | toCurrency }}</span>
        </li>
        <li>
          Total Odds:
          <span class="is-pulled-right">{{ $store.getters.totalOdds | twoDigits }}</span>
        </li>
        <li>
          Total Potential:
          <span class="is-pulled-right">{{ $store.getters.totalPotential | toCurrency }}</span>
        </li>
      </ul>
      <button class="button is-success is-pulled-right">PLACE BET</button>
    </form>
  </div>
</template>

<script>
  import Bet from './Bet.vue'

  export default {
    name: 'bets-toaster',
    components: { Bet },
    data() {
      return {
        betAmount: null,
      }
    },
    watch: {
      betAmount(betAmount) {
        if (betAmount > this.maxStakeEther) {
          this.betAmount = this.maxStakeEther
          return
        }

        this.$store.commit('SET_BET_AMOUNT', { betAmount })
      },
    },
    computed: {
      isActive() {
        return this.$store.state.bets.length > 0
      },
      betFixtures() {
        return this.$store.getters.betFixtures
      },
      maxStakeEther() {
        return this.$store.getters.maxStakeEther
      },
    },
    filters: {
      toCurrency(val) {
        return `ETH ${parseFloat(val).toFixed(2)}`
      },
      twoDigits(val) {
        return parseFloat(val).toFixed(2)
      },
    },
  }

</script>

<style>
  .toaster {
    position: fixed;
    width: 400px;
    right: 100px;
    bottom: -100vh;
    transition: .5s;
  }

  .toaster.active {
    bottom: 0;
  }

  .toaster__bets {
    max-height: 340px;
    overflow: hidden;
    overflow-y: auto;
  }

  .overview {
    margin: 20px 0;
  }
</style>
