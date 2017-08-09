<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>Navigation stuff will show on every page</header>
    <h1>HELLO</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/css/styles';
</style>
