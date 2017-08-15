<template>
<div id="app">
  <b-navbar toggleable toggle-breakpoint="md">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand href="#">
      <router-link to="/"><img src="../src/assets/images/Matryx-Logo-White-640px.png" alt=""></router-link>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <!-- <b-nav-item class="text-color-white"> -->
          <a class="nav-link text-color--white" target="_blank" href="http://matryx.ai/site/wp-content/uploads/2017/08/Matryx-Technical-Whitepaper.pdf">
            WHITEPAPER
          </a>
        <!-- </b-nav-item> -->
        <!-- <b-nav-item class="text-color-white"> -->
        <router-link to="/tokensale" id="nav-link__tokensale" class="nav-link text-color--white">TOKEN SALE</router-link>
          <router-link to="/faq/about" class="nav-link text-color--white">faq</router-link>
        <!-- </b-nav-item> -->
      </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">
         <b-nav-item target="_blank" href="https://www.facebook.com/matryxai/" class="social-icon">
          <img src="../src/assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
        </b-nav-item>
        <b-nav-item target="_blank" href="" class="social-icon">
          <img src="../src/assets/icons/icon-twitter.gif" alt="Matryx Twitter Page">
        </b-nav-item>
      </b-nav>

    </b-collapse>
  </b-navbar>

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


</style>
