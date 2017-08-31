<template>
  <div id="help2" class="faq__accordion">
    <span class="icon">
      <img src="../../../assets/icons/icon-About.svg" alt="">
    </span>

    <h1>About</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'FAQ-About'
}
</script>

<style lang="scss">
@import '../../../assets/css/styles.scss';
</style>
