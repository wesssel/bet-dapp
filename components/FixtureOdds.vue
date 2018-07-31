<template>
  <div class="spinner" v-if="isLoading" key="is-loading">
    <img class="spinner__icon" src="~/assets/loading.svg" alt="loading">
    <br>
    <small>Loading Odds</small>
  </div>
  <div class="buttons is-pulled-right" v-else key="is-loaded">
    <template v-if="matchWinOdds">
      <button type="button" class="button is-large is-warning">
        {{ matchWinOdds.home }}
      </button>
      <button type="button" class="button is-large is-warning">
        {{ matchWinOdds.draw }}
      </button>
      <button type="button" class="button is-large is-warning">
        {{ matchWinOdds.away }}
      </button>
    </template>
  </div>

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
