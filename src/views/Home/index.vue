<template>
  <div class="body-content">
    <Above-the-Fold></Above-the-Fold>
    <Company-Overview></Company-Overview>
    <CTA-Banner :purpleBkg="true" cta-location="top"></CTA-Banner>
    <About-Token-Sale></About-Token-Sale>
    <Quotes></Quotes>
    <Nanome-Info></Nanome-Info>
    <Bounty-System></Bounty-System>
    <CTA-Banner cta-location="bottom"></CTA-Banner>
    <Matryx-Team></Matryx-Team>
    <News-Events></News-Events>
  </div>
</template>

<script>
import AboutTokenSale from './About-Token-Sale'
import AboveTheFold from './Above-the-Fold'
import BountySystem from './Bounty-System'
import CompanyOverview from './Company-Overview'
import MatryxTeam from './Matryx-Team'
import NanomeInfo from './Nanome-Info'
import NewsEvents from './News-Events'
import Quotes from './Quotes'

import CTABanner from '../../components/CTA-Banner'

console.log(AboveTheFold)

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
    NewsEvents,
    CTABanner,
    Quotes
  }
}
</script>
