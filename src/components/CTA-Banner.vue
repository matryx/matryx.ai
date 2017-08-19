<template lang="html">
  <section :class="{ 'purple-bkg': purpleBkg, 'white': white }" class="cta-banner">
    <div class="cta content-container content-container--large">
      <h4 class="cta__main">
        Join the Token Sale
      </h4>
      <h6 class="cta__desc">Enter your email address to stay updated on the token sale launch</h6>
       <Get-Notified  :ctaLocation="ctaLocation"> <!-- :purpleBkg="purpleBkg" -->
      </Get-Notified>
    </div>
  </section>
</template>

<script>
import GetNotified from '@/components/Get-Notified'

export default {
  name: 'CTABanner',

  components: { GetNotified },

  props: {
    white: Boolean,
    purpleBkg: Boolean,
    ctaLocation: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.cta {
  text-align: center;
}

.white {
  color: white;
}

.cta__main {
  font-size: 26px;
  margin-bottom: 15px;
}

.cta__desc {
  font-size: 16px;
}

.cta-middle-banner {
  position: relative;
  // background-size: 100% 100%;
  // background-position: stretch;
  // background-repeat: no-repeat;

  .cta-banner {
    top: 35px;
    position: relative;
    padding: 80px 0;
  }
}

section.cta-banner:not(.purpble-bkg) {
  background-image: url('../assets/images/backgrounds/ctawhite.png');
  background-size: cover;
  margin:-20px 0;
  background-position: center;
  padding: 80px 0px;
}

#cta-bottom.purple-bkg {
  background-image: url('../assets/images/backgrounds/ctapurplebottom.png');
  background-position: top;
  padding-top: 80px;
  background-size: cover;
}

</style>
