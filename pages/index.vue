<template>
  <section class="container">
    <div>
      <h1 class="title">
        Bet Dapp
      </h1>
      <h2 class="subtitle">
        Decentralizer Application for betting
      </h2>
      <ul>
        <li v-for="(fixture, index) in fixturesByDate" :key="index">
          <fixture :fixture="fixture"></fixture>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import fixturesMock from '../data/fixtures-mock.json'
  import Fixture from '../components/Fixture.vue'

  export default {
    components: { Fixture },
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
  }

</script>
