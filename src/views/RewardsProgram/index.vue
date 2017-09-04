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
import NavbarToken from '@/components/Navbar-Token'
import AbovetheFold from '@/components/Above-the-Fold'
import Blurb from '@/components/Blurb'
import Announcement from '@/components/Announcement'
import Blogging from '@/components/Blogging'
import WaysToEarn from '@/components/Ways-to-Earn'
import TeamSupport from '@/components/Team-Support'
import ContentIdeas from '@/components/Content-Ideas'

export default {
  name: 'RewardsProgram'

  components: {
    NavbarToken,
    AbovetheFold,
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
