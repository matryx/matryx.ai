<template>
  <section id="nav" class="bkg-color--white " style="top: 0; position: -webkit-sticky;
      position: sticky;">
    <b-navbar toggleable toggle-breakpoint="sm" class="content-container content-container--medium " >
      <b-nav-toggle target="nav-toggle"></b-nav-toggle>
      <b-navbar-brand>
        <a href="#tokensale">
          <img src="../../assets/images/Matryx-Logo-Grey-CMYK.png"
            class="matryx-logo-word">
        </a>
      </b-navbar-brand>
      <b-collapse is-nav id="nav-toggle">

      <b-nav is-nav-bar>
        <b-nav-item
          class="text-color--matryx-grey nav-link--mobile-hide"
          href="#what-is-matryx">
          <span class="russian" v-if=" language === 'ru' ">относительно</span>
          <span v-else-if=" language === 'ch' ">关于</span>
          <span v-else-if=" language === 'ge' ">ÜBER</span>
          <span v-else-if=" language === 'ja' ">について</span>
          <span v-else-if=" language === 'ko' ">에 대하여</span>
          <span v-else>ABOUT</span>
        </b-nav-item>
        <b-nav-item
          class="text-color--matryx-grey nav-link--mobile-hide"
          href="#bounty-system">
          <span class="russian" v-if=" language === 'ru' ">системы вознаграждений</span>
          <span v-else-if=" language === 'ch' ">奖励金制度</span>
          <span v-else-if=" language === 'ge' ">BOUNTY-SYSTEM</span>
          <span v-else-if=" language === 'ja' ">報奨金制度</span>
          <span v-else-if=" language === 'ko' ">는 포상 제도</span>
          <span v-else>BOUNTY SYSTEM</span>
        </b-nav-item>
        <b-nav-item class="text-color--matryx-grey"
          target="_blank"
          :href="whitePaperHref"
          @click="whitePaperClick(language)"
        >
          <span class="russian" v-if=" language === 'ru' ">техническую документацию</span>
          <span v-else-if=" language === 'ch' ">白皮书</span>
          <span v-else-if=" language === 'ge' ">WHITE PAPER</span>
          <span v-else-if=" language === 'ja' ">WHITEPAPER</span>
          <span v-else-if=" language === 'ko' ">백서를</span>
          <span v-else>WHITEPAPER</span>
        </b-nav-item>
        <b-nav-item class="text-color--matryx-grey"
          target="_blank"
          href="/sale-terms.pdf"
        >
          <!-- <span class="russian" v-if=" language === 'ru' ">техническую документацию</span>
          <span v-else-if=" language === 'ch' ">白皮书</span>
          <span v-else-if=" language === 'ge' ">WHITE PAPER</span>
          <span v-else-if=" language === 'ja' ">WHITEPAPER</span>
          <span v-else-if=" language === 'ko' ">백서를</span> -->
          <span>Sale Terms</span>
        </b-nav-item>

        <!-- Only Mobile View -->
        <b-nav-item href="mailto:team@matryx.ai?subject=Matryx Token Sale" class="text-color--matryx-grey nav-link--mobile-only">
          <span v-if=" language === 'ru' ">контакты</span>
          <span v-else-if=" language === 'ch' ">联系人</span>
          <span v-else-if=" language === 'ge' ">KONTAKT</span>
          <span v-else-if=" language === 'ja' ">問い合わせ</span>
          <span v-else-if=" language === 'ko' ">연락처</span>
          <span v-else>CONTACT</span>
        </b-nav-item>
        <b-nav-item href="https://blog.matryx.ai/" target="_blank" class="text-color--matryx-grey nav-link--mobile-only">
          <span v-if=" language === 'ru' ">блог</span>
          <span v-else-if=" language === 'ch' ">博客</span>
          <span v-else-if=" language === 'ge' ">BLOG</span>
          <span v-else-if=" language === 'ja' ">ブログ</span>
          <span v-else-if=" language === 'ko' ">블로그</span>
          <span v-else>BLOG</span>
        </b-nav-item>
        <b-nav-item href="/faq/about/what-is-matryx" target="_self" class="text-color--matryx-grey nav-link--mobile-only">
          <span>FAQ</span>
        </b-nav-item>
        <b-nav-item href="/rewards" target="_self" class="text-color--matryx-grey nav-link--mobile-only">
          <span>REWARDS</span>
        </b-nav-item>
        <b-nav-item href="/press-kit" target="_self" class="text-color--matryx-grey nav-link--mobile-only">
          <span>PRESS</span>
        </b-nav-item>
        <b-nav-item class="nav-item-language nav-link--mobile-only">
          <b-form-select
            v-model="selectedLanguage"
            :options="languages"
            @input="changeLanguage">
          </b-form-select>
        </b-nav-item>


       <!-- REMOVED MOBILE ITEMS
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">PRESS</b-nav-item>
       <b-nav-item href="#" class="nav-link text-color--matryx-grey nav-link--mobile-only">LEGAL</b-nav-item>

       <b-nav-item target="_blank"
         href="https://join.slack.com/t/matryx-ai/shared_invite/MjE0MDA2MDk2ODE4LTE1MDAzMzA5ODctNDMxZWVjNGNiMQ"
         class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../../assets/icons/slack.svg" alt="Matryx Slack">
       </b-nav-item>
       <b-nav-item target="_blank" href="https://www.facebook.com/matryxai/" class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../../assets/icons/icon-facebook.png" alt="Matryx Facebook Page">
       </b-nav-item>
       <b-nav-item target="_blank" href="https://www.twitter.com/matryx_ai" class="social-icon nav-link--mobile-only bkg-color--matryx-grey">
         <img src="../../assets/icons/icon-twitter.gif" alt="Matryx Twitter Page">
       </b-nav-item>-->

     </b-nav>

      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item class="get-notified">
          <button @click.prevent="openGetNotified">
            <span class="russian" v-if=" language === 'ru' ">ПОЛУЧАЙТЕ УВЕДОМЛЕНИЯ</span>
            <span v-else-if=" language === 'ch' ">接收通知</span>
            <span class="german" v-else-if=" language === 'ge' ">MICH BENACHRICHTIGEN</span>
            <span v-else-if=" language === 'ja' ">通知を受ける</span>
            <span v-else-if=" language === 'ko' ">알림을 받으세요</span>
            <span v-else>GET NOTIFIED</span>
          </button>
        </b-nav-item>
      </b-nav>
      </b-collapse>
    </b-navbar>

  </section>
