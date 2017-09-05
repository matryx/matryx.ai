<template>
  <section id="ways-to-earn">
    <h2 class="ways-to-earn--title uppercase text-color--matryx-dark-grey text-center">
      Ways to Earn
    </h2>
    <div class="ways-to-earn content-container content-container--large">
      <h5 class="ways-to-earn--subtitle text-color--matryx-light-blue">
        You can earn MTX by creating content fostering conversation about Matryx,
        supporting the team!
      </h5>

      <div class="ways-to-earn__social">
        <h3 class="ways-to-earn__social--title uppercase text-color--matryx-grey text-center">Social</h3>
        <div class="ways-to-earn__social--platform">
          <Reward-Social-Item :maxMTX="youtube.maxMTX" :stakes="youtube.stakes"
           :src="youtube.src" :img="youtube.img"
          >
            <Reward-Social-Item-Btn :link="googleForm" linkText="Participate" slot="button">
            </Reward-Social-Item-Btn>
          </Reward-Social-Item>
          <Reward-Social-Item :maxMTX="twitter.maxMTX" :stakes="twitter.stakes"
           :src="twitter.src" :img="twitter.img"
          >
            <Reward-Social-Item-Btn :link="googleForm" linkText="Participate" slot="button">
            </Reward-Social-Item-Btn>
          </Reward-Social-Item>
          <Reward-Social-Item :maxMTX="forum.maxMTX" :stakes="forum.stakes"
            :src="forum.src" :img="forum.img"
          >
            <Reward-Social-Item-Btn :link="googleForm" linkText="Participate" slot="button">
            </Reward-Social-Item-Btn>
          </Reward-Social-Item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RewardSocialItem from '@/components/Reward-Social-Item'
import RewardSocialItemBtn from '@/components/Reward-Social-Item-Btn'
import youtubeSrc from '@/assets/images/rewardsProgram/icon-youtube.jpg'
import twitterSrc from '@/assets/images/rewardsProgram/icon-twitter.png'
import forumSrc from '@/assets/images/rewardsProgram/icon-bitcointalk.png'
import youtubeBar from '@/assets/images/rewardsProgram/youtube1.png'
import matryxTwitterBar from '@/assets/images/rewardsProgram/matryx-twitter.png'
import matryxForumBar from '@/assets/images/rewardsProgram/matryx-forum.png'

export default {
  name: 'WaysToEarn',

  components: {
    RewardSocialItem,
    RewardSocialItemBtn
  },

  data () {
    return {
      googleForm: 'https://goo.gl/forms/jiNQxJEfLVf7QBdc2',
      youtube: {
        stakes: [
          '10 stakes → < 500 Views',
          '50 stakes → 500 - 999 Views',
          '75 stakes → 1000 - 1499 Views',
          '100 stakes → 1500+ Views'
        ],
        img: youtubeBar,
        src: youtubeSrc,
        maxMTX: '40,000'
      },
      twitter: {
        stakes: [
          '5 stakes → Re-Tweet',
          '20 stakes → 100 - 299 followers',
          '50 stakes → 300 - 499 followers',
          '75 stakes → 500 - 999 followers',
          '100 stakes → 1,000+ followers'
        ],
        img: matryxTwitterBar,
        src: twitterSrc,
        maxMTX: '40,000'
      },
      forum: {
        stakes: [
          '20 stakes → Comment',
          '30 stakes → Report suspicious activity',
          '100 stakes → Thread creation'
        ],
        img: matryxForumBar,
        src: forumSrc,
        maxMTX: '40,000'
      }
    }
  }
}

</script>

<style lang="scss">
@import '../../assets/css/colors';

#ways-to-earn {
  .content-container {
    padding-top: 0;
  }
}

.ways-to-earn {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--title {
    padding: 60px 0;
    font-size: 3em;
    background-color: $matryx-lighter-grey;
    width: 100%;
  }

  &--subtitle {
    width: 400px;
    margin: 20px auto;
    text-align: center;
  }

  &__social {
    margin-top: 20px;
    width: 100%;
    border-top: 2px solid $matryx-light-grey;

    &--title {
      margin: 40px 0;
      font-size: 2.3em;
    }

    &--platform {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: 767px ) {
  #ways-to-earn {
    .content-container {
      padding-top: 0;
    }
  }

  .ways-to-earn {

    &--title {
    }

    &--subtitle {
      font-size: 18px;
      width: 300px;
    }

    &__social {

      &--platform {
        flex-direction: column;
        align-items:center;
      }
    }
  }
}
</style>
