<template>
<div id="app" >
  <div id="sub-nav" class="bkg-color--dark-blue-gradient">
    <nav class="navbar navbar-light navbar-toggleable-sm">
      <button type="button" aria-label="Toggle navigation" aria-controls="sub-nav--toggle" aria-expanded="false" class="navbar-toggler navbar-toggler-right">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a aria-disabled="false" href="#" target="_self" class="navbar-brand">
        <a href="/" class="router-link-exact-active router-link-active">
          <img src="./assets/images/Matryx-Mark-White.png" alt="">
        </a>
      </a>
      <div id="sub-nav--toggle" class="navbar-collapse collapse" style="display: none;">
        <ul class="nav navbar-nav">
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">CONTACT</a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="https://blog.matryx.ai/" target="_self" class="nav-link">BLOG</a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">FAQ</a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">PRESS</a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">LEGAL</a>
          </li>
        </ul>
        <ul class="ml-auto nav navbar-nav">
          <li class="nav-item social-icon">
            <a aria-disabled="false" href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ" target="_blank" rel="noopener" class="nav-link">
              <img src="./assets/icons/icon-slack.svg" alt="Matryx Slack">
            </a>
          </li>
          <li class="nav-item social-icon">
            <a aria-disabled="false" href="https://www.twitter.com/matryx_ai" target="_blank" rel="noopener" class="nav-link">
              <img src="./assets/icons/icon-twitter.png" alt="Matryx Twitter Page">
            </a>
          </li>
          <li class="nav-item social-icon">
            <a aria-disabled="false" href="https://www.facebook.com/matryxai/" target="_blank" rel="noopener" class="nav-link">
              <img src="./assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
            </a>
          </li>
          <li class="nav-item nav-item-language">
            <b-dropdown id="language" text="Language" class="language">
              <b-dropdown-item>English</b-dropdown-item>
              <b-dropdown-item>Chinese</b-dropdown-item>
              <b-dropdown-item>Japanese</b-dropdown-item>
              <b-dropdown-item>Russian</b-dropdown-item>
              <b-dropdown-item>Spanish</b-dropdown-item>
            </b-dropdown>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <div id="nav" class="bkg-color--white " style="top: 0; position: -webkit-sticky;
    position: sticky;">
    <b-navbar toggleable toggle-breakpoint="sm" class="content-container content-container--medium " >
      <b-nav-toggle target="nav-toggle"></b-nav-toggle>
      <b-navbar-brand href="#">
        <router-link to="/"><img src="../src/assets/images/Matryx-Logo-Grey-CMYK.png" alt=""></router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav-toggle">

      <b-nav is-nav-bar>
       <b-nav-item class="nav-link text-color--matryx-grey" target="_blank" href="http://matryx.ai/site/wp-content/uploads/2017/08/Matryx-Technical-Whitepaper.pdf">WHITEPAPER</b-nav-item>
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">CONTACT</b-nav-item>
       <b-nav-item href="https://blog.matryx.ai/" target="_blank" class="nav-link text-color--matryx-grey nav-link--mobile-only">BLOG</b-nav-item>
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">FAQ</b-nav-item>
       <b-nav-item class="nav-item-language nav-link--mobile-only">
         <b-dropdown id="language" text="Language" class="language">
           <b-dropdown-item>English</b-dropdown-item>
           <b-dropdown-item>Chinese</b-dropdown-item>
           <b-dropdown-item>Japanese</b-dropdown-item>
           <b-dropdown-item>Russian</b-dropdown-item>
           <b-dropdown-item>Spanish</b-dropdown-item>
         </b-dropdown>
       </b-nav-item>

       <!-- REMOVED MOBILE ITEMS
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">PRESS</b-nav-item>
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">LEGAL</b-nav-item>
       <b-nav-item class="nav-link text-color--matryx-grey" href="#">WHAT IS MATRYX</b-nav-item>
       <b-nav-item class="nav-link text-color--matryx-grey" href="#">ABOUT</b-nav-item>
       <b-nav-item target="_blank"
         href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ"
         class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../src/assets/icons/slack.svg" alt="Matryx Slack">
       </b-nav-item>
       <b-nav-item target="_blank" href="https://www.facebook.com/matryxai/" class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../src/assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
       </b-nav-item>
       <b-nav-item target="_blank" href="https://www.twitter.com/matryx_ai" class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../src/assets/icons/icon-twitter.gif" alt="Matryx Twitter Page">
       </b-nav-item>-->

     </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item class="get-notified">
          <button @click.prevent="openGetNotified">GET NOTIFIED</button>
          <!-- <button v-b-modal.thankYouModal>openthakyou</button> -->
        </b-nav-item>
      </b-nav>
      </b-collapse>
    </b-navbar>
  </div>

  <b-modal id="getNotified" v-model="showGetNotifiedModal" no-close-on-esc no-close-on-backdrop>
    <CTA-Banner ctaLocation="Header"></CTA-Banner>
  </b-modal>

  <Survey-Modal></Survey-Modal>

  <router-view></router-view>

  <App-Footer></App-Footer>

