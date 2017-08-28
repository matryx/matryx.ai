<template lang="html">
  <section :class="{ 'grey-bkg': greyBkg, 'white': white, 'white-bkg':whiteBkg, 'bkg-footer':footerBkg, 'blueBkg': blueBkg}" class="cta-banner">
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
    ctaLocation: String,
    blueBkg: Boolean
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

  .cta-banner {
    margin: 0;
    position: relative;
    padding: 80px 0;
  }
}

.lighter-text {
  color: #fff !important;
  opacity: 0.9;
}

.white-bkg {
  background-color: #333C44;
  background-image: url('../assets/images/backgrounds/whitewave.svg');
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

.grey-bkg {
  background-image: url('../assets/images/backgrounds/greywave.svg');
  background-size:cover;
  background-position: center;
  color: $white;
}

.bkg-footer {
  background-image: url('../assets/images/backgrounds/bkg-footer.svg');
  background-size:cover;
  background-repeat: no-repeat;
}

.blueBkg {
  background-image: url('../assets/images/backgrounds/bluewave.svg');
  background-size:cover;
  background-repeat: no-repeat;
  background-position:center;
}

@media screen and (min-width: 2900px) {
  .blueBkg {
    background-image: none;
    background: rgb(8,31,54); /* Old browsers */
    background: -moz-linear-gradient(-45deg, rgba(8,31,54,1) 1%, rgba(19,72,99,1) 100%, rgba(92,95,101,1) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, rgba(8,31,54,1) 1%,rgba(19,72,99,1) 100%,rgba(92,95,101,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, rgba(8,31,54,1) 1%,rgba(19,72,99,1) 100%,rgba(92,95,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#081f36', endColorstr='#5c5f65',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
  .grey-bkg {
    background-image:none;
    background: rgb(42,46,50); /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover, rgba(42,46,50,1) 1%, rgba(92,95,101,1) 100%, rgba(92,95,101,1) 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover, rgba(42,46,50,1) 1%,rgba(92,95,101,1) 100%,rgba(92,95,101,1) 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center, rgba(42,46,50,1) 1%,rgba(92,95,101,1) 100%,rgba(92,95,101,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2a2e32', endColorstr='#5c5f65',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
  .white-bkg {
    background-image: none;
    background-color:transparent;
  }
}

@media screen and (max-width: 550px) {
  #Footer {
    bottom: -220px;
    padding: 100px 0 170px;
  }

 .cta-middle-banner .cta-banner  {
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
