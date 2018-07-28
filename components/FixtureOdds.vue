<template>
  <div class="spinner" v-if="isLoading" key="is-loading">
    <img class="spinner__icon" src="~/assets/loading.svg" alt="loading">
    <br>
    <small>Loading Odds</small>
  </div>
  <div class="buttons is-pulled-right" v-else key="is-loaded">
    <button type="button" class="button is-large is-warning">
      {{ matchWinOdds['1'].odd }}
    </button>
    <button type="button" class="button is-large is-warning">
      {{ matchWinOdds['N'].odd }}
    </button>
    <button type="button" class="button is-large is-warning">
      {{ matchWinOdds['2'].odd }}
    </button>
  </div>

</template>

<script>
  import { getFixtureOdds } from '../utils/rest'
  import oddsMock from '../data/odds-mock.json'

  export default {
    name: 'fixture-odds',
    props: {
      fixtureId: {
        type: String,
      },
    },
    data() {
      return {
        odds: {},
        isLoading: true,
      }
    },
    computed: {
      matchWinOdds() {
        return this.odds['Win the match']
      },
    },
    created() {
      if (process.env.dummy) {
        this.isLoading = false
        this.odds = oddsMock.api.odds
        return
      }

      getFixtureOdds(this.fixtureId)
        .then((result) => {
          this.isLoading = false
          this.odds = result.odds
        })
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
