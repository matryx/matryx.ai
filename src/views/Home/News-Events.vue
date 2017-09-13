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
            :facebookLink="item.facebookLink"
            :twitterLink="item.twitterLink"
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
            :facebookLink="item.facebookLink"
            :twitterLink="item.twitterLink"
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
import newsImage5 from '@/assets/images/backgrounds/bg5.jpg'

export default {
  name: 'NewsEvents',

  components: {
    NewsArticle,
    EventItem
  },

  data () {
    return {
      // http://sharingbuttons.io/
      news: [{
        name: 'How Blockchain Can Change The Way Science Works, Explained',
        date: '6 Sept 2017',
        desc: 'Projects like Matryx allow science, technology, engineering, and mathematics research and projects may become accessible to everyone.',
        image: newsImage1,
        articleLink: 'https://cointelegraph.com/explained/how-blockchain-can-change-the-way-science-works-explained',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fhow-blockchain-can-change-the-way-science-works-explained',
        twitterLink: 'https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fhow-blockchain-can-change-the-way-science-works-explained'
      }, {
        name: 'SD News: Matryx Launch',
        date: '24 Aug 2017',
        desc: 'The three primary components of Matryx are the bounty system for rewarding users for solving problems posed on the platform by researchers, a library of digital assets for use in developing models and solutions and a marketplace for exchanging these ideas and assets.',
        image: newsImage3,
        articleLink: 'http://sdtimes.com/nanome-launches-vr-collaboration-platform-matryx/',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsdtimes.com%2Fnanome-launches-vr-collaboration-platform-matryx%2F',
        twitterLink: 'https://twitter.com/intent/tweet/?text=&amp;url=http%3A%2F%2Fsdtimes.com%2Fnanome-launches-vr-collaboration-platform-matryx%2F'
      }, {
        name: 'Blockchain News: Introducing Matryx',
        date: '24 Aug 2017',
        desc: 'The Matryx team creates virtual reality software for scientific research and development, and has announced Matryx, an open source platform for decentralized collaboration. The Matryx token sale will kick off with a public pre-sale on Wednesday, September 6, 2017.',
        image: newsImage2,
        articleLink: 'http://www.the-blockchain.com/2017/08/24/virtual-reality-software-maker-nanome-introduces-matryx-token-sale/',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fwww.the-blockchain.com%2F2017%2F08%2F24%2Fvirtual-reality-software-maker-nanome-introduces-matryx-token-sale%2F',
        twitterLink: 'https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=http%3A%2F%2Fwww.the-blockchain.com%2F2017%2F08%2F24%2Fvirtual-reality-software-maker-nanome-introduces-matryx-token-sale%2F'
      }, {
        name: 'ETH News: State of Digital Money 2017',
        date: '24 July 2017',
        desc: 'A number of use cases for Ethereum were also highlighted. A team from Matryx took a significant share of the spotlight for the debut of its take on virtual reality applications. Matryx debuted a custom built vector calculus tool to learn the subject in VR.',
        image: newsImage1,
        articleLink: 'https://www.ethnews.com/state-of-digital-money-2017-recap',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ethnews.com%2Fstate-of-digital-money-2017-recap',
        twitterLink: 'https://twitter.com/intent/tweet/?text=&amp;url=https%3A%2F%2Fwww.ethnews.com%2Fstate-of-digital-money-2017-recap'
      }],

      events: [{
        name: 'New Kids on the Blockchain',
        date: '23 Sept 2017 @ 2:00pm',
        day: 'Matryx CEO guest speaker at Dubai Cryptocurrencies Club & Blockchain Technology Meetup',
        image: newsImage5,
        eventLink: 'https://www.meetup.com/Dubai-Cryptocurrency-Blockchain-Meetup/events/243245854/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging%3B9NmTE%2BCJSvasJP7jmhtTyw%3D%3D',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.meetup.com%2FDubai-Cryptocurrency-Blockchain-Meetup%2Fevents%2F243245854%2F%3Flipi%3Durn%253Ali%253Apage%253Ad_flagship3_messaging%253B9NmTE%252BCJSvasJP7jmhtTyw%253D%253D',
        twitterLink: 'https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=https%3A%2F%2Fwww.meetup.com%2FDubai-Cryptocurrency-Blockchain-Meetup%2Fevents%2F243245854%2F%3Flipi%3Durn%253Ali%253Apage%253Ad_flagship3_messaging%253B9NmTE%252BCJSvasJP7jmhtTyw%253D%253D'
      }, {
        name: 'Matryx. A Decentralized Research Platform.',
        date: '13 Sept 2017 @ 7:00pm',
        day: 'Los Angeles Ethereum hosts Matryx presentation',
        image: newsImage4,
        eventLink: 'https://www.meetup.com/Los-Angeles-Ethereum/events/242566534/',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.meetup.com%2FLos-Angeles-Ethereum%2Fevents%2F242566534%2F',
        twitterLink: 'https://twitter.com/intent/tweet/?text=Super%20fast%20and%20easy%20Social%20Media%20Sharing%20Buttons.%20No%20JavaScript.%20No%20tracking.&amp;url=https%3A%2F%2Fwww.meetup.com%2FLos-Angeles-Ethereum%2Fevents%2F242566534%2F'
      }, {
        name: 'Virtual Reality & Blockchain for STEM & Research',
        date: '08 Sept 2017 @ 6:30pm',
        day: 'Coinbase Co-founder & Matryx CEO present in San Francisco, CA',
        image: newsImage5,
        eventLink: 'https://www.eventbrite.com/e/vr-x-blockchaintoken-conversation-with-fred-ehrsam-coinbase-co-founder-tickets-37440777373',
        facebookLink: 'https://facebook.com/sharer/sharer.php?u=https://www.eventbrite.com/e/vr-x-blockchaintoken-conversation-with-fred-ehrsam-coinbase-co-founder-tickets-37440777373',
        twitterLink: 'https://twitter.com/intent/tweet/?text=&amp;url=https://www.eventbrite.com/e/vr-x-blockchaintoken-conversation-with-fred-ehrsam-coinbase-co-founder-tickets-37440777373'
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


/* share buttons */
.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 0.5em
}

.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 0.5em 0.75em;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top
}

.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle
}

/* Non solid icons get a stroke */
.resp-sharing-button__icon {
  stroke: #fff;
  fill: none
}

/* Solid icons get a fill */
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none
}

.resp-sharing-button--twitter {
  background-color: #55acee
}

.resp-sharing-button--twitter:hover {
  background-color: #2795e9
}

.resp-sharing-button--facebook {
  background-color: #3b5998
}

.resp-sharing-button--facebook:hover {
  background-color: #2d4373
}

.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
}

.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}

.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}

.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}

p.share-social--title.text-color--matryx-blue {
  margin-top: 0.5em;
  margin-bottom: 0;
}



@media screen and (max-width: 500px) {
  .news-events {
    margin-bottom: -300px;
  }
}

</style>
