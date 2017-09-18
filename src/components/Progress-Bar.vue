<template>
  <div class="progress-bar">
    <h5 class="progress-bar__title uppercase text-center">Token Sale Progress</h5>
    <div class="progress-bar__bar-container">
      <div class="progress-bar__bar-progress" :style="ETHProgress"></div>
      <div class="progress-bar__bar-total"></div>
    </div>
  </div>
</template>

<script>
import { getTotalSold } from '../api'

export default {
  name: 'ProgressBar',

  data () {
    return {
      ETHTotal: 0
    }
  },

  mounted () {
    getTotalSold().then((total) => {
      this.ETHTotal = total
    })
  },

  computed: {
    ETHProgress () {
      return `width: ${this.ETHTotal}%;`
    }
  }

}
</script>

<style lang="scss">
@import '../assets/css/colors';

  /* progress bar */
  .progress-bar {
    background-color: transparent;
    margin: 30px 0;

    &__title {

    }

    &__bar-container {
      position:relative;
      height: 35px;
      width: 100%;
    }
    &__bar-progress {
      background-color: $matryx-light-blue;
    }
    &__bar-total {
      width: 100%;
    }
    &__bar-progress, &__bar-total {
      float:left;
      border: 1px solid $matryx-light-blue;
      height: 100%;
      position:absolute;
      top: 0;
      left: 0;
    }

    &__percent {
      &--start {
        float: left;
      }
      &--end {
        float: right;
      }
    }
  }
</style>
