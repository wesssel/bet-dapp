<template>
  <section class="container">
    <message></message>
    <div>
      <h1 class="title">
        Bet Dapp
      </h1>
      <h2 class="subtitle">
        Decentralizer Application for betting
      </h2>
      <router-link to="/my-bets" class="is-pulled-right">
        My Bets
      </router-link>
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
  import Message from '../components/Message.vue'

  export default {
    components: { BetsToaster, Fixture, Message },
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
