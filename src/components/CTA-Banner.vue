<template lang="html">
  <section :class="{ 'grey-bkg': greyBkg, 'white': white, 'white-bkg':whiteBkg, 'bkg-footer':footerBkg }" class="cta-banner">
    <div class="cta content-container content-container--large">
      <h4 class="cta__main text-color--matryx-blue">
        Join the Token Sale
      </h4>
      <h6 class="cta__desc text-color--matryx-dark-grey">Enter your email address to stay updated on the token sale launch</h6>
       <Get-Notified  :ctaLocation="ctaLocation" >
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
    greyBkg: Boolean,
    whiteBkg: Boolean,
    footerBkg: Boolean,
    ctaLocation: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.cta {
  text-align: center;
}
.cta__form {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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



section.cta-banner.white-bkg {
  background-image: url('../assets/images/backgrounds/whitewave.png');
  background-size: cover;
  margin:-20px 0;
  background-position: center;
  padding: 80px 0px;
}

#Footer {
  background-position: top;
  padding-top: 80px;
  position: relative;
  bottom: -110px;
  padding-bottom: 60px;
  margin-bottom: 0;
}

.bkg-footer {
  background-image: url('../assets/images/backgrounds/bkg-footer.png');
  background-size:cover;
  background-repeat: no-repeat;
}


@media screen and (max-width: 550px) {
  #Footer {
    bottom: -180px;
    padding-bottom: 100px;
  }
}

</style>
