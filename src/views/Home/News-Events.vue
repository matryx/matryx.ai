<template>
  <section class="news-events">
    <div class="content-container content-container--large">
      <h2>News & Events</h2>
      <div class="news-events__title">
        <h3 class="news-events__title__sub">News</h3>
        <div class="news-events__title__line"></div>
      </div>

      <div class="news-events__news">
        <div class="news-events__news__primary">
          <News-Article
            v-for="item in news"
            :name="item.name"
            :date="item.date"
            :desc="item.desc"
            :key="item.name"
            :image="item.image"
          >
          </News-Article>
        </div>
      </div>

      <!-- Hello I am Barbara now -->

      <div class="news-events__title">
        <div class="news-events__title__line"></div>
        <h3 class="news-events__title__sub--events">Events</h3>
      </div>

      <div class="news-events__events">
        <div class="news-events__news__primary">
          <Event-Item
            v-for="item in events"
            :name="item.name"
            :date="item.date"
            :day="item.day"
            :key="item.name"
            :image="item.image"
          >
          </Event-Item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsArticle from '@/components/News-Article'
import EventItem from '@/components/Event-Item'
import newsImage1 from '@/assets/images/video-preview.png'

export default {
  name: 'NewsEvents',

  components: {
    NewsArticle,
    EventItem
  },

  data () {
    return {
      news: [{
        name: 'Big News things',
        date: '10 Sept 2081',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: newsImage1
      }, {
        name: 'Blah blah blahig article',
        date: '10 Sept 2081',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: newsImage1
      }],
      events: [{
        name: 'Event event ev ent',
        date: '22 Aug 2017 @ 6pm',
        day: 'Tuesday',
        image: newsImage1
      }, {
        name: 'Event event event',
        date: '22 Aug 2017 @ 6pm',
        day: 'Wednesday',
        image: newsImage1
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.news-events {

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 15px;

    h2 {
      color: $purple;
    }

    &__sub {
      text-transform: uppercase;
      color: grey;
      background-color: white;
      border: 2px solid white;

      &--events {
        color: grey;
        text-align: right;
        text-transform: uppercase;
        background-color: white;
        border: 2px solid white;
      }
    }

    &__line {
      height: 15px;
      border-bottom: 1px solid grey;
      width: 88%;
    }
  }

  &__news {

    &__primary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}

</style>
