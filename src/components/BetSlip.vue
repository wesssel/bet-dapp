<template>
  <div class="bet-slip">
    <pre>{{betSlip}}</pre>
  </div>
</template>

<script>
  export default {
    name: 'bet-slip',
    props: {
      betSlip: {
        type: Object,
      },
    },
  }
</script>
