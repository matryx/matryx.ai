<template>
  <section class="ways-to-earn">
    <Reward-Social-Item
      :maxMTX="youtube.maxMTX" :stakes="youtube.stakes" :src="youtube.src"
    ></Reward-Social-Item>
    <Reward-Social-Item
      :maxMTX="twitter.maxMTX" :stakes="twitter.stakes" :src="twitter.src"
    ></Reward-Social-Item>
    <Reward-Social-Item
      :maxMTX="medium.maxMTX" :stakes="medium.stakes" :src="medium.src"
    ></Reward-Social-Item>
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
          '10 stakes - Every post (media or link)'
          '20 stakes - Comment (40+ characters)'
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
</style>
