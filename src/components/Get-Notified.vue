<template lang="html">
  <section :class="{ 'purple-bkg': purpleBkg }">
    <b-form class="form-inline cta__form">
      <input class="cta__form__email"
        v-model="email"
        type="email"
        placeholder="your@email.com"
      >
      <button class="btn btn-cta-blue cta__form__submit"
        :class="{ 'purple-btn': purpleBkg }"
        @click.prevent="getNotified"
      >
        <span class="russian" v-if=" language === 'ru' ">
          ПОЛУЧАЙТЕ <span class="line-break"></span> УВЕДОМЛЕНИЯ
        </span>
        <span v-else-if=" language === 'ch' ">
          接收通知
        </span>
        <span class="german" v-else-if=" language === 'ge' ">
          MICH BENACHRICHTIGEN
        </span>
        <span v-else-if=" language === 'ja' ">
          通知を受ける
        </span>
        <span v-else-if=" language === 'ko' ">
          알림을 받으세요
        </span>
        <span v-else>
          Get Notified
        </span>
      </button>
    </b-form>
    <p class="warn" v-show="showEmailWarning">
      <span v-if=" language === 'ru' ">
        Пожалуйста, введите верный адрес эл. почты
      </span>
			<span v-else-if=" language === 'ch' ">
        请输入有效的电子邮箱地址
      </span>
			<span v-else-if=" language === 'ge' ">
        Bitte geben Sie eine gültige E-Mail-Adresse ein
      </span>
			<span v-else-if=" language === 'ja' ">
        有効なメールアドレスを入力してください
      </span>
			<span v-else-if=" language === 'ko' ">
        유효한 이메일 주소를 입력해 주세요
      </span>
			<span v-else>
        Please enter a valid email address
      </span>
    </p>

    <div class="spinner-container" v-show="showSpinner">
      <div class="spinner" >
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>

    <div class="success-modal--overlay"
      id="success-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-show="openSuccessModal"
    >
    </div>
  </section>
</template>

<script>
import { getUTMS, isValidEmail } from '@/utils'
import { appAnalytics } from '@/analytics'

export default {
  name: 'GetNotified',

  props: {
    purpleBkg: Boolean,
    ctaLocation: String
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  },

  data () {
    return {
      email: '',
      openSuccessModal: false,
      showSpinner: false,
      showEmailWarning: false
    }
  },

  methods: {
    getNotified () {
      if (isValidEmail(this.email)) {
        // Close modal just in case
        this.$store.commit('showGetNotifiedModal', false)
        // Email is valid, so no need warning
        this.showEmailWarning = false
        // Set spinner to true
        this.showSpinner = true

        // Send analytics
        const traits = getUTMS()
        traits.email = this.email
        traits.ctaLocation = `${this.ctaLocation}`

        // Store email
        this.$store.commit('setEmail', this.email)

        appAnalytics.emailSignup(this.email, traits, this.ctaLocation)

        // Reset email input
        this.email = ''

        setTimeout(() => {
          this.showSpinner = false
          this.$store.commit('showModal', true)
        }, 1000)
      } else {
        this.showEmailWarning = true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles';
@import '../assets/css/colors';

  .russian {
    font-size: 10px;
  }
  .german {
    font-size: 10px;
  }

  .cta__form {
    display: flex;
    justify-content: center;

    .cta__form__email {
      padding: 0 30px 0;
      border: none;
      border-radius: 20px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      height: 40px;
      border-right: none;
      font-size: 14px;
      // width: 250px;
      // background-color: #fff;
      background-image: none;
      background-clip: padding-box;
      // color: #464a4c;
      // left: 1px;
      // position:relative;

      &:active, &:focus {
        outline: none;
      }

      &::placeholder {
        color: $matryx-darker-grey;
      }
    }

    .cta__form__submit {
      padding: 0;
      transition: all 0.3s ease-in-out;
      border-radius: 20px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      height: 40px;
      width: 150px;
      text-transform: uppercase;
      background-clip: padding-box;
      background-color: $matryx-blue;
      color:white;
      border: 1px solid $matryx-blue;

      &:hover {
        color: $matryx-blue;
        background-color: $white;
      }
    }
  }

  .white-bkg .cta__form__email {
    border: 1px solid $matryx-blue;
    border-right:none;

    &::placeholder {
      color: $matryx-darker-grey;
    }
  }

  div.cta_error {
      color: red;
      position: absolute;
      top: -30px;
      left: 0;
      font-size: 1em;
      width: 100%;
      height: inherit;
      box-shadow: 0 0 black;
      margin: 0;
  }

  .warn {
    color: $matryx-red;
  }

  .purple-bkg {
    color: $white;
  }

  .purple-btn {
    border: none;
  }


  /* SPINNER */
  .spinner-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0,0,0,0.5)
  }

  .spinner {
    width: 40px;
    height: 40px;
    position: relative;
    margin: 0 auto;
    margin-top: 45vh;
  }

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #FFF;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
    animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }

  /*----- MEDIA QUERIES -----*/
  @media screen and (max-width: 500px) {
    .cta__form, .white-bkg {
      .cta__form__email {
        width: calc(100% - 20px);
        border-right: 1px solid $matryx-blue;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
      }
      .cta__form__submit {
        width: calc(100% - 20px);
        margin-top: 10px;
        border-top-right-radius: 40px;
        border-bottom-right-radius: 40px;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
      }
    }
  }

  #cta-bottom .cta.content-container{
    padding-bottom: 0;
  }
</style>
