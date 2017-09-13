<template>
  <div id="app" class="bkg-color--white">
    <App-Navbar></App-Navbar>

    <Survey-Modal></Survey-Modal>
    <Sale-Modal></Sale-Modal>
    <Check-MTX-Modal></Check-MTX-Modal>

    <b-modal id="getNotified"
      v-model="showGetNotifiedModal"
      no-close-on-esc
      no-close-on-backdrop
      hide-header
    >
      <div class="close-modal text-muted" @click.prevent="closeModal">X</div>
      <CTA-Banner ctaLocation="Header"></CTA-Banner>
    </b-modal>

    <transition name="fade">
      <router-view></router-view>
    </transition>

    <App-Footer></App-Footer>

    <!-- Loaders that take up the whole page -->
    <Loader v-show="!loaded"></Loader>
    <Pulse-Spinner v-show="showPulseSpinner"></Pulse-Spinner>

  </div>
</template>

<script>
import AppNavbar from './components/App-Navbar'
import AppFooter from './components/App-Footer'
import CTABanner from './components/CTA-Banner'
import Loader from './components/Loader'
import PulseSpinner from './components/Pulse-Spinner'
import SurveyModal from './components/Survey-Modal'
import SaleModal from './components/Sale-Modal'
import CheckMTXModal from './components/Check-MTX-Modal'
import VueSticky from 'vue-sticky' // Es6 module
import { appAnalytics } from '@/analytics'
import { mapState } from 'vuex'

export default {
  name: 'app',

  components: {
    AppNavbar,
    AppFooter,
    CTABanner,
    Loader,
    PulseSpinner,
    SurveyModal,
    SaleModal,
    CheckMTXModal
  },

  directives: {
    'sticky': VueSticky
  },

  computed: mapState({
    showGetNotifiedModal: state => state.showGetNotifiedModal,
    loaded: state => state.routeLoaded,
    showPulseSpinner: state => state.showPulseSpinner
  }),

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
