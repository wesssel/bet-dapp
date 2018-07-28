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
  // import { getFixturesByDate } from '../utils/rest'
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
        const { fixtures } = this

        return fixtures.sort((a, b) => (
          a.event_timestamp - b.event_timestamp
        ))
      },
    },
    // asyncData() {
    //   const now = new Date()
    //
    //   return getFixturesByDate(now)
    //     .then(result => ({ fixtures: result.fixtures }))
    // },
  }

</script>