</template>

<script>
import { appAnalytics } from '@/analytics'

export default {
  name: 'NavbarSticky',

  data () {
    return {
      selectedLanguage: 'en',
      languages: [
        { value: 'en', text: 'English' },
        { value: 'ru', text: 'русский' },
        { value: 'ch', text: '中文' },
        { value: 'ge', text: 'Deutsche' },
        { value: 'ja', text: '日本語' },
        { value: 'ko', text: '한국어' }
      ],
      russianNav: false
    }
  },

  methods: {
    openGetNotified () {
      this.$store.commit('showGetNotifiedModal', true)
    },

    whitePaperClick (language) {
      appAnalytics.whitePaperClick(`Navbar - ${language}`)
    },
    changeLanguage () {
      this.$store.commit('setLanguage', this.selectedLanguage)
    }
  },

  computed: {
    language () {
      return this.$store.state.language
    },

    whitePaperHref () {
      if (this.language === 'ch') {
        return '/matryx-whitepaper-ch.pdf'
      }
      return '/matryx-whitepaper.pdf'
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/styles';

#nav {
  box-shadow: 0px 1px 10px #bdbdbd;
  width: 100%;
  z-index: 2;
  padding: 0 10px;
  margin: 0;
  min-height:60px;

  /*ul.nav.navbar-nav {
    width: 700px;
  }*/

  .russian {
    font-size: 10px;
    line-height: 10px;
  }
  .german {
    font-size: 10px;
  }

  .nav-link--mobile-only {
    display:none;
  }

  .nav-link {
    transition: all 0.3s;
    padding: 5px 10px;
    text-transform: uppercase;
    line-height: 40px;
    font-size: 11.5px;

    height: 100%;
    line-height: 50px;
    margin: 0;

    &:hover {
      cursor: pointer;
      background-color: $matryx-grey;
      color: #fff;
    }

    &.text-color--white a.nav-link{
      color: #FFF !important;
    }
  }
  .nav-item.nav-item-language {
    padding: 17px 0;

    select.form-control.custom-select {
      border: 1px solid rgba(0,0,0,0.1);
      border-radius: 40px;
      height:40px;
      width: 160px;
      padding-left: 20px;
      font-size: 16px;
      text-transform: uppercase;
    }
  }
  .navbar.navbar-light {
    width: 100%;
    min-height: 60px;
    background-color: $white;

    .content-container--large {
      width: 100%;
      margin: 0 auto;
      display: flex;
    }

    .navbar-brand {
      height: 40px;
      margin-right: 10px;

      img {
        height: 100%;
      }

      .matryx-logo-word {
        min-width: 184px;
      }
    }

    .nav-link {
      font-size: 11.5px;
      line-height: 40px;
    }

    .navbar-toggleable-sm .navbar-nav .nav-link {
      padding-right:0 !important;
      padding-left: 0 !important;
      padding-top: 0 !important;
    }
  }
  .navbar-toggleable-md .navbar-collapse {
    width: calc(100% - 130px);
  }
  .navbar-toggler.navbar-toggler-right {
    background-color: #fff;
    opacity: 0.9;
  }

  /*get notified button and modal*/
  .navbar.navbar-light .get-notified {
    margin-right: 40px;
    display: flex;
    align-items: center;
    & > .nav-link {
      padding: 3px 0 0 0 !important;

      button {
        height: 40px;
        padding: 10px 20px;
        border-radius: 40px;
        border: 1px solid $matryx-light-blue;
        color: #fff;
        outline:none;
        background-color: $matryx-light-blue !important;
        display: flex;
        align-items: center;
        line-height: 0;
        margin-top:2px;

        &:active,&:hover {
          outline: none;
          background: $white !important;
          color: $matryx-light-blue;
          /*color: #082135;*/
        }
        &:active {
          box-shadow: 1px 1px 10px #fff, -1px -1px 10px #fff;
        }
      }

      &:hover {
        background-color: transparent;
      }
    }
  }

}


// language
#language {
  padding: 10px 0;
  margin: 0 50px 0 10px;
}
  button#language__BV_button_.btn.btn-secondary.dropdown-toggle {
    background-color:none !important;
    color:#fff !important;
    border: none !important;
  }

  .language {
    button.btn.btn-secondary {
      display:none;
    }
  }

