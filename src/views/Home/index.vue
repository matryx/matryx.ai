<template>
  <div class="body-content" style="background-color:#FFF;">
    <Navbar-Token></Navbar-Token>
    <Navbar-Sticky></Navbar-Sticky>
    <Above-the-Fold></Above-the-Fold>  <!-- tokensale-button -->
    <About-Matryx></About-Matryx>
    <Nanome-Info></Nanome-Info>

    <!--<div class="cta-middle-banner">
      <CTA-Banner :lighterText="true" :blueBkg="true" cta-location="Very Top"></CTA-Banner>
    </div>-->
    <!-- <div class="cta-middle-banner">
      <CTA-Banner :lighterText="true" :greyBkg="true" cta-location="Middle"></CTA-Banner>
    </div> -->
    <Company-Overview id="company-overview"></Company-Overview>

    <Bounty-System></Bounty-System>

    <!-- <div class="bkg-color--matryx-lighter-grey"> -->
    <!-- <Token-Sale></Token-Sale> -->
    <!-- </div> -->

    <!-- <div class="cta-middle-banner">
      <CTA-Banner :lighterText="true" :blueBkg="true" cta-location="Top"></CTA-Banner>
    </div> -->

    <About-Token-Sale></About-Token-Sale>
    <Audited-By></Audited-By>
    <Quotes></Quotes>

    <!-- <CTA-Banner :whiteBkg="true" cta-location="Bottom"></CTA-Banner> -->
    <Matryx-Team></Matryx-Team>
    <Media-Mentions></Media-Mentions>
    <News-Events></News-Events>
<!--     <CTA-Banner :lighterText="true" :footerBkg="true" cta-location="Bottom" id="Footer"></CTA-Banner> -->
  </div>
</template>

<script>
import AboutTokenSale from './About-Token-Sale'
import AboveTheFold from './Above-the-Fold'
import BountySystem from './Bounty-System'
import CompanyOverview from './Company-Overview'
import MatryxTeam from './Matryx-Team'
import MediaMentions from './Media-Mentions'
import NanomeInfo from './Nanome-Info'
import NavbarSticky from './Navbar-Sticky'
import NewsEvents from './News-Events'
import Quotes from './Quotes'
import CTABanner from '@/components/CTA-Banner'
import NavbarToken from '@/components/Navbar-Tokensale'
import PreSale from './Pre-Sale'
import TokenSale from './Token-Sale'
import AboutMatryx from './About-Matryx'
import AuditedBy from '@/components/Audited-By'

export default {
  name: 'home',

  components: {
    AboutTokenSale,
    AboveTheFold,
    BountySystem,
    CompanyOverview,
    MatryxTeam,
    MediaMentions,
    NanomeInfo,
    NavbarSticky,
    NewsEvents,
    Quotes,
    CTABanner,
    NavbarToken,
    PreSale,
    TokenSale,
    AboutMatryx,
    AuditedBy
  },

  beforeRouteUpdate (to, from, next) {
    this.$store.commit('setAppNavVisibility', true)
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit('setAppNavVisibility', false)
    next()
  },

  mounted () {
    document.title = 'Matryx: A Decentralized Collaboration Platform'

    window.analytics.page('Home')

    if (this.$route.query.allocation === 'open') {
      this.$store.commit('showModal', true)
    }

    if (this.$route.query.email) {
      this.$store.commit('setEmail', this.$route.query.email)
    }
  },
  data () {
    return {
      showPreSale: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors';

.warn {
  color: $matryx-red;
}

/*media mentions*/
.content-container{
  padding: 0;
}
</style>
