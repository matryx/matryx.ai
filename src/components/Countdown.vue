<template>
  <div class="countdown">
    <div class="days">
      <div class="number">{{ days | two_digits }}</div>
      <div class="desc">days</div>
    </div>
    <div class="hours">
      <div class="number">{{ hours | two_digits }}</div>
      <div class="desc">hours</div>
    </div>
    <div class="minutes">
      <div class="number">{{ minutes | two_digits }}</div>
      <div class="desc">minutes</div>
    </div>
    <div class="seconds">
      <div class="number">{{ seconds | two_digits }}</div>
      <div class="desc">seconds</div>
    </div>
  </div>
</template>

<script>
const end = 'September 13 2017 09:00:00 GMT+0700'

export default {
  name: 'Countdown',

  data () {
    return {
      time: Date.parse(end) - Date.parse(new Date())
    }
  },

  mounted () {
    window.setInterval(() => {
      this.time = Date.parse(end) - Date.parse(new Date())
    }, 1000)
  },

  computed: {
    days () {
      return Math.floor(this.time / (1000 * 60 * 60 * 24))
    },
    hours () {
      return Math.floor((this.time / (1000 * 60 * 60)) % 24)
    },
    minutes () {
      return Math.floor((this.time / 1000 / 60) % 60)
    },
    seconds () {
      return Math.floor((this.time / 1000) % 60)
    }
  }
}
</script>

<style lang="scss">

.countdown {
  display: flex;
  justify-content: center;
  margin: 20px;
}

.desc {
  font-size: 16px;
  font-weight: 40;
  margin-bottom: 10px;
  text-align: center;
}

.number {
  font-size: 50px;
  font-weight: 100;
  margin: 10px;
  margin-bottom: 0;
  text-align: center;
}
</style>
