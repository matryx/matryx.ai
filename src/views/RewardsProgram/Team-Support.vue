<template>
  <section id="team-support">
    <div class="team-support content-container content-container--large">
      <h2 class="team-support__title uppercase text-color--matryx-lighter-grey">
        Team Support
      </h2>

      <div class="team-support__platform">
        <Reward-Team-Support-Item
          :img="bitcoin.img"
          :rewardMTX="bitcoin.rewardMTX"
          :link="bitcoin.link"
          :linkText="bitcoin.linkText"
        >
          <p slot="info">
            So much information Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Reward-Team-Support-Item>
      </div>
    </div>
  </section>
</template>

<script>
import RewardTeamSupportItem from '@/components/Reward-Team-Support-Item'
import bitcoinTalkImg from '@/assets/images/rewardsProgram/icon-bitcointalk.png'

export default {
  name: 'TeamSupport',

  components: { RewardTeamSupportItem },

  data () {
    return {
      bitcoin: {
        img: bitcoinTalkImg,
        rewardMtx: '15,000',
        link: 'https://bitcointalk.org',
        linkText: 'Participate here'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

section#team-support {
  background-color: $matryx-blue;
}

.team-support {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 4.5em;
    padding: 30px;
    margin: 30px;
  }
}
</style>
