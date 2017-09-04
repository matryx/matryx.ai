<template>
  <div id="app">
    <App-Navbar></App-Navbar>

    <Survey-Modal></Survey-Modal>
    <Sale-Modal></Sale-Modal>

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

    <transition name="fade">
      <router-view></router-view>
    </transition>

    <App-Footer></App-Footer>

    <!-- <Loader v-show="!loaded"></Loader> -->

  </div>
</template>

<script>
import AppNavbar from './components/App-Navbar'
import AppFooter from './components/App-Footer'
import CTABanner from './components/CTA-Banner'
import Loader from './components/Loader'
import SurveyModal from './components/Survey-Modal'
import SaleModal from './components/Sale-Modal'
import VueSticky from 'vue-sticky' // Es6 module
import { appAnalytics } from '@/analytics'

jQuery(document).ready(function () {
  jQuery('.spinner-container').appendTo('body')
})

export default {
  name: 'app',

  components: {
    AppNavbar,
    AppFooter,
    CTABanner,
    Loader,
    SurveyModal,
    SaleModal
  },

  directives: {
    'sticky': VueSticky
  },

  computed: {
    showGetNotifiedModal () {
      return this.$store.state.showGetNotifiedModal
    },

    loaded () {
      return this.$store.state.routeLoaded
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
</style>
