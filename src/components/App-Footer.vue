<template>
  <footer>
    <CTA-Banner :lighterText="true"
      :footerBkg="true"
      :cta-location="bottomAndPage"
      id="Footer"
    >
    </CTA-Banner>

    <div class="footer__social">
      <!-- <a href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ" target="_blank">
        <img class="footer__social__icon" src="../assets/icons/slack.svg" alt="Slack">
      </a> -->
      <a href="https://blog.matryx.ai/" target="_blank" @click="socialMediaClick('blog', 'footer')">
        <img class="footer__social__icon" src="../assets/icons/medium.svg" alt="Blog">
      </a>
      <a href="https://t.me/matryxai" target="_blank" @click="socialMediaClick('telegram', 'footer')">
        <img class="footer__social__icon" src="../assets/icons/telegram.svg" alt="Telegram">
      </a>
      <a href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8080%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=matryx_ai&tw_p=followbutton" target="_blank" @click="socialMediaClick('twitter', 'footer')">
        <img class="footer__social__icon" src="../assets/icons/icon-twitter.gif" alt="Twitter">
      </a>
      <a href="https://www.linkedin.com/company-beta/11238967/" target="_blank" @click="socialMediaClick('linkedin', 'footer')">
      <img class="footer__social__icon" src="../assets/icons/icon-linkedin.png" alt="LinkedIn">
      </a>
      <a href="https://www.facebook.com/matryxai/" target="_blank" @click="socialMediaClick('facebook', 'footer')">
        <img class="footer__social__icon" src="../assets/icons/icon-facebook.png" alt="Facebook">
      </a>
    </div>

    <div class="footer__legal">
      <img src="../assets/images/Matryx-Logo-White-640px.png" alt="Logo">
      <p class="font-size--small text-color--white"><a href="/privacy-policy.pdf">Privacy Policy</a></p>
      <p class="font-size--small text-color--white">
        &copy; 2017 All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { appAnalytics } from '@/analytics'
import CTABanner from '@/components/CTA-Banner'

export default {
  name: 'AppFooter',

  components: { CTABanner },

  data () {
    return {
      bottomAndPage: `Bottom - ${this.$route.name}`
    }
  },

  methods: {
    socialMediaClick (media, location) {
      appAnalytics.socialMediaClick(media, location)
    }
  }
}
</script>

<style lang="scss">
footer {
  margin-top: -20px;
  width: 100%;
  position:relative;

  #Footer {
    background-position: top;
    padding: 80px 20px 60px 20px;
    position: relative;
    bottom: -125px;
    margin-bottom: 0;
  }

  .footer__legal {
    float: left;

    p {
      opacity: 0.8;
      margin-left: 50px;
    }

    img {
      width: 100px;
      margin-bottom: 20px;
    }
  }
  .footer__social {
    float:right;
    padding-right: 50px;
    bottom: 20px;
    position:absolute;
    right: 0;

    &__icon {
      width: 50px;
      height: 50px;
      padding: 10px;
    }
  }
}

@media screen and (max-width: 767px) {
  footer .footer__social {
    position: relative;
    margin: 40px auto 0;
    padding-right: 0;
    float: none;
    text-align: center;
  }

// }

// @media screen and (max-width: 550px) {
  footer {
    #Footer {
      bottom: -220px;
      padding: 100px 0 170px;
    }
  }
}
</style>
