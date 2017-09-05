<template>
  <div class="reward-social-item">
    <img class="reward-social-item__img" :src="src">
    <div class="reward-social-item__label text-center">
      <h5 class="reward-social-item__name uppercase">{{ name }}</h5>
      <small>up to </small>
      <h5>{{ maxMTX }} MTX</h5>
    </div>

    <img :src="img" alt="" class="reward-social-item__progress-bar">

    <ul class="reward-social-item__stakes">
      <li v-for="stake in stakes">
        {{ stake }}
      </li>
    </ul>

    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'RewardSocialItem',

  props: {
    name: {
      type: String
    },
    img: {
      type: String
    },
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 490px;

  &__name {
    line-height: 21px;
    margin-top: 13px;
    margin-bottom: 0;
  }

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
    margin-top: 15px;

    li {
      list-style-image: url('../assets/images/rewardsProgram/bulletpoint.png');
      margin-bottom: 10px;
    }
  }

  &__progress-bar {
    width: 100%;
  }
}
.blogging__social-item.reward-social-item {
  .reward-social-item__label {
    color: #FFF;
  }
}

@media screen and (max-width: 1000px) {
  .reward-social-item {
    width: 100%;
    max-width: 400px;
    margin-bottom: 100px;
    height: 520px;
  }
}

</style>
