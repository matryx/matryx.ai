<template>
  <div class="countdown">
    <div class="days">
      <div class="number">{{ days | two_digits }}</div>
      <div class="desc">
        <span v-if=" language === 'ru' ">дн.</span>
				<span v-else-if=" language === 'ch' ">天</span>
				<span v-else-if=" language === 'ge' ">Tage</span>
				<span v-else-if=" language === 'ja' ">日</span>
				<span v-else-if=" language === 'ko' ">일</span>
				<span v-else>days</span>
      </div>
    </div>
    <div class="hours">
      <div class="number">{{ hours | two_digits }}</div>
      <div class="desc">
        <span v-if=" language === 'ru' ">ч.</span>
				<span v-else-if=" language === 'ch' ">小时</span>
				<span v-else-if=" language === 'ge' ">Stunden</span>
				<span v-else-if=" language === 'ja' ">時</span>
				<span v-else-if=" language === 'ko' ">시간</span>
				<span v-else>hours</span>
      </div>
    </div>
    <div class="minutes">
      <div class="number">{{ minutes | two_digits }}</div>
      <div class="desc">
        <span v-if=" language === 'ru' ">мин.</span>
				<span v-else-if=" language === 'ch' ">分钟</span>
				<span v-else-if=" language === 'ge' ">Minuten</span>
				<span v-else-if=" language === 'ja' ">分</span>
				<span v-else-if=" language === 'ko' ">분</span>
				<span v-else>minutes</span>
      </div>
    </div>
    <div class="seconds">
      <div class="number">{{ seconds | two_digits }}</div>
      <div class="desc">
        <span v-if=" language === 'ru' ">сек.</span>
				<span v-else-if=" language === 'ch' ">秒</span>
				<span v-else-if=" language === 'ge' ">Sekunden</span>
				<span v-else-if=" language === 'ja' ">秒</span>
				<span v-else-if=" language === 'ko' ">초</span>
				<span v-else>seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',

  props: {
    end: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      time: Date.parse(this.end) - Date.parse(new Date())
    }
  },

  mounted () {
    window.setInterval(() => {
      this.time = Date.parse(this.end) - Date.parse(new Date())
    }, 1000)
  },

  computed: {
    days () {
      const val = Math.floor(this.time / (1000 * 60 * 60 * 24))
      if (val < 0) return 0
      return val
    },
    hours () {
      const val = Math.floor((this.time / (1000 * 60 * 60)) % 24)
      if (val < 0) return 0
      return val
    },
    minutes () {
      const val = Math.floor((this.time / 1000 / 60) % 60)
      if (val < 0) return 0
      return val
    },
    seconds () {
      const val = Math.floor((this.time / 1000) % 60)
      if (val < 0) return 0
      return val
    },
    language () {
      return this.$store.state.language
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
