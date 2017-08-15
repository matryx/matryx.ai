<template>
<div id="app">

  <header>
    <router-link to="/">Home</router-link>
    <router-link to="/tokensale">Token Sale</router-link>
    <router-link to="/faq/about">FAQ</router-link>
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
@import './assets/css/faq';
body {
    margin: 0 auto;
}

header {
  background-color: $deep-black;
  height:65px;
  width:100%;

  a {
    text-decoration: none;
    color: $white;
    padding-right: 20px;
  }
}

#app {
  display: -webkit-box;display: -ms-flexbox;display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

</style>
