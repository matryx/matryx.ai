<template>
  <div class="reward-ts-item">
    <img class="reward-ts-item__img" :src="img">
    <div class="reward-ts-item__label text-center text-color--white">
      <h5>{{ rewardMTX }} MTX</h5>
    </div>

    <div class="reward-ts-item__info text-color--white">
      <slot name="info"></slot>
    </div>

    <a :href="link">
      <button class="btn btn-yellow reward-ts-item__btn">
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

  &__label {
    margin-top: 20px;
  }

  &__img {
    height: 80px;
    width: 80px;
  }

  &__info {
    margin: 20px 0;
  }

  &__btn {
    border-color: $yellow;
    color: $white;
    background-color: $yellow;
    width: 250px;
    border-radius: 30px;
    padding: 15px;

    &:hover {
      border: none;
    }
  }
}
</style>
