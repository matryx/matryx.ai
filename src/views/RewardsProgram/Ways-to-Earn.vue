<template>
  <section id="ways-to-earn">
    <h2 class="ways-to-earn--title uppercase text-color--matryx-grey text-center">
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
           :src="youtube.src"
          ></Reward-Social-Item>
          <Reward-Social-Item :maxMTX="twitter.maxMTX" :stakes="twitter.stakes"
           :src="twitter.src"
          ></Reward-Social-Item>
          <Reward-Social-Item :maxMTX="medium.maxMTX" :stakes="medium.stakes"
            :src="medium.src"
          ></Reward-Social-Item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RewardSocialItem from '@/components/Reward-Social-Item'
import youtubeSrc from '@/assets/images/rewardsProgram/icon-youtube.jpg'
import twitterSrc from '@/assets/images/rewardsProgram/icon-twitter.png'
import mediumSrc from '@/assets/images/rewardsProgram/icon-medium.png'

export default {
  name: 'WaysToEarn',

  components: {
    RewardSocialItem
  },

  data () {
    return {
      youtube: {
        stakes: [
          '10 stakes - Every Video',
          '20 stakes - Every Video',
          '40 stakes - Every Video'
        ],
        src: youtubeSrc,
        maxMTX: '40,000'
      },
      twitter: {
        stakes: [
          '10 stakes - 100-300 followers',
          '20 stakes - 300-1,000 followers',
          '30 stakes - 1,000-5,000 followers',
          '50 stakes - 5,000 or more followers'
        ],
        src: twitterSrc,
        maxMTX: '40,000'
      },
      medium: {
        stakes: [
          '10 stakes - Every post (media or link)',
          '20 stakes - Comment (40+ characters)',
          '30 stakes - Public share of any post by Matryx'
        ],
        src: mediumSrc,
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
