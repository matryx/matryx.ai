<template lang="html">
  <section :class="{ 'grey-bkg': greyBkg, 'white': white, 'white-bkg':whiteBkg, 'bkg-footer':footerBkg }" class="cta-banner">
    <div class="cta content-container content-container--large">
      <h4 class="cta__main text-color--matryx-blue">
        Join the Token Sale
      </h4>
      <h6 :class="{ 'lighter-text':lighterText  }" class="cta__desc text-color--matryx-dark-grey">Enter your email address to stay updated on the token sale launch</h6>
      <Get-Notified  :ctaLocation="ctaLocation">
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
    lighterText: Boolean,
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

.lighter-text {
  color: #fff !important;
  opacity: 0.9;
}

section.cta-banner.white-bkg {
  background-color: #333C44;
  background-image: url('../assets/images/backgrounds/whiteWave.png');
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
    bottom: -220px;
    padding: 100px 0 170px;
  }

 .cta-middle-banner .cta-banner  {
    top: 0;
    position: relative;
    padding: 180px 0 90px;
    margin-top: -130px;
  }

 section.cta-banner.white-bkg {
    padding: 140px 0px;
    margin-top: -180px;
  }
}

</style>
