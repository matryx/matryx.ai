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
        name: 'SD News: Nanome Launches Matryx',
        date: '24 Aug 2017',
        desc: 'The three primary components of Matryx are the bounty system for rewarding users for solving problems posed on the platform by researchers, a library of digital assets for use in developing models and solutions and a marketplace for exchanging these ideas and assets.',
        image: newsImage3,
        articleLink: 'http://sdtimes.com/nanome-launches-vr-collaboration-platform-matryx/'
      }, {
        name: 'Blockchain News: Nanome Introduces Matryx',
        date: '24 Aug 2017',
        desc: 'Nanome, creator of virtual reality software for scientific research and development, has announced Matryx, an open source platform for decentralized collaboration. The Matryx token sale will kick off with a public pre-sale on Wednesday, September 6, 2017.',
        image: newsImage2,
        articleLink: 'http://sdtimes.com/nanome-launches-vr-collaboration-platform-matryx/'
      }, {
        name: 'ETH News: State of Digital Money 2017',
        date: '24 July 2017',
        desc: 'A number of use cases for Ethereum were also highlighted. A team from Matryx took a significant share of the spotlight for the debut of its take on virtual reality applications. Matryx debuted a custom built vector calculus tool to learn the subject in VR.',
        image: newsImage1,
        articleLink: 'https://www.ethnews.com/state-of-digital-money-2017-recap'
      }],
      events: [{
        name: 'Matryx. A Decentralized Research Platform',
        date: '13 Sept 2017 @ 7pm',
        day: 'Nanome CEO presents Matryx in Venice CA',
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
      border: 2px solid white;
      padding: 0 20px;
      position: relative;
      left: -20px;
      font-size: 30px;

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
