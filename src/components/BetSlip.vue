<template>
  <div class="box">
    <ul>
      <li>
        Better: <strong>{{betSlip.better}}</strong>
      </li>
      <li>
        Stake: <strong>ETH {{betSlip.amount}}</strong>
      </li>
      <li>
        Odds: <strong>{{betSlip.odd}}</strong>
      </li>
      <li>
        <br>
        Bets:
        <ul>
          <li v-for="(bet, index) in betSlip.bets" :key="index">
            <div v-if="bet.fixture">
            <span :class="{ 'has-background-success': bet.side === 1 }">
              {{bet.fixture.home.team}}
            </span>
              -
              <span :class="{ 'has-background-success': bet.side === 2 }">
              Draw
            </span>
              -
              <span :class="{ 'has-background-success': bet.side === 3 }">
              {{bet.fixture.away.team}}
            </span>
            </div>
            <img v-else class="spinner__icon" src="~/assets/loading.svg" alt="loading">
          </li>
        </ul>
      </li>
    </ul>
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

<style>
  .box {
    margin-bottom: 20px;
  }

</style>
