<template>
  <section class="container">
    <h1 class="title">
      Admin
    </h1>
    <pre>{{$store.getters.activeBets}}</pre>
  </section>

</template>

<script>
  export default {
    created() {
      this.$store.dispatch('LOAD_ACTIVE_BETS')
    },
  }

</script>

<style>
</style>
