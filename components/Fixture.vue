<template>
  <section class="box">
     <div class="columns">
      <div class="column is-6">
        <div class="columns">
          <div class="column is-7">
            {{fixture.homeTeam}}<br>{{fixture.awayTeam}}
          </div>
          <div class="column is-3">
            <div v-if="fixture.goalsHomeTeam && fixture.goalsAwayTeam">
              <strong class="tag is-success">
                {{fixture.goalsHomeTeam}}
              </strong>
              <br>
              <strong class="tag is-success">
                {{fixture.goalsAwayTeam}}
              </strong>
            </div>
            <span v-else>
              {{fixture.status}}
            </span>
          </div>
          <div class="column is-2">
            <span v-if="isFinished" key="match-is-over">
              {{fixture.status}}
            </span>
            <span v-else-if="fixture.elapsed > 0" key="match-is-now">
              {{fixture.elapsed}}min
            </span>
            <span v-else key="match-is-upcoming">
              {{fixture.event_timestamp | formatDate}}
            </span>
          </div>
        </div>
      </div>
      <div class="column is-6">
        BETTING INFO
      </div>
    </div>
    <!--<pre>{{fixture}}</pre>-->
  </section>

</template>

<script>
  import { timeHoursMinutes } from '../utils/time'

  export default {
    name: 'fixture',
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
  .box {
    margin-bottom: 20px;
  }

  .tag {
    width: 25px;
  }
</style>
