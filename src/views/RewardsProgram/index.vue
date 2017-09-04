<template>
  <div class="body-content">
    <Navbar-Token></Navbar-Token>
    <Above-the-Fold></Above-the-Fold>
    <Blurb></Blurb>
    <Announcement></Announcement>
    <Ways-to-Earn></Ways-to-Earn>
    <Blogging></Blogging>
    <Team-Support></Team-Support>
    <Content-Ideas></Content-Ideas>
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
import ContentIdeas from './Content-Ideas'

export default {
  name: 'RewardsProgram',

  components: {
    NavbarToken,
    AboveTheFold,
    Blurb,
    Announcement,
    Blogging,
    WaysToEarn,
    TeamSupport,
    ContentIdeas
  }
}
</script>

<style lang="scss">

</style>
