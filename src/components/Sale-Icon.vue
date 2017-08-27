<template lang="html">
  <div class="icon">
    <img :src="img" :alt="alt">
    <p class="text--center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SaleIcon',
  props: {
    text: String,
    img: String,
    alt: String
  }
}
</script>

<style lang="scss" scoped>
/*@import '../assets/css/colors.scss';*/

.icon {
  width:calc(25% - 80px);
  min-width: 200px;
  margin: 0;
  padding: 0;
  height: 100%;

  img {
    width: calc(100% - 40px);
    margin: 20px;
  }
  p {
    line-height: 20px;
    font-weight:lighter;
    font-size:smaller;
  }
}
</style>
