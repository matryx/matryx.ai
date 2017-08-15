<template>
  <div id="help1" class="faq__accordion">
    <span class="icon">
      <!-- Pass through data in params or do some
        params logic
      -->
      <img src="../../assets/icons/icon-About.svg" alt="">
    </span>
    <!-- Add capitalization filter -->
    <h1>{{ $route.params.accordion }}</h1>

    <!-- All the accordions on the right side of the screen -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '../../assets/css/styles.scss';
</style>

<script>
export default {
  name: 'Accordion'
}
</script>