.sticky-nav {
  position:fixed;
  width: 100%;
  padding: 0 10px;
  z-index: 2;
}

nav {
  padding: 0;
  &.content-container {
    padding:0;
  }
}


/*had to put some css for this modal inside above-the-fold file
**because the modal css in above the fold is overriding this file's modal css*/
.nav-item.get-notified {
  line-height: 60px;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 991px) {

  .navbar-nav {
    align-items: flex-start;
  }
  .navbar.navbar-light .get-notified {
    margin-right: 0px;
  }
}

@media screen and (max-width: 767px) {
  #nav {
    padding: 10px;
    padding-left: 0;

    .navbar.navbar-light {

      .nav-item {
        width: 100%;
        height: 40px;

        .nav-link {
          width: 100%;
          height: 100%;
          line-height: 30px;
          margin: 0;
          padding: 5px 0 5px 20px !important;

          &:hover {
            background-color: $matryx-grey;
            color: #FFF;
            border-radius: 0;
          }
        }
      }

      .nav-item.nav-item-language {
        padding: 0px 0 0;
        width: 140px;

        .nav-link:hover {
          background-color: transparent !important;
        }

        select.form-control.custom-select {
          border: 1px solid #fff;
          height:29px;
          font-size: 13px;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 40px;
          height:30px;
          width: 140px;
          padding-left: 20px;
          text-transform: uppercase;
        }
      }

      .nav-item.get-notified {
        margin-top: 10px;

        .nav-link {
          padding-left: 10px;
          &:hover {
            background-color: transparent !important;
          }
          button {
            height: 30px;
            font-size: 13px;
          }
        }

      }

    }
    #nav-toggle {
      margin-top: 10px;
    }

    .navbar-brand {
      margin-left: 20px;
    }

    .nav-link--mobile-only {
      display:block;
    }

    .nav-link--mobile-hide {
      display:none;
    }
  }
}


</style>
