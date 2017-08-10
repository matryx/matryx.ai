<template>
<div id="app">

  <header>
    <router-link to="/">Home</router-link>
    <router-link to="/tokensale">Token Sale</router-link>
    <router-link to="/faq">FAQ</router-link>
  </header>

  <router-view></router-view>

  <footer></footer>

</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/css/styles';
body {
    margin: 0 auto;
}

#app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}
</style>
