<template>
  <section class="container">
    <h1 class="title">
      Bets of {{$store.getters.currentAccount}}
    </h1>
    <router-link to="/" class="is-pulled-right">
      Go back
    </router-link>
    <ul class="fixtures">
      <li v-for="(betSlip, index) in myBetSlips" :key="index">
        <bet-slip :betSlip="betSlip"></bet-slip>
      </li>
    </ul>
  </section>
</template>

<script>
  import BetSlip from '../components/BetSlip.vue'

  export default {
    name: 'my-bets',
    components: { BetSlip },
    created() {
      this.$store.dispatch('LOAD_CURRENT_ACCOUNT')
      this.$store.dispatch('LOAD_BET_SLIPS')
    },
    computed: {
      myBetSlips() {
        return this.$store.getters.currentAccountBetSlips
      },
    },
  }

</script>
