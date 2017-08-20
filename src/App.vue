<template>
<div id="app">
  <div id="sub-nav" class="bkg-color--dark-blue-gradient">
    <b-navbar toggleable toggle-breakpoint="sm" class="">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="#">
        <router-link to="/"><img src="../src/assets/images/Matryx-Mark-White.png" alt=""></router-link>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <b-nav-link href="#" class="nav-link text-color--white">
          CONTACT
        </b-nav-link>
        <b-nav-link href="#" class="nav-link text-color--white">
          BLOG
        </b-nav-link>
        <b-nav-link href="#" class="nav-link text-color--white">
          FAQ
        </b-nav-link>
        <b-nav-link href="#" class="nav-link text-color--white">
          PRESS
        </b-nav-link>
        <b-nav-link href="#" class="nav-link text-color--white">
          LEGAL
        </b-nav-link>
      </b-nav>

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item target="_blank"
            href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ"
            class="social-icon">
            <img src="../src/assets/icons/slack.svg" alt="Matryx Slack">
          </b-nav-item>
          <b-nav-item target="_blank" href="https://www.facebook.com/matryxai/" class="social-icon">
            <img src="../src/assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
          </b-nav-item>
          <b-nav-item target="_blank" href="" class="social-icon">
            <img src="../src/assets/icons/icon-twitter.gif" alt="Matryx Twitter Page">
          </b-nav-item>
          <b-nav-item class="nav-item-language">
            <b-dropdown id="language" text="Language" class="language">
              <b-dropdown-item>English</b-dropdown-item>
              <b-dropdown-item>Chinese</b-dropdown-item>
              <b-dropdown-item>Japanese</b-dropdown-item>
              <b-dropdown-item>Russian</b-dropdown-item>
              <b-dropdown-item>Spanish</b-dropdown-item>
            </b-dropdown>
          </b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <div id="nav" class="bkg-color--white">
    <b-navbar toggleable toggle-breakpoint="sm" class="content-container content-container--medium ">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand href="#">
        <router-link to="/"><img src="../src/assets/images/Matryx-Logo-Grey-CMYK.png" alt=""></router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
        <a class="nav-link text-color--matryx-grey" target="_blank" href="http://matryx.ai/site/wp-content/uploads/2017/08/Matryx-Technical-Whitepaper.pdf">
          Whitepaper
        </a>
        <b-nav-link class="nav-link text-color--matryx-grey" href="#">WHAT IS MATRYX</b-nav-link>
         <b-nav-link class="nav-link text-color--matryx-grey" href="#">ABOUT</b-nav-link>
      </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item class="get-notified">
          <button v-b-modal.getNotified class="">GET NOTIFIED</button>
        </b-nav-item>
      </b-nav>
      </b-collapse>
    </b-navbar>
  </div>


  <b-modal id="getNotified" >
    <CTABanner cta-location="Header"></CTABanner>
  </b-modal>

  <router-view></router-view>

  <footer class="">
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
import CTABanner from './components/CTA-Banner'
export default {
  name: 'app',
  components: {
    CTABanner
  }
}
</script>

<style lang="scss" scoped>
@import './assets/css/colors';
@import './assets/css/styles';


/*navbar*/
#sub-nav {
  width:100%;
  &>.navbar.navbar-light {
    padding: 0 10px;
    background-color: transparent;

    .nav-link {
      color: $white;

      .btn-group > .btn:first-child {
        background-color: transparent;
      }
    }
  }
}
.navbar .nav-item.nav-item-language {
  .nav-link {
    padding: 0;

    button {
      display:none;
    }
  }
}

/*language*/
/*#language {*/
  button#language__BV_button_.btn.btn-secondary.dropdown-toggle {
    background-color:none !important;
    color:#fff !important;
    border: none !important;
  }

  .language {
    button.btn.btn-secondary {
      display:none;
    }
  }
/*}*/

#nav {
  /*position: fixed;*/
  width: 100%;
  z-index: 2;
  padding: 0 10px;
}
nav {
  padding: 0;
  &.content-container {
    padding:0;
  }
}
.navbar.navbar-light {
  width: 100%;
  background-color: $white;
  /*z-index:1000;*/

  .content-container--large {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .navbar-brand {
    height: 40px;
    margin-right: 10px;

    img {
      height: 100%;
    }
  }
  .social-icon-holder {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    background-color: transparent;
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
  .nav-link{
    transition: all 0.3s;
    padding: 10px 10px 0;
    // margin: 0 10px;
    border-radius: 5px;
    text-transform: uppercase;
    // color: $white;
    line-height: 40px;

    &:hover {
      cursor: pointer;
      /*color: $white;*/
      /*background-color:$purple;*/
      /*text-decoration: underline;*/
    }
  }
}
.navbar-toggleable-md .navbar-collapse {
  width: calc(100% - 130px);
}
.navbar-toggler.navbar-toggler-right {
  background-color: #fff;
  opacity: 0.9;
}

/*get notified button and modal*/
.navbar.navbar-light .get-notified {
  margin-right: 40px;
  & > .nav-link {
    padding: 3px 0 0 0 !important;

    button {
      height: 40px;
      padding: 10px 20px;
      border-radius: 40px;
      border: 1px solid $matryx-light-blue;
      color: #fff;
      outline:none;
      background-color: $matryx-light-blue !important;


      &:active,&:hover {
        outline: none;
        background: $white !important;
        color: $matryx-light-blue;
        /*color: #082135;*/
      }
      &:active {
        box-shadow: 1px 1px 10px #fff, -1px -1px 10px #fff;
      }
    }
  }
}

/*had to put some css for this modal inside above-the-fold file
**because the modal css in above the fold is overriding this file's modal css*/
#getNotified{
  .modal-dialog{
    max-width:100% ;
    /*background-image:url('./assets/images/backgrounds/whiteWave.png');*/

    #getNotified__BV_body_.modal-body {
      .cta-banner {
        width:100%;
      }
    }
  }
}

/*footer*/


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
  .navbar.navbar-light .get-notified {
    margin-right: 0px;
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
