<template>
  <div class="progress-bar">
    <h6 class="progress-bar__title uppercase">Tokens Sold</h6>
    <div class="progress-bar__bar-container">
      <div class="progress-bar__bar-progress" :style="ETHProgress"></div>
      <div class="progress-bar__bar-total"></div>
    </div>
    <div class="progress-bar__percent">
      <span class="progress-bar__percent--start">0%</span>
      <span class="progress-bar__percent--end">100%</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'

export default {
  name: 'ProgressBar',

  data () {
    return {
      ETHPercent: 0
    }
  },

  mounted () {
    axios.get(`${config.app.host}/api/sold`)
      .then((result) => {
        this.ETHPercent = result.data.percentage
      })
      .catch((err) => {
        console.log('Error retrieving total sold', err)
      })
  },

  computed: {
    ETHProgress () {
      return `width: ${this.ETHPercent}%;`
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
      font-size: 12px;
    }

    &__bar-container {
      position:relative;
      height: 20px;
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
