<template>
  <section class="box">
    <div class="columns">
      <div class="column is-7">
        <fixture-info :fixture="fixture"></fixture-info>
      </div>
      <div class="column is-5">
        <fixture-odds v-if="showOdds" :fixture="fixture"></fixture-odds>
      </div>
    </div>
  </section>

</template>

<script>
  import FixtureInfo from './FixtureInfo.vue'
  import FixtureOdds from './FixtureOdds.vue'

  export default {
    name: 'fixture',
    components: { FixtureInfo, FixtureOdds },
    props: {
      fixture: {
        type: Object,
      },
    },
    computed: {
      showOdds() {
        return this.fixture.status !== 'Match Finished' && this.fixture.odds
      },
    },
  }
</script>

<style>
  .box {
    margin-bottom: 20px;
  }

</style>
