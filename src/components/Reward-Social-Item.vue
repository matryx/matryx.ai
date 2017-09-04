<template>
  <div class="reward-social-item">
    <img class="reward-social-item__img" :src="src">
    <div class="reward-social-item__label text-center">
      <small>up to </small>
      <h5>{{ maxMTX }} MTX</h5>
    </div>

    <ul class="reward-social-item__stakes">
      <li v-for="stake in stakes">
        {{ stake }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'RewardSocialItem',

  props: {
    src: {
      type: String
    },
    maxMTX: {
      type: String
    },
    stakes: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.reward-social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

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
    padding-left: 20px;

    li {
      list-style-image: url('../assets/images/rewardsProgram/bulletpoint.png');
      margin-bottom: 10px;
    }
  }
}

</style>
