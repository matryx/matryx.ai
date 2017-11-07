<template lang="html">
  <div class="eth-bought__container">
    <img src="../assets/icons/icon-ethereum.png" alt="" class="eth-bought__logo">
    <p v-if=" language === 'ch' " class="eth-bought__value"> 已筹 {{ counter }}</p>
    <p v-else class="eth-bought__value">{{ counter }} ETH Contributed</p>
    <p class="eth-bought__container text-color--matryx-blue">For BTC &#38; LTC purchases, please contact: <a href="mailto:team@matryx.ai?subject=Matryx Token Sale"
    target="_self">team@matryx.ai</a></p>
  </div>
</template>

<script>
import { getTotalSold } from '@/api'

export default {
  name: 'EthBought',
  data () {
    return {
      counter: 2700,
      current: 0
    }
  },

  computed: {
    language () {
      return this.$store.state.language
    }
  },

  mounted () {
    getTotalSold().then((total) => {
      if (!total) {
        return
      }

      this.counter = Math.floor(total - 75)
      this.current = Math.floor(total)

      setTimeout(() => {
        const counter = setInterval(() => {
          this.counter++
          if (this.counter >= this.current) {
            clearCounter()
          }
        }, 30)

        function clearCounter () {
          clearInterval(counter)
        }
      }, 500)
    })
    .catch((err) => {
      console.log('Error retrieving total sold', err)
    })
  }
}
</script>

<style lang="scss" scoped>
  .eth-bought {
    &__container {
      width: 100%;
      text-align:center;
      margin: 20px 0;
    }

    &__value {
      display:inline-block;
      font-size: 32px;
      /*color:#fff;*/
      color: #0086CB;
      margin: 10px 5px;
      vertical-align: top;
      line-height: 40px;
    }

    &__logo {
      display:inline-block;
      height: 45px;
      background-color: #FFF;
      border-radius: 50px;
      padding: 5px;
      margin-top: 5px;
    }
  }
</style>
