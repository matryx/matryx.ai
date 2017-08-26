<template>
<div id="app" >
  <div id="sub-nav" class="bkg-color--dark-blue-gradient">
    <nav class="navbar navbar-light navbar-toggleable-sm">
      <button type="button" aria-label="Toggle navigation" aria-controls="sub-nav--toggle" aria-expanded="false" class="navbar-toggler navbar-toggler-right">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a aria-disabled="false" href="/" target="_self" class="navbar-brand">
        <!-- <a href="/" class="router-link-exact-active router-link-active"> -->
          <img src="./assets/images/Matryx-Mark-White.png" alt="">
        <!-- </a> -->
      </a>
      <div id="sub-nav--toggle" class="navbar-collapse collapse" style="display: none;">
        <ul class="nav navbar-nav">
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false"
              href="mailto:team@matryx.ai?subject=Matryx Token Sale"
              target="_self"
              class="nav-link"
            >
              CONTACT
            </a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false"
              href="https://blog.matryx.ai/"
              target="_blank"
              class="nav-link">
                BLOG
              </a>
          </li>
<!--           <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">FAQ</a>
          </li> -->
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#news-events" target="_self" class="nav-link">PRESS</a>
          </li>
<!--           <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">LEGAL</a>
          </li> -->
        </ul>
        <ul class="ml-auto nav navbar-nav">
          <li class="nav-item social-icon">
            <a aria-disabled="false" href="https://t.me/matryxai"
              target="_blank"
              rel="noopener"
              class="nav-link"
              @click="socialMediaClick('telegram', 'navbar')"
            >
              <img src="./assets/icons/icon-telegram.svg" alt="Matryx telegram">
            </a>
          </li>
          <li class="nav-item social-icon">
            <a aria-disabled="false" href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8080%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=matryx_ai&tw_p=followbutton"
            target="_blank"
            rel="noopener"
            class="nav-link"
            @click="socialMediaClick('twitter', 'navbar')"
          >
              <img src="./assets/icons/icon-twitter.png" alt="Matryx Twitter Page">
            </a>
          </li>
          <li class="nav-item social-icon">
            <a aria-disabled="false" href="https://www.facebook.com/matryxai/"
              target="_blank"
              rel="noopener"
              class="nav-link"
              @click="socialMediaClick('facebook', 'navbar')"
            >
            <img src="./assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
            </a>

          </li>

         <!--  <li class="nav-item nav-item-language">
            <b-dropdown id="language" text="Language" class="language">
              <b-dropdown-item>English</b-dropdown-item>
              <b-dropdown-item>Chinese</b-dropdown-item>
              <b-dropdown-item>Japanese</b-dropdown-item>
              <b-dropdown-item>Russian</b-dropdown-item>
              <b-dropdown-item>Spanish</b-dropdown-item>
            </b-dropdown>
          </li> -->
        </ul>
      </div>
    </nav>
  </div>

  <Survey-Modal></Survey-Modal>

  <b-modal id="getNotified"
    v-model="showGetNotifiedModal"
    no-close-on-esc
    no-close-on-backdrop
    hide-header
  >
    <div class="close-modal text-muted" @click.prevent="closeModal">
      X
    </div>
    <CTA-Banner ctaLocation="Header"></CTA-Banner>
  </b-modal>

  <router-view></router-view>

  <App-Footer></App-Footer>

</div>
</template>

<script>
import AppFooter from './components/App-Footer'
import CTABanner from './components/CTA-Banner'
import SurveyModal from './components/Survey-Modal'
import VueSticky from 'vue-sticky' // Es6 module
import { appAnalytics } from '@/analytics'

jQuery(document).ready(function () {
  jQuery('.spinner-container').appendTo('body')
})

export default {
  name: 'app',

  data () {
    return {}
  },

  components: {
    AppFooter,
    CTABanner,
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
    closeModal () {
      this.$store.commit('showGetNotifiedModal', false)
    },

    socialMediaClick (media, location) {
      appAnalytics.socialMediaClick(media, location)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/css/styles';

/*navbar*/
#sub-nav {
  width:100%;
  z-index:3;

  .navbar-brand img {
    max-width: 30px;
    max-height: 30px;
  }

  &>.navbar.navbar-light {
    padding: 0 10px;
    background-color: transparent;

    .text-color--white > .nav-link {
      color: #FFF !important;
    }

    .navbar-collapse {
      height: 60px;
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

#getNotified {
  .modal-dialog{
    max-width:100% ;
    /*background-image:url('./assets/images/backgrounds/whiteWave.png');*/

    #getNotified__BV_body_.modal-body {
      .cta-banner {
        width:100%;
        margin-top: 40px;
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
  .close-modal {
    position: absolute;
    right: 20px;

    &:hover {
      cursor: pointer
    }
  }
}

.warn {
  color: $matryx-red;
}


@media screen and (max-width: 767px) {
  #sub-nav {
    display:none;
  }
}
</style>
