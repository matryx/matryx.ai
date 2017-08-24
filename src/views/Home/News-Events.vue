<template>
  <section class="news-events" id="news-events">
    <div class="content-container content-container--large">
      <h2 class="news-events__sectionHeader text-color--matryx-grey">NEWS &#38; EVENTS</h2>
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
            :articleLink="item.articleLink"
          >
          </News-Article>
        </div>
      </div>

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
            :eventLink="item.eventLink"
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
import newsImage1 from '@/assets/images/backgrounds/bg1.jpg'
import newsImage2 from '@/assets/images/backgrounds/bg2.jpg'
import newsImage3 from '@/assets/images/backgrounds/bg3.jpg'
import newsImage4 from '@/assets/images/backgrounds/bg4.jpg'

export default {
  name: 'NewsEvents',

  components: {
    NewsArticle,
    EventItem
  },

  data () {
    return {
      news: [{
        name: 'PR News Wire',
        date: '24 Aug 2017',
        desc: 'Virtual Reality Software Maker Nanome Introduces Matryx with Token Sale',
        image: newsImage3,
        articleLink: 'http://www.prnewswire.com/news-releases/virtual-reality-software-maker-nanome-introduces-matryx-with-token-sale-300509203.html'
      }, {
        name: 'ETHNews: State of Digital Money 2017',
        date: '24 July 2017',
        desc: 'Matryx debuted a custom built vector calculus tool to learn the subject in VR.',
        image: newsImage1,
        articleLink: 'https://www.ethnews.com/state-of-digital-money-2017-recap'
      }, {
        name: 'Decentralized Scientific Collaboration',
        date: '20 July 2017',
        desc: 'Blockchain technology is the gateway to an Open Access society and the technologies of tomorrow.',
        image: newsImage2,
        articleLink: 'http://stateofdigitalmoney.com/2017/07/20/matryx-demo-at-sodm17/'
      }],
      events: [{
        name: 'Marketing & PR in the Blockchain Industry',
        date: '23 Aug 2017 @ 7pm',
        day: 'Wednesday',
        image: newsImage3,
        eventLink: 'https://www.meetup.com/Los-Angeles-Ethereum/events/242564631/'
      }, {
        name: 'Matryx. A Decentralized Research Platform',
        date: '13 Sept 2017 @ 7pm',
        day: 'Wednesday',
        image: newsImage4,
        eventLink: 'https://www.meetup.com/Los-Angeles-Ethereum/events/242566534/'
      }]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.news-events {
  margin-bottom: -200px;

  &__news__primary {
    display:-webkit-box;display:-ms-flexbox;display:flex;

  }

  &__sectionHeader {
      font-size: 40px;
      padding: 25px 0;
    }

  &__title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;

    &__sub {
      text-transform: uppercase;
      background-color: white;
      font-size: 30px;
      border: 2px solid white;
      padding: 0 20px;
      position: relative;
      left: -20px;

      &--events {
        color: $matryx-black;
        font-size: 30px;
        text-align: right;
        text-transform: uppercase;
        background-color: white;
        border: 2px solid white;
        padding: 0 20px;
      }
    }

    &__line {
      height: 15px;
      border-bottom: 1px solid grey;
      width: 100%;
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

@media screen and (max-width: 500px) {
  .news-events {
    margin-bottom: -300px;
  }
}

</style>
