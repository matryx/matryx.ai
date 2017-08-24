<template>
  <footer>
    <div class="footer__social">
      <a href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ" target="_blank">
        <img class="footer__social__icon" src="../assets/icons/slack.svg" alt="Slack">
      </a>
      <a href="https://blog.matryx.ai/" target="_blank" @click="socialMediaClick('blog', 'footer')">
        <img class="footer__social__icon" src="../assets/icons/medium.svg" alt="Blog">
      </a>
      <a href="https://t.me/matryxai" target="_blank" @click="socialMediaClick('telegram', 'footer')">
        <img class="footer__social__icon" src="../assets/icons/telegram.svg" alt="Telegram">
      </a>
      <a href="https://twitter.com/matryx_ai" target="_blank" @click="socialMediaClick('twitter', 'footer')">
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
      <p class="font-size--small text-color--white">
        &copy; 2017 All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import { appAnalytics } from '@/analytics'

export default {
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
  padding: 20px;
  width: 100%;
  position:relative;

  .footer__legal {
    float: left;
    p{
      opacity: 0.8;
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
    position:relative;
    position: relative;
    margin: 20px auto 0;
    padding-right: 0;
  }
}
</style>
