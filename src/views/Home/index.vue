<template>
  <div class="body-content">

    <Above-the-Fold></Above-the-Fold>
    <Company-Overview></Company-Overview>
    <What-is-Matryx></What-is-Matryx>
    <Matryx-Marketplace></Matryx-Marketplace>
    <Bounty-System></Bounty-System>
    <About-Token-Sale></About-Token-Sale>
    <Roadmap></Roadmap>
    <CTA-Banner></CTA-Banner>
    <Nanome-Info></Nanome-Info>
    <Matryx-Team></Matryx-Team>
    <News-Events></News-Events>

  </div>
</template>

<script>
import AboutTokenSale from './About-Token-Sale'
import AboveTheFold from './Above-the-Fold'
import BountySystem from './Bounty-System'
import CompanyOverview from './Company-Overview'
import MatryxMarketplace from './Matryx-Marketplace'
import MatryxTeam from './Matryx-Team'
import NanomeInfo from './Nanome-Info'
import NewsEvents from './News-Events'
import Roadmap from './Roadmap'
import WhatIsMatryx from './What-is-Matryx'

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
    MatryxMarketplace,
    MatryxTeam,
    NanomeInfo,
    NewsEvents,
    Roadmap,
    WhatIsMatryx,
    CTABanner
  }
}
</script>
