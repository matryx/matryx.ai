<template lang="html">
  <div class="eth-bought__container">
    <img src="../assets/icons/icon-ethereum.png" alt="" class="eth-bought__logo">
    <p class="eth-bought__value">{{ ethValue }} Contributed</p>
  </div>
</template>

<script>
export default {
  name: 'EthBought',
  props: {
    ethValue: {
      type: Number,
      default: 2600
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
