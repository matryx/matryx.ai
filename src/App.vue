<template>
<div id="app">
  <b-navbar toggleable toggle-breakpoint="md">
    <div class="content-container--large">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="#">
        <router-link to="/"><img src="../src/assets/images/Matryx-Logo-Black-large.svg" alt=""></router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

        <b-nav is-nav-bar>
          <a class="nav-link text-color--white" target="_blank" href="http://matryx.ai/site/wp-content/uploads/2017/08/Matryx-Technical-Whitepaper.pdf">
            WHITEPAPER
          </a>
          <router-link to="/#company-overview" class="nav-link text-color--white">WHAT IS MATRYX</router-link>
          <router-link to="/faq/about" class="nav-link text-color--white">ABOUT</router-link>
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
    </div>
  </b-navbar>

  <router-view></router-view>

  <footer class="bkg-color--purple">
    <div class="footer__social">
      <a href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ" target="_blank"><img class="footer__social__icon" src="./assets/icons/slack.svg" alt=""></a>
      <a href="https://blog.matryx.ai/" target="_blank"><img class="footer__social__icon" src="./assets/icons/medium.svg" alt=""></a>
      <a href="https://t.me/matryxtoken"><img class="footer__social__icon" src="./assets/icons/telegram.svg" alt=""></a>
      <a href="https://twitter.com/matryx_ai" target="_blank"><img class="footer__social__icon" src="./assets/icons/icon-twitter.gif" alt=""></a>
      <a href="https://www.linkedin.com/company-beta/11238967/" target="_blank"><img class="footer__social__icon" src="./assets/icons/icon-linkedin.png" alt=""></a>
      <a href="https://www.facebook.com/matryxai/" target="_blank"><img class="footer__social__icon" src="./assets/icons/icon-facebook.png" alt=""></a>
    </div>
    <div class="footer__legal">
      <img src="./assets/images/Matryx-Logo-White-640px.png" alt="">
      <p class="font-size--small text-color--white">Copyright &copy; 2017 Matryx</p>
    </div>
  </footer>

</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import './assets/css/colors';
@import './assets/css/styles';


/*navbar*/
.navbar.navbar-light {
  position: absolute;
  width: 100%;
  background-color: white;

  .content-container--large{
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .navbar-brand {
    display:inline-block;
    height: 30px;

    img {
      height: 100%;
    }
  }

  .social-icon {
    background-color: $matryx-red;
  }
  .nav.navbar-nav a.nav-link{
    transition: all 0.3s;
    color: $purple;
    padding: 10px 10px 0;
    margin: 0 10px;
    border-radius: 5px;

    &:hover {
      color: $white;
      background-color:$purple;
    }
  }
}
.navbar-toggleable-md .navbar-collapse {
  width: calc(100% - 130px);
}



footer {
  margin-top: -20px;
  padding: 20px;
  width: 100%;
  position:relative;

  .footer__legal {
    float: left;
    p{
      opacity: 0.8;
    }
    img {
      width: 100px;
      margin-bottom: 20px;
    }
  }
  .footer__social {
    float:right;
    padding-right: 50px;
    bottom: 20px;
    position:absolute;
    right: 0;

    &__icon {
      width: 50px;
      height: 50px;
      padding: 10px;
    }
  }
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 991px) {
  .navbar-nav {
    align-items: flex-start;
  }
}
@media screen and (max-width: 750px) {
  footer .footer__social {
    position:relative;
    position: relative;
    margin: 20px auto 0;
    padding-right: 0;
  }
}
</style>
