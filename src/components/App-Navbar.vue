<template>
  <div id="sub-nav" class="bkg-color--dark-blue-gradient" :class="{ 'mobile-hide' : isHome }">
    <b-navbar toggleable toggle-breakpoint="sm" class="content-container content-container--xlarge">
      <b-nav-toggle target="sub-nav-toggle"></b-nav-toggle>
      <b-navbar-brand>
        <a href="/" target="_self" class="navbar-brand">
          <img src="../assets/images/Matryx-Mark-White.png" alt="Matryx">
        </a>
      </b-navbar-brand>

      <b-collapse is-nav id="sub-nav-toggle">
        <b-nav is-nav-bar>
          <b-nav-item class="text-color--white"
            aria-disabled="false"
            href="#token-sale-section"
            target="_self"
          >
            <span class="russian" v-if=" language === 'ru' ">
              ПРОДАЖА ТОКЕНОВ
            </span>
            <span v-else-if=" language === 'ch' ">代金券销售</span>
            <span v-else-if=" language === 'ge' ">TOKEN-VERKAUF</span>
            <span v-else-if=" language === 'ja' ">トークンセール</span>
            <span v-else-if=" language === 'ko' ">토큰판매</span>
            <span v-else-if=" language === 'es' ">VENTA DE TOKEN</span>
            <span v-else>TOKEN SALE</span>
          </b-nav-item>

          <b-nav-item class="text-color--white"
            aria-disabled="false"
            href="/faq/about/what-is-matryx"
            target="_self"
          >
            <span v-if="language === 'ch'"> 常见问题 </span>
            <span v-else>FAQ</span>
          </b-nav-item>

          <b-nav-item class="text-color--white"
            aria-disabled="false"
            href="https://blog.matryx.ai/matryx-bounty-campaign-expanded-71e5663e16e"
            target="_blank"
          >
            <span v-if="language === 'ch'">奖励</span>
            <span v-if="language === 'es'">RECOMPENSAS</span>
            <span v-else>REWARDS</span>
          </b-nav-item>


          <b-nav-item class="text-color--white"
            href="/press-kit"
          >
            <span v-if=" language === 'ru' ">для прессы</span>
            <span v-else-if=" language === 'ch' ">新闻报道</span>
            <span v-else-if=" language === 'ge' ">PRESSE</span>
            <span v-else-if=" language === 'ja' ">プレス</span>
            <span v-else-if=" language === 'ko' ">보도자료</span>
            <span v-else-if=" language === 'es' ">PRENSA</span>
            <span v-else>PRESS</span>
          </b-nav-item>
          <b-nav-item class="text-color--white"
            aria-disabled="false"
            href="mailto:team@matryx.ai?subject=Matryx Token Sale"
            target="_self"
          >
            <span v-if=" language === 'ru' ">контакты</span>
            <span v-else-if=" language === 'ch' ">联系人</span>
            <span v-else-if=" language === 'ge' ">KONTAKT</span>
            <span v-else-if=" language === 'ja' ">問い合わせ</span>
            <span v-else-if=" language === 'ko' ">연락처</span>
            <span v-else-if=" language === 'es' ">CONTACTO</span>
            <span v-else>CONTACT</span>
          </b-nav-item>
          <b-nav-item class="text-color--white"
            aria-disabled="false"
            href="https://blog.matryx.ai/"
            target="_blank"
          >
            <span v-if=" language === 'ru' ">блог</span>
            <span v-else-if=" language === 'ch' ">博客</span>
            <span v-else-if=" language === 'ge' ">BLOG</span>
            <span v-else-if=" language === 'ja' ">ブログ</span>
            <span v-else-if=" language === 'ko' ">블로그</span>
            <span v-else>BLOG</span>
          </b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto" :class="{ 'space-end': !isHome }">
          <b-nav-item class="social-icon"
            href="https://t.me/matryxai"
            aria-disabled="false"
            target="_blank"
            rel="noopener"
            @click="socialMediaClick('telegram', 'navbar')"
          >
            <img src="../assets/icons/icon-telegram.svg" alt="telegram">
          </b-nav-item>
          <b-nav-item class="social-icon"
            onclick="window.open( 'https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8080%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=matryx_ai&tw_p=followbutton', 'newwindow', 'width=400px,height=500'); return false;"
            aria-disabled="false"
            target="_blank"
            rel="noopener"
            @click="socialMediaClick('twitter', 'navbar')"
          >
            <img src="../assets/icons/icon-twitter.png" alt="twitter">
          </b-nav-item>
          <b-nav-item class="social-icon"
          href="https://www.facebook.com/matryxai/"
            aria-disabled="false"
            target="_blank"
            rel="noopener"
            @click="socialMediaClick('facebook', 'navbar')"
          >
            <img src="../assets/icons/icon-facebook.png" alt="facebook">
          </b-nav-item>
          <b-nav-item class="nav-item-language" v-show="isHome">
            <b-form-select
              v-model="selectedLanguage"
              :options="languages"
              @input="changeLanguage"
            >
            </b-form-select>
          </b-nav-item>
        </b-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',

  data () {
    return {
      selectedLanguage: 'en',
      languages: [
        { value: 'en', text: 'English' },
        // { value: 'ru', text: 'русский' },
        { value: 'ch', text: '中文' }
        // { value: 'ge', text: 'Deutsche' },
        // { value: 'ja', text: '日本語' }
        // { value: 'ko', text: '한국어' },
        // { value: 'es', text: 'Español' }
      ]
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    isHome () {
      return this.$route.name === 'Home'
    }
  },
  methods: {
    changeLanguage () {
      this.$store.commit('setLanguage', this.selectedLanguage)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors';

/*navbar*/
#sub-nav {
  width:100%;
  z-index: 100001;

  button.navbar-toggler {
    background-color:#FFF;
    margin-top:3px;
  }

  #sub-nav--toggle {
    display: flex;
    align-items: center;
  }

  .ml-auto.nav.navbar-nav.nav-right.nav-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 240px;
  }

  .navbar-brand {
    height: 100%;

    img {
      max-width: 30px;
      max-height: 30px;
    }
  }

  &>.navbar.navbar-light {
    padding: 0 10px;
    background-color: transparent;

    .text-color--white > .nav-link {
      color: #FFF;
      font-size: 11px;
    }

    // .navbar-collapse {
    //   height: 60px;
    // }

    .nav-item{
      height: 100%;

      &:not(.social-icon):not(.nav-item-language):hover {
        background-color: $matryx-blue;
        cursor: pointer;
      }

      .nav-link {
        height: 100%;

        span {
          font-size: 12px;
          color: $white;
          line-height:50px;
          border-radius: 0;
          transition: background-color 0s;
        }

        .btn-group > .btn:first-child {
          margin: 10px;
          background-color: transparent;
          border:1px solid #FFF;
          color:#FFF;

          &:hover, &:active, &:focus {
            background-color:#FFF;
            color: $matryx-dark-grey;
          }
        }
      }

      .social-icon .nav-link img {
        width: 29px;
        height: 29px;
        margin-bottom: 2px;
        vertical-align: baseline;
      }

      .social-icon .nav-link {
        &:hover {
          background-color: transparent;
        }
        &:active {
          outline: none;
        }
        &:focus {
          outline: none;
        }
      }
    }

    .social-icon-holder {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .social-icon {
      background-color: transparent;
      height: 60px;
      width: 60px;
      margin: 0;
      padding: 10px 0px;

      a {
        line-height: 30px;

        img { vertical-align:baseline; }
      }
    }

    .nav-item.nav-item-language {
      padding: 3px 0;
      width: 140px;
      margin-left: 5px;
      margin-top: 5px;

      select.form-control.custom-select {
        font-size: 13px;
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 40px;
        height:30px;
        width: 100%;
        padding-left: 20px;
        padding-top: 5px;
        text-transform: uppercase;
      }
    }
    // When language goes away
    .navbar-nav.nav-right.space-end {
      display: flex;
      justify-content: space-around;
      width: 150px;
    }
  }
}

@media screen and (max-width: 767px) {
  .mobile-hide {
    display:none;
  }

  #sub-nav {
    .navbar.navbar-light {
      padding: 0;

      .navbar-brand  {
        margin-left: 10px;
      }

      #sub-nav-toggle {
        padding-left: 0px;
        padding-right: 0px;

        .nav-item {
          padding-left: 20px;
        }

        .ml-auto.navbar-nav {
          flex-direction: row;
        }
      }
    }
  }

}
</style>
