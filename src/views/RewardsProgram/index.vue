<template>
  <div class="body-content">
    <Navbar-Token></Navbar-Token>
    <Above-the-Fold></Above-the-Fold>
    <Blurb></Blurb>
    <Announcement></Announcement>
    <Ways-to-Earn></Ways-to-Earn>
    <Blogging></Blogging>
    <Team-Support></Team-Support>
  </div>
</template>

<script>
import NavbarToken from '@/components/Navbar-Tokensale'
import AboveTheFold from './Above-the-Fold'
import Blurb from './Blurb'
import Announcement from './Announcement'
import Blogging from './Blogging'
import WaysToEarn from './Ways-to-Earn'
import TeamSupport from './Team-Support'

export default {
  name: 'RewardsProgram',

  mounted () {
    window.analytics.page('Rewards')
  },

  components: {
    NavbarToken,
    AboveTheFold,
    Blurb,
    Announcement,
    Blogging,
    WaysToEarn,
    TeamSupport
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors.scss';
  footer {
    background-color: $matryx-darker-blue;
  }

</style>
