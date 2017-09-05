<template>
  <section id="team-support">
    <div class="team-support content-container content-container--large">
      <h2 class="team-support__title uppercase text-color--matryx-lighter-grey text-center">
        Rewards Guidelines
      </h2>

      <div class="team-support__platform">
        <Reward-Social-Item-Rules
          :img="twitter.img"
          :rules="twitter.rules"
        >
        </Reward-Social-Item-Rules>
        <Reward-Social-Item-Rules
          :img="youtube.img"
          :rules="youtube.rules"
        >
        </Reward-Social-Item-Rules>
        <Reward-Social-Item-Rules
          :img="blog.img"
          :rules="blog.rules"
        >
        </Reward-Social-Item-Rules>
        <Reward-Social-Item-Rules
          :img="bitcointalk.img"
          :rules="bitcointalk.rules"
        >
        </Reward-Social-Item-Rules>

        <a href="/press-kit" class="team-support__press-tag">
          <button class="btn btn-red team-support__press-btn uppercase">
            Press Kit
          </button>
        </a>
      </div>

<!--       <div class="team-support__content">
        <h3 class="team-support__content__title uppercase text-center text-color--white">
          Content Ideas
        </h3>

        <div class="team-support__content__images">
          <div class="team-support__content__images--img">
            <img src="../../assets/images/Matryx-Logo-Grey-CMYK.png">
          </div>
          <div class="team-support__content__images--img">
            <img src="../../assets/images/Matryx-Logo-Grey-CMYK.png">
          </div>
          <div class="team-support__content__images--img">
            <img src="../../assets/images/Matryx-Logo-Grey-CMYK.png">
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import RewardSocialItemRules from '@/components/Reward-Social-Item-Rules'
import twitterImg from '@/assets/images/rewardsProgram/icon-twitter.png'
import youtubeImg from '@/assets/images/rewardsProgram/icon-youtube.png'
import mediumImg from '@/assets/icons/icon-medium.svg'
import bitcointalkImg from '@/assets/images/rewardsProgram/icon-bitcointalk.png'
export default {
  name: 'TeamSupport',

  components: { RewardSocialItemRules },

  data () {
    return {
      bitcointalk: {
        img: bitcointalkImg,
        rules: [
          'Threads must link back to matryx.ai',
          'Must be able to track threads/comments via URL or keep list and submit at the end to rewards@matryx.ai'
        ]
      },

      twitter: {
        img: twitterImg,
        rules: [
          'Maximum of 3 tweets per day',
          'Tweets must be original',
          'Encouraged to use #Matryx',
          'Must either link matryx.ai or @matryx_ai',
          'Re-Tweets must be on an original @matryx_ai tweet about our token sale'
        ]
      },

      youtube: {
        img: youtubeImg,
        rules: [
          'Over 2 minutes',
          'matryx.ai must appear in video description',
          '"Matryx" must appear in title',
          'Only positive, professional, and thought-out videos considered'
        ]
      },

      blog: {
        img: mediumImg,
        rules: [
          'matryx.ai linked in page',
          'Must be able to see the number of views',
          '700+ words',
          'Post should be professional, positive, and thought-out'
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

section#team-support {
  background-color: $matryx-darker-blue;
}

.team-support {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__title {
    font-size: 4em;
    padding: 30px;
    margin: 30px 0 70px;
    line-height: 1.2em;
    opacity: 0.9;
  }

  &__platform {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    margin-bottom: 50px;

    &__title {
      margin-bottom: 50px;
      font-size: 2em;
      opacity: 0.9;
    }

    &__images {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      &--img {
        margin-bottom: 30px;
      }

      img {
        height: 200px;
        width: 300px;
      }
    }
  }

  &__press-tag {
    margin: 50px auto 0;
  }

  &__press-btn {
    border-color: $matryx-red;
    color: $matryx-red;
    background-color: transparent;
    width: 250px;
    border-radius: 30px;
    padding: 15px;

    &:hover {
      border: none;
      color: #FFF;
      background-color: $matryx-red;
    }
  }
}

@media screen and (max-width: 1050px) {
  .team-support {
    &__platform {
      flex-direction: column;
      align-items: center;
    }

    &__content__images {
      justify-content: center;
    }
  }
}

@media screen and (max-width: 600px) {
  .team-support__title {
    font-size: 3em;
    margin-bottom: 0px;
  }
}
</style>
