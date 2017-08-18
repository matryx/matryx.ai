<template lang="html">
  <section :class="{ 'purple-bkg': purpleBkg, 'white': white }" class="cta-banner">
    <div class="cta content-container content-container--large">
      <h4 class="cta__main">
        Join the Token Sale
      </h4>
      <h6 class="cta__desc">Enter your email address to stay updated on the token sale launch</h6>
      <Get-Notified :purpleBkg="purpleBkg" :ctaLocation="ctaLocation">
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

</style>
