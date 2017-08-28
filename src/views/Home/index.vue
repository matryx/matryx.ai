<template>
  <div class="body-content">
    <Navbar-Token></Navbar-Token>
    <Navbar-Sticky></Navbar-Sticky>
    <Above-the-Fold></Above-the-Fold>
    <div class="media-mentions bkg-color--white">
      <div class=" content-container content-container--medium media-mentions__img-container">
        <p class="text-color--matryx-grey">Featured in</p>
        <a class="press-logo" href="https://www.gizmodo.com.au/2017/01/you-can-do-maths-in-virtual-reality-now/" target="_blank">
          <img src="../../assets/images/press/gizmodo.png" alt=""></a>
        <a class="press-logo" href="http://markets.businessinsider.com/news/stocks/Virtual-Reality-Software-Maker-Nanome-Introduces-Matryx-with-Token-Sale-1002282833?utm_source=matryx&utm_medium=web" target="_blank">
          <img src="../../assets/images/press/business-insider.png" alt=""></a>
        <a class="press-logo" href="http://www.sandiegouniontribune.com/business/sd-fi-ignite-conference-20170223-story.html" target="_blank">
          <img src="../../assets/images/press/sdut-logo.png" alt=""></a>

        <a class="press-logo" href="http://jacobsschool.ucsd.edu/news/news_releases/release.sfe?id=2081" target="_blank">
          <img src="../../assets/images/press/UCSD-logo.png" alt=""></a>
        <a class="press-logo" href="http://sdtimes.com/nanome-launches-vr-collaboration-platform-matryx/" target="_blank">
          <img src="../../assets/images/press/sd_times.png" alt=""></a>
        <a class="press-logo" href="https://singularityhub.com/2017/01/18/get-ready-to-love-math-with-this-sweet-vr-calculator/" target="_blank">
          <img src="../../assets/images/press/singularity.png" alt=""></a>
      </div>
    </div>
    <AboutMatryx></AboutMatryx>
    <PreSale></PreSale>
    <div class="cta-middle-banner">
      <CTA-Banner :lighterText="true" :blueBkg="true" cta-location="Top"></CTA-Banner>
    </div>
    <div class="bkg-color--matryx-lighter-grey">
      <TokenSale></TokenSale>
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
    NavbarSticky,
    NewsEvents,
    CTABanner,
    Quotes,
    NavbarToken,
    PreSale,
    TokenSale,
    AboutMatryx
  },

  mounted () {
    window.analytics.page('Home')
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
.media-mentions {
  display:-webkit-box;display:-ms-flexbox;display:flex;
  flex-direction: column;

  p{
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
  a{
    opacity: 0.2;
    padding: 25px;
  }
  a:hover{
    opacity: 1;
    transition: all 0.3s;
  }

  &__img-container {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      max-width: 200px;
      padding: 10px;
    }
  }
}

@media screen and (max-width: 500px) {
  .media-mentions__img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}

</style>
