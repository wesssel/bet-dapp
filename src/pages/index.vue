<template>
  <section class="container">
    <div>
      <h1 class="title">
        Bet Dapp
      </h1>
      <h2 class="subtitle">
        Decentralizer Application for betting
      </h2>
      <strong>All football matches of Today</strong>
      <ul class="fixtures">
        <li v-for="(fixture, index) in fixturesByDate" :key="index">
          <fixture :fixture="fixture"></fixture>
        </li>
      </ul>
      <bets-toaster></bets-toaster>
    </div>
  </section>
</template>

<script>
  import fixturesMock from '../../data/fixtures-mock.json'
  import BetsToaster from '../components/BetsToaster.vue'
  import Fixture from '../components/Fixture.vue'

  export default {
    components: { BetsToaster, Fixture },
    data() {
      return {
        fixtures: fixturesMock,
      }
    },
    computed: {
      fixturesByDate() {
        return this.$store.getters.fixturesByDate
      },
    },
    created() {
      this.$store.dispatch('LOAD_FIXTURES_OF_TODAY')
      this.$store.dispatch('LOAD_MAIN_ACCOUNT_BALANCE')
    },
  }

</script>

<style>
  .fixtures {
    margin: 20px 0 120px;
  }
</style>
