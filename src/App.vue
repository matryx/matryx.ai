<template>
<div id="app">

  <!-- <header>
    <router-link to="/">Home</router-link>
    <router-link to="/tokensale">Token Sale</router-link>
    <router-link to="/faq/about">FAQ</router-link>
  </header> -->
  <b-navbar toggle-breakpoint="md">
    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand >
      <img src="../src/assets/images/Matryx-Logo-White-640px.png" alt="">
    </b-navbar-brand>

    <a target="_blank" href="http://matryx.ai/site/wp-content/uploads/2017/08/Matryx-Technical-Whitepaper.pdf">
      WHITEPAPER
    </a>

    <router-link to="/">Home</router-link>

    <b-collapse is-nav id="nav_collapse">

    <b-nav is-nav-bar>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-nav>

    <!-- Right alignd nav items -->
    <b-nav is-nav-bar class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item to="#">EN</b-dropdown-item>
        <b-dropdown-item to="#">ES</b-dropdown-item>
        <b-dropdown-item to="#">RU</b-dropdown-item>
        <b-dropdown-item to="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item to="#">Profile</b-dropdown-item>
        <b-dropdown-item to="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
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
