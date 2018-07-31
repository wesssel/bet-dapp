<template>
  <div class="bet">
    <div class="columns">
      <div class="column is-1">
        <span @click="removeBet">X</span>
      </div>
      <div class="column is-8">
        <strong>{{ betTeam }}</strong>
        <br>
        Full match
        <br>
        <strong>{{ fixture.home.team }} - {{ fixture.away.team }}</strong>
      </div>
      <div class="column is-3">
        <strong>{{ betOdd | twoDigits }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bet',
    props: {
      fixture: {
        type: Object,
      },
      bet: {
        type: Object,
      },
    },
    computed: {
      betTeam() {
        return this.fixture[this.bet.side] ? this.fixture[this.bet.side].team : 'Draw'
      },
      betOdd() {
        return this.fixture.odds.matchWin[this.bet.side]
      },
    },
    methods: {
      removeBet() {
        this.$store.commit('REMOVE_BET', { fixtureId: this.bet.fixtureId })
      },
    },
    filters: {
      twoDigits(val) {
        return val.toFixed(2)
      },
    },
  }
</script>
