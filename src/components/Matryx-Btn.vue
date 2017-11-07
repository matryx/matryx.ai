<template>
  <button class="matryx-button matryx-button--blue" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'PurchaseMTXBtn',

  props: {
    handleClick: {
      type: Function
    },
    text: {
      type: String,
      default: 'Click Button'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

/*matryx button */
.matryx-button {
  width: 100%;
  max-width: 400px;
  /*height: 70px;*/
  text-align:center;
  border-radius: 40px;
  text-transform: uppercase;
  /*padding: 20px auto;*/
  /*margin: 30px auto;*/
  box-shadow: 2px 2px 10px rgba(0,0,0,0.7);
  font-size: 22px;

  &--blue {
    border: 1px solid $matryx-blue;
    background-color: $matryx-blue;
    color: #FFF;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
    }
    &:active {
      position:relative;
      top: 2px;
    }
  }

}
/*----- END tokensale styles-----*/
</style>
