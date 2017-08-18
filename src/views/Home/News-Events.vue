<template>
  <section class="news-events">
    <div class="content-container content-container--large">
      <div class="news-events__title">
        <h2>News & Events</h2>
        <h5 class="news-events__title__sub">News</h5>
        <div class="news-events__title__line"></div>
      </div>

      <div class="news-events__events">
        <div class="news-events__events__primary">
          <Primary-Event
            v-for="event in events"
            :name="event.name"
            :date="event.date"
            :desc="event.desc"
            :cta="event.cta"
            :key="event.name"
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
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cta: 'Read Article'
      }, {
        name: 'Blah blah blahig Event',
        date: 'Nev er Sept 2081',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cta: 'Read Article'
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.news-events {

  &__title {
    h2 {
      color: $purple;
    }

    &__sub {
      text-transform: uppercase;
    }

    &__line {
      border-bottom: 1px solid blue;
    }
  }

  &__events {

    &__primary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 50px;
      border-bottom: 1px solid grey;
    }
  }
}

</style>
