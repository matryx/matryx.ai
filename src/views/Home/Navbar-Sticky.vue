<template>
  <section id="nav" class="bkg-color--white " style="top: 0; position: -webkit-sticky;
      position: sticky;">
    <b-navbar toggleable toggle-breakpoint="sm" class="content-container content-container--medium " >
      <b-nav-toggle target="nav-toggle"></b-nav-toggle>
      <b-navbar-brand>
        <router-link to="/">
          <img src="../../assets/images/Matryx-Logo-Grey-CMYK.png"
            class="matryx-logo-word">
        </router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav-toggle">

      <b-nav is-nav-bar>
        <b-nav-item
          class="nav-link text-color--matryx-grey nav-link--mobile-hide"
          href="#what-is-matryx">
          ABOUT
        </b-nav-item>
        <b-nav-item
          class="nav-link text-color--matryx-grey nav-link--mobile-hide"
          href="#about-token-sale">
          TOKEN SALE
        </b-nav-item>
        <b-nav-item
          class="nav-link text-color--matryx-grey nav-link--mobile-hide"
          href="#bounty-system">
          BOUNTY SYSTEM
        </b-nav-item>
        <b-nav-item class="nav-link text-color--matryx-grey"
          target="_blank"
          href="/matryx-whitepaper.pdf"
          @click="whitePaperClick"
        >
          WHITEPAPER
        </b-nav-item>

        <!-- Only Mobile View -->
        <b-nav-item href="mailto:team@matryx.ai?subject=Matryx Token Sale" class="nav-link text-color--matryx-grey nav-link--mobile-only">
          CONTACT
        </b-nav-item>
        <b-nav-item href="https://blog.matryx.ai/" target="_blank" class="nav-link text-color--matryx-grey nav-link--mobile-only">
          BLOG
        </b-nav-item>
<!--         <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">FAQ</b-nav-item> -->
<!--         <b-nav-item class="nav-item-language nav-link--mobile-only">
          <b-dropdown id="language" text="Language" class="language">
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>Chinese</b-dropdown-item>
            <b-dropdown-item>Japanese</b-dropdown-item>
            <b-dropdown-item>Russian</b-dropdown-item>
            <b-dropdown-item>Spanish</b-dropdown-item>
          </b-dropdown>
        </b-nav-item>
 -->
       <!-- REMOVED MOBILE ITEMS
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">PRESS</b-nav-item>
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">LEGAL</b-nav-item>

       <b-nav-item target="_blank"
         href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ"
         class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../../assets/icons/slack.svg" alt="Matryx Slack">
       </b-nav-item>
       <b-nav-item target="_blank" href="https://www.facebook.com/matryxai/" class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../../assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
       </b-nav-item>
       <b-nav-item target="_blank" href="https://www.twitter.com/matryx_ai" class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../../assets/icons/icon-twitter.gif" alt="Matryx Twitter Page">
       </b-nav-item>-->

     </b-nav>

      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item class="get-notified">
          <button @click.prevent="openGetNotified">GET NOTIFIED</button>
        </b-nav-item>
      </b-nav>
      </b-collapse>
    </b-navbar>

  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'

export default {
  name: 'NavbarSticky',

  methods: {
    openGetNotified () {
      this.$store.commit('showGetNotifiedModal', true)
    },

    whitePaperClick () {
      appAnalytics.whitePaperClick('Navbar')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/styles';

#nav {
  box-shadow: 0px 1px 10px #bdbdbd;
  width: 100%;
  z-index: 2;
  padding: 0 10px;
  margin: 0;

  .navbar.navbar-light .nav-link {
    line-height: 50px;
    margin-right: 2.5px;
    margin-left: 5px;
  }

  .navbar-toggleable-sm .navbar-nav .nav-link {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .nav-link--mobile-only {
    display:none;
  }

  .nav-link{
    transition: all 0.3s;
    padding: 5px 3px;
    border-radius: 5px;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 11.5px;

    &:hover {
      cursor: pointer;
    }

    &.text-color--white a.nav-link{
      color: #FFF !important;
    }
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

    .matryx-logo-word {
      min-width: 184px;
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

  .nav-link {
    font-size: 11.5px;
    line-height: 40px;
  }

  .navbar-toggleable-sm .navbar-nav .nav-link {
    padding-right:0 !important;
    padding-left: 0 !important;
    padding-top: 0 !important;
  }
}
.navbar-toggleable-md .navbar-collapse {
  width: calc(100% - 130px);
}
.navbar-toggler.navbar-toggler-right {
  background-color: #fff;
  opacity: 0.9;
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

nav {
  padding: 0;
  &.content-container {
    padding:0;
  }
}

/*get notified button and modal*/
.navbar.navbar-light .get-notified {
  margin-right: 40px;
  display: flex;
  align-items: center;
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
      display: flex;
      align-items: center;
      line-height: 0;

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
  #nav {
    padding: 10px;
  }
  #nav .navbar.navbar-light .nav-link {
    line-height: 15px;
  }
  .nav-link--mobile-only {
    display:block;
  }
  .nav-link--mobile-hide {
    display:none;
  }
}


</style>
