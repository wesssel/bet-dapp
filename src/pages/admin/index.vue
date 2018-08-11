<template>
  <section class="container">
    <h1 class="title">
      Admin
    </h1>
    <strong>All bets</strong>
    <ul class="fixtures">
      <li v-for="(betSlip, index) in betSlips" :key="index">
        <bet-slip :betSlip="betSlip"></bet-slip>
      </li>
    </ul>
  </section>

</template>

<script>
  import BetSlip from '../../components/BetSlip.vue'

  export default {
    components: { BetSlip },
    created() {
      this.$store.dispatch('LOAD_BET_SLIPS')
    },
    computed: {
      betSlips() {
        return this.$store.getters.betSlips
      },
    },
  }

</script>

<style>
</style>
