<template>
  <section class="container" v-if="isLoaded" key="is-loaded">
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
  <img v-else key="is-loading" src="~/assets/loading.svg" alt="loading">

</template>

<script>
  import BetSlip from '../../components/BetSlip.vue'

  export default {
    components: { BetSlip },
    data() {
      return {
        isLoaded: false,
      }
    },
    async created() {
      await this.$store.dispatch('LOAD_MAIN_ACCOUNT')
      await this.$store.dispatch('LOAD_CURRENT_ACCOUNT')

      if (!this.$store.getters.currentUserIsMainAccount) {
        this.$router.go(-1)

        return
      }

      this.isLoaded = true
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
