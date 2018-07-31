<template>
  <div class="columns">
    <div class="column is-7">
      {{fixture.home.team}}<br>{{fixture.away.team}}
    </div>
    <div class="column is-3">
      <div v-if="fixture.home.goals && fixture.away.goals" key="has-score">
        <strong class="tag is-success">
          {{fixture.home.goals}}
        </strong>
        <br>
        <strong class="tag is-success">
          {{fixture.away.goals}}
        </strong>
      </div>
      <span v-else key="has-no-score">{{fixture.status}}</span>
    </div>
    <div class="column is-2">
      <span v-if="isFinished" key="match-is-over">{{fixture.status}}</span>
      <span v-else-if="fixture.elapsed > 0" key="match-is-now">{{fixture.elapsed}}min</span>
      <span v-else key="match-is-upcoming">{{fixture.timestamp | formatDate}}</span>
    </div>
  </div>
</template>

<script>
  import { timeHoursMinutes } from '../utils/time'

  export default {
    name: 'fixture-info',
    props: {
      fixture: {
        type: Object,
      },
    },
    computed: {
      isFinished() {
        return this.fixture.status === 'Match Finished'
      },
    },
    filters: {
      formatDate(unix) {
        return timeHoursMinutes(new Date(unix * 1000))
      },
    },
  }

</script>

<style>
  .tag {
    width: 25px;
  }
</style>
