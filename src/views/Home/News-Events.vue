<template>
  <section class="news-events">
    <div class="content-container content-container--large">
      <div class="news-events__title">
        <h2>News & Events</h2>
        <div class="news-events__title__sub">News</div>
        <div class="news-events__title__line">News</div>
      </div>

      <div class="news-events__events">
        <div class="news-events__events__primary" v-for="event in events">
          <Primary-Event
            :name="event.name"
            :date="event.date"
            :desc="event.desc"
          >
          </Primary-Event>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryEvent from '@/components/Primary-Event'

export default {
  name: 'NewsEvents',

  components: {
    PrimaryEvent
  },

  data () {
    return {
      events: [{
        name: 'Big Event',
        date: '10 Sept 2081',
        description: 'asjdkfls;dalfkdsjfkl;alskdjfkdlsa'
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.news-events__title h2 {
  color: $purple;
}

</style>
