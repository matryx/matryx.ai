<template lang="html">
  <div class="eth-bought__container">
    <img src="../assets/icons/icon-ethereum.png" alt="" class="eth-bought__logo">
    <p class="eth-bought__value">{{ counter }} Contributed</p>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'

export default {
  name: 'EthBought',
  // props: {
  //   ethValue: {
  //     type: Number,
  //     default: 2600
  //   },
  //   current: Number
  // },
  data () {
    return {
      counter: 0,
      current: Number
    }
  },

  mounted () {
    axios.get(`${config.app.host}/api/sold`)
      .then((result) => {
        this.counter = Math.floor(result.data.total - 50)
        this.current = Math.floor(result.data.total)

        setTimeout(() => {
          const counter = setInterval(() => {
            this.counter++
            if (this.counter >= this.current) {
              clearCounter()
            }
          }, 100)

          function clearCounter () {
            clearInterval(counter)
          }
        }, 500)
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

<style lang="scss" scoped>
  .eth-bought {
    &__container {
      width: 100%;
      text-align:center;
      margin: 20px 0;
    }

    &__value {
      display:inline-block;
      font-size: 40px;
      /*color:#fff;*/
      color: #0086CB;
      margin: 10px 0;
      vertical-align: top;
    }

    &__logo {
      display:inline-block;
      height: 45px;
      background-color: #FFF;
      border-radius: 50px;
      padding: 5px;
    }
  }
</style>
