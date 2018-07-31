<template>
  <transition name="fade">
    <div class="spinner" v-if="isLoading" key="is-loading">
      <img class="spinner__icon" src="~/assets/loading.svg" alt="loading">
      <br>
      <small>Loading Odds</small>
    </div>
    <div class="buttons is-pulled-right" v-else key="is-loaded">
      <template v-if="matchWinOdds">
        <button @click="setMatchWinBet('home')"
                class="button is-large" :class="isBet('home') ? 'is-success' : 'is-warning'"
                type="button">
          {{ matchWinOdds.home | twoDigits }}
        </button>
        <button @click="setMatchWinBet('draw')"
                class="button is-large" :class="isBet('draw') ? 'is-success' : 'is-warning'"
                type="button">
          {{ matchWinOdds.draw | twoDigits }}
        </button>
        <button @click="setMatchWinBet('away')"
                class="button is-large" :class="isBet('away') ? 'is-success' : 'is-warning'"
                type="button">
          {{ matchWinOdds.away | twoDigits }}
        </button>
      </template>
    </div>
  </transition>

</template>

<script>
  export default {
    name: 'fixture-odds',
    props: {
      fixture: {
        type: Object,
      },
    },
    data() {
      return {
        isLoading: true,
      }
    },
    computed: {
      matchWinOdds() {
        return this.fixture.odds.matchWin
      },
    },
    created() {
      this.$store.dispatch('LOAD_FIXTURE_ODS', { fixtureId: this.fixture.id })
        .then(() => {
          this.isLoading = false
        })
    },
    methods: {
      setMatchWinBet(side) {
        this.$store.commit('ADD_BET', { fixtureId: this.fixture.id, side })
      },
      isBet(side) {
        const { bets } = this.$store.state
        const currentBet = bets.find(b => b.fixtureId === this.fixture.id)

        if (!currentBet) {
          return false
        }

        return currentBet.fixtureId === this.fixture.id && currentBet.side === side
      },
    },
    filters: {
      twoDigits(val) {
        return val.toFixed(2)
      },
    },
  }
</script>

<style>
  .spinner {
    text-align: center;
  }

  .spinner__icon {
    width: 30px;
  }
</style>
