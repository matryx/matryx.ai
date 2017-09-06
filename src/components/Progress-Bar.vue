<template>
  <div class="progress-bar">
    <div class="progress-bar__bar-container">
      <div class="progress-bar__bar-progress" :style="ETHProgress"></div>
      <div class="progress-bar__bar-total"></div>
    </div>
    <p>
      <span class="progress-bar__bar-progress--text">{{ ETHPurchased }}</span>
      <span class="progress-bar__bar-total--text">/ 161803 ETH</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  data () {
    return {
      ETHPurchased: Number,
      ETHProgress: String,
      ETHData: [ 1356, 15677, 48768, 89235, 156098 ]
    }
  },

  mounted () {
    this.ETHPurchased = this.ETHData[(Math.floor(Math.random() * 5))]
    var ETHPercent = (this.ETHPurchased / 161803) * 100
    this.ETHProgress = 'width: ' + ETHPercent + '%;'
    console.log(this.ETHPurchased, this.ETHProgress, ETHPercent)
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

  /* progress bar */
  .progress-bar {
    background-color: transparent;
    margin: 30px 0;

    &__bar-container {
      position:relative;
      height: 20px;
      width: 100%;
    }
    &__bar-progress {
      background-color: $matryx-light-blue;

      &--text {
        color: #FFF;
      }
    }
    &__bar-total {
      width: 100%;

      &--text {
        color: $matryx-light-blue;
      }
    }
    &__bar-progress, &__bar-total {
      float:left;
      border: 1px solid $matryx-light-blue;
      height: 100%;
      position:absolute;
      top: 0;
      left: 0;
    }
  }
</style>
