<template>
  <div class="reward-ts-item">
    <img class="reward-ts-item__img" :src="img">
    <div class="reward-ts-item__label text-center">
      <h5>{{ rewardMTX }} MTX</h5>
    </div>

    <slot class="reward-ts-item__info" name="info"></slot>

    <a :href="link">
      <button class="btn btn-yellow">
        {{ linkText }}
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: 'RewardTeamSupportItem',

  props: {
    img: {
      type: String
    },
    rewardMTX: {
      type: String
    },
    link: {
      type: String
    },
    linkText: {
      type: String
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.reward-ts-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 275px;

  &__img {
    height: 80px;
    width: 80px;
  }

  &__stakes {
    color: $matryx-light-blue;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;

    li {
      list-style-image: url('../assets/images/rewardsProgram/bulletpoint.png');
      margin-bottom: 10px;
    }
  }
}
</style>