</div>
</template>

<script>
import CTABanner from './components/CTA-Banner'
import AppFooter from './components/App-Footer'
import SurveyModal from './components/Survey-Modal'

import VueSticky from 'vue-sticky' // Es6 module

jQuery(document).ready(function () {
  jQuery('.spinner-container').appendTo('body')
})

export default {
  name: 'app',

  data () {
    return {
      showThankYouModal: false,
      showGetNotifiedModal: false,
      showModal: false
    }
  },

  components: {
    CTABanner,
    AppFooter,
    SurveyModal
  },

  directives: {
    'sticky': VueSticky
  },

  computed: {
    showGetNotifiedModal () {
      return this.$store.state.showGetNotifiedModal
    }
  },

  methods: {
    openGetNotified () {
      this.$store.commit('showGetNotifiedModal', true)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/css/colors';
@import './assets/css/styles';


/*navbar*/
#sub-nav {
  width:100%;
  z-index:3;
  &>.navbar.navbar-light {
    padding: 0 10px;
    background-color: transparent;

    .text-color--white > .nav-link {
      color: #FFF !important;
    }

    .nav-link{
      color: $white !important;
      border-radius: 0;
      transition: background-color 0s;

      &:hover {
        background-color: $matryx-blue;
        color: $matryx-dark-grey;
      }

      .btn-group > .btn:first-child {
        margin: 10px;
        background-color: transparent;
        border:1px solid #FFF;
        color:#FFF;

        &:hover, &:active, &:focus {
          background-color:#FFF;
          color: $matryx-dark-grey;
        }
      }
    }
    .social-icon .nav-link:hover {
      background-color: transparent;
    }

    .nav-item-language .nav-link {
      &:hover {
        background-color: transparent;
      }
    }
  }
}


.navbar .nav-item.nav-item-language {
  &:hover {
    background-color:transparent;
  }
  .nav-link {
    padding: 0;

  }
}

// language
#language {
  padding: 10px 0;
  margin: 0 50px 0 10px;
}
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

.sticky-nav {
  position:fixed;
  width: 100%;
  padding: 0 10px;
  z-index: 2;
}

#nav {
  box-shadow: 0px 1px 10px #bdbdbd;
  width: 100%;
  z-index: 2;
  padding: 0 10px;

  .navbar.navbar-light .nav-link {
    line-height: 50px;
  }

  .navbar-toggleable-sm .navbar-nav .nav-link {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
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
    background-color: transparent;
    height: 60px;
    width: 60px;
    margin: 0;
    padding: 10px 0px;

    a {
      line-height: 30px;
    }
  }
  .navbar-toggleable-sm .navbar-nav .nav-link {
    padding-right:0 !important;
    padding-left: 0 !important;
    padding-top: 0 !important;
  }
  .nav-link{
    transition: all 0.3s;
    padding: 5px 3px;
    border-radius: 5px;
    text-transform: uppercase;
    line-height: 40px;

    &:hover {
      cursor: pointer;
    }

    &.text-color--white a.nav-link{
      color: #FFF !important;
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

.nav-link--mobile-only {
  display:none;
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
.nav-item.get-notified {
  line-height: 60px;
}

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
  .modal-header {
    border: none;
    padding: 0;
    margin-bottom: -50px;
    z-index: 2;
  }
  .modal-footer {
    display:none;
  }
}

.warn {
  color: $matryx-red;
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
@media screen and (max-width: 767px) {
  #sub-nav {
    display:none;
  }
  #nav {
    padding: 10px;
  }
  #nav .navbar.navbar-light .nav-link {
    line-height: 15px;
  }
  .nav-link--mobile-only {
    display:block;
  }
}
</style>
