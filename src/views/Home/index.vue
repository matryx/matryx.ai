<template>
  <div class="body-content">
    <Navbar-Token></Navbar-Token>
    <Navbar-Sticky></Navbar-Sticky>
    <Above-the-Fold></Above-the-Fold>
    <Media-Mentions></Media-Mentions>
    <About-Matryx></About-Matryx>
    <Pre-Sale></Pre-Sale>
    <div class="cta-middle-banner">
      <CTA-Banner :lighterText="true" :blueBkg="true" cta-location="Top"></CTA-Banner>
    </div>
    <div class="bkg-color--matryx-lighter-grey">
      <Token-Sale></Token-Sale>
    </div>
    <About-Token-Sale></About-Token-Sale>
    <div class="cta-middle-banner">
      <CTA-Banner :lighterText="true" :greyBkg="true" cta-location="Middle"></CTA-Banner>
    </div>
    <Company-Overview id="company-overview"></Company-Overview>
    <Quotes></Quotes>
    <Nanome-Info></Nanome-Info>
    <Bounty-System></Bounty-System>
    <CTA-Banner :whiteBkg="true" cta-location="Bottom"></CTA-Banner>
    <Matryx-Team></Matryx-Team>
    <News-Events></News-Events>
    <CTA-Banner :lighterText="true" :footerBkg="true" cta-location="Bottom" id="Footer"></CTA-Banner>
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
import CTABanner from '../../components/CTA-Banner'
import NavbarToken from '../../components/Navbar-Tokensale'
import PreSale from './Pre-Sale'
import TokenSale from './Token-Sale'
import AboutMatryx from './About-Matryx'

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
    CTABanner,
    Quotes,
    NavbarToken,
    PreSale,
    TokenSale,
    AboutMatryx
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
