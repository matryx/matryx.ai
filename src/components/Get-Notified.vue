<template lang="html">
  <section>
    <b-form class="form-inline cta__form">
      <input class="cta__form__email"
        v-model="email"
        type="email"
        placeholder="your@email.com"
      >
      <button class="btn btn-cta-blue cta__form__submit"
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
        this.$store.commit('togglePulseSpinner', true)

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
          this.$store.commit('togglePulseSpinner', false)
          this.$store.commit('showModal', true)
        }, 1500)
      } else {
        this.showEmailWarning = true
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/styles';

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
