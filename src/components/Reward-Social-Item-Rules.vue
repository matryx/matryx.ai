<template>
  <div class="reward-social-item-rules">
    <img class="reward-social-item-rules__img" :src="img">

    <ul class="reward-social-item-rules__stakes">
      <li v-for="rule in rules">
        {{ rule }}
      </li>
    </ul>

    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: 'RewardSocialItem',

  props: {
    img: {
      type: String
    },
    rules: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.reward-social-item-rules {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(50% - 60px);
  padding: 40px 20px 20px;
  margin: 30px 30px 30px 30px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 20px;

  &__img {
    height: 80px;
    width: 80px;
    margin-bottom: 20px;
  }

  &__stakes {
    color: $matryx-light-blue;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    padding-left: 20px;
    margin-top: 15px;
    max-width: 300px;

    li {
      list-style-image: url('../assets/images/rewardsProgram/bulletpoint.png');
      margin-bottom: 10px;
    }
  }

  &__progress-bar {
    width: 100%;
  }
}
.blogging__social-item.reward-social-item-rules {
  .reward-social-item-rules__label {
    color: #FFF;
  }
}



</style>
