<template>
  <div id="sub-nav" class="bkg-color--dark-blue-gradient">
    <nav class="navbar navbar-light navbar-toggleable-sm">
      <button type="button"
        aria-label="Toggle navigation"
        aria-controls="sub-nav--toggle"
        aria-expanded="false"
        class="navbar-toggler navbar-toggler-right"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a aria-disabled="false"
        href="/"
        target="_self"
        class="navbar-brand"
      >
        <img src="../assets/images/Matryx-Mark-White.png" alt="Matryx Logo">
      </a>
      <div id="sub-nav--toggle"
        class="navbar-collapse collapse"
        style="display: none;"
      >
        <ul class="nav navbar-nav">
          <li class="nav-item nav-link text-color--white"
          >
            <router-link aria-disabled="false"
              to="/"
              target="_self"
              class="nav-link"
            >
              <span class="russian" v-if=" language === 'ru' ">
                ПРОДАЖА ТОКЕНОВ
              </span>
              <span v-else-if=" language === 'ch' ">代金券销售</span>
              <span v-else-if=" language === 'ge' ">TOKEN-VERKAUF</span>
              <span v-else-if=" language === 'ja' ">トークンセール</span>
              <span v-else-if=" language === 'ko' ">토큰판매</span>
              <span v-else>TOKEN SALE</span>
            </router-link >
          </li>

          <li class="nav-item nav-link text-color--white"
          >
            <router-link aria-disabled="false"
              to="/pre-sale"
              target="_self"
              class="nav-link"
            >
              <span v-if=" language === 'ru' ">предпродажа</span>
              <span v-else-if=" language === 'ch' ">预售</span>
              <span v-else-if=" language === 'ge' ">VORVERKAUF</span>
              <span v-else-if=" language === 'ja' ">プリセール</span>
              <span v-else-if=" language === 'ko' ">사전판매</span>
              <span v-else>PRE-SALE</span>
            </router-link >
          </li>

          <li class="nav-item nav-link text-color--white">
            <router-link aria-disabled="false"
              to="/faq"
              target="_self"
              class="nav-link"
            >
              FAQ
            </router-link>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false"
              href="/press-kit"
              target="_self"
              class="nav-link"
            >
              <span v-if=" language === 'ru' ">для прессы</span>
              <span v-else-if=" language === 'ch' ">新闻报道</span>
              <span v-else-if=" language === 'ge' ">PRESSE</span>
              <span v-else-if=" language === 'ja' ">プレス</span>
              <span v-else-if=" language === 'ko' ">보도자료</span>
              <span v-else>PRESS</span>
            </a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false"
              href="mailto:team@matryx.ai?subject=Matryx Token Sale"
              target="_self"
              class="nav-link"
            >
              <span v-if=" language === 'ru' ">контакты</span>
              <span v-else-if=" language === 'ch' ">联系人</span>
              <span v-else-if=" language === 'ge' ">KONTAKT</span>
              <span v-else-if=" language === 'ja' ">問い合わせ</span>
              <span v-else-if=" language === 'ko' ">연락처</span>
              <span v-else>CONTACT</span>
            </a>
          </li>
          <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false"
              href="https://blog.matryx.ai/"
              target="_blank"
              class="nav-link"
            >
              <span v-if=" language === 'ru' ">блог</span>
              <span v-else-if=" language === 'ch' ">博客</span>
              <span v-else-if=" language === 'ge' ">BLOG</span>
              <span v-else-if=" language === 'ja' ">ブログ</span>
              <span v-else-if=" language === 'ko' ">블로그</span>
              <span v-else>BLOG</span>
            </a>
          </li>
          <!--   <li class="nav-item nav-link text-color--white">
            <a aria-disabled="false" href="#" target="_self" class="nav-link">LEGAL</a>
          </li> -->
        </ul>
        <ul class="ml-auto nav navbar-nav nav-right"
          :class="{ 'space-end': !isHome }"
        >
          <li class="nav-item social-icon">
            <a aria-disabled="false"
              href="https://t.me/matryxai"
              target="_blank"
              rel="noopener"
              class="nav-link"
              @click="socialMediaClick('telegram', 'navbar')"
            >
              <img src="../assets/icons/icon-telegram.svg" alt="Telegram">
            </a>
          </li>
          <li class="nav-item social-icon">
            <a aria-disabled="false"
              target="_blank"
              onclick="window.open( 'https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8080%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=matryx_ai&tw_p=followbutton', 'newwindow', 'width=400px,height=500'); return false;"
              rel="noopener"
              class="nav-link"
              @click="socialMediaClick('twitter', 'navbar')"
             >
              <img src="../assets/icons/icon-twitter.png" alt="Matryx Twitter">
            </a>
          </li>
          <li class="nav-item social-icon" >
            <a aria-disabled="false"
              href="https://www.facebook.com/matryxai/"
              target="_blank"
              rel="noopener"
              class="nav-link"
              @click="socialMediaClick('facebook', 'navbar')"
            >
            <img src="../assets/icons/icon-facebook.png" alt="Matryx Facebook">
            </a>
          </li>

          <li class="nav-item nav-item-language" v-show="isHome">
            <b-form-select
              v-model="selectedLanguage"
              :options="languages"
              @input="changeLanguage"
            >
            </b-form-select>
          </li>
        </ul>
      </div>
    </nav>
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
        { value: 'ru', text: 'русский' },
        { value: 'ch', text: '中文' },
        { value: 'ge', text: 'Deutsche' },
        { value: 'ja', text: '日本語' },
        { value: 'ko', text: '한국어' }
      ]
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    isHome () {
      return this.$route.name === 'home'
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
  z-index:3;

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

  .navbar-brand img {
    max-width: 30px;
    max-height: 30px;
  }

  &>.navbar.navbar-light {
    padding: 0 10px;
    background-color: transparent;

    .text-color--white > .nav-link {
      color: #FFF;
    }

    .navbar-collapse {
      height: 60px;
    }

    .nav-link {
      color: $white;
      border-radius: 0;
      transition: background-color 0s;

      &:hover {
        background-color: $matryx-blue;
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
    }

    .social-icon .nav-link:hover {
      background-color: transparent;
    }

    .nav-item.nav-item-language {
      padding: 17px 0;
      width: 115px;
      margin-left: 5px;

      select.form-control.custom-select {
        border: 1px solid #fff;
        height:29px;
        font-size: 13px;
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
  #sub-nav {
    display: none;
  }
}
</style>
