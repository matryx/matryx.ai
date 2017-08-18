<template>
  <div class="body-content">
    <!-- <Navbar></Navbar> -->
    <Above-the-Fold></Above-the-Fold>
    <div class="media-mentions bkg-color--white">
      <div class=" content-container content-container--large media-mentions__img-container">
        <p>Featured By</p>
        <img src="../../assets/images/gizmodo.png" alt="">
        <img src="../../assets/images/sdut-logo.png" alt="">
        <img src="../../assets/images/UCSD-logo.png" alt="">
        <img src="../../assets/images/singularity.png" alt="">
      </div>
    </div>
    <Company-Overview id="company-overview"></Company-Overview>
    <div class="cta-middle-banner">
      <CTA-Banner :purpleBkg="true":white="true" cta-location="Top-Middle"></CTA-Banner>
    </div>
    <About-Token-Sale></About-Token-Sale>
    <Quotes></Quotes>
    <Nanome-Info></Nanome-Info>
    <Bounty-System></Bounty-System>
    <CTA-Banner cta-location="Bottom-Middle"></CTA-Banner>
    <Matryx-Team></Matryx-Team>
    <News-Events></News-Events>
    <CTA-Banner :purpleBkg="true" cta-location="Bottom" id="cta-bottom"></CTA-Banner>
  </div>
</template>

<script>
import AboutTokenSale from './About-Token-Sale'
import AboveTheFold from './Above-the-Fold'
import BountySystem from './Bounty-System'
import CompanyOverview from './Company-Overview'
import MatryxTeam from './Matryx-Team'
import NanomeInfo from './Nanome-Info'
import Navbar from './Navbar'
import NewsEvents from './News-Events'
import Quotes from './Quotes'

import CTABanner from '../../components/CTA-Banner'

export default {
  name: 'home',

  data () {
    return {}
  },

  components: {
    AboutTokenSale,
    AboveTheFold,
    BountySystem,
    CompanyOverview,
    MatryxTeam,
    NanomeInfo,
    Navbar,
    NewsEvents,
    CTABanner,
    Quotes
  },

  mounted () {
    window.analytics.page('Home')
  }
}
</script>

<style lang="scss">
.cta-middle-banner {
  position: relative;
  height: 350px;
  // background-size: 100% 100%;
  // background-position: stretch;
  // background-image: url('../../assets/images/backgrounds/BG_MIDDLE.svg');
  // background-repeat: no-repeat;

  .cta-banner {
    top: 35px;
    position: relative;
  }
}
</style>
