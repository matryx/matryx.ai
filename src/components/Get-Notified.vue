<template lang="html">
  <section :class="{ 'purple-bkg': purpleBkg }">
    <b-form class="form-inline cta__form">
      <input class="cta__form__email"
        v-model="email"
        type="email"
        placeholder="your@email.com"
      >
      <button class="btn btn-cta-blue cta__form__submit"
        v-if="!success"
        :class="{ 'purple-btn': purpleBkg }"
        @click.prevent="getNotified"
      >
        Get Notified
      </button>
      <!-- <button class="btn cta__form__submit cta-btn-green" v-else>
        Success!
      </button> -->
    </b-form>
    <p class="warn" v-show="showEmailWarning">Please enter a valid email address</p>

    <div class="spinner-container" v-show="showSpinner">
      <div class="spinner" >
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>

    <div
        class="success-modal--overlay"
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
import { getUTMS } from '@/utils'

// var submitBtn = $('.cta__form__submit'),
//     // emailInput = $('.cta__form__email');
//
// submitBtn.on('click', function(e){
//   e.preventDefault();
//
//   var email = $(this).siblings('input.cta__form__email');
//
//   $('.cta_error, .cta-success-message, .cta-loader').remove();
//   email.removeClass('cta_input_error');
//
//   var cta_input_name     = $('#cta-input-name'),
//       cta_input_email    = $('#cta-input-email'),
//       cta_input_message  = $('#cta-input-message'),
//       cta_error          = false,
//       self                  = $(this);
//
//   if(email.val() === ''){
//     email.before('<div class="cta_error">Email Address Should not be emtpy.</div>').hide().fadeIn();
//     email.addClass('cta_input_error');
//     cta_error = true;
//   } else if(!validateEmail(email.val().toLowerCase())){
//     email.before('<div class="cta_error">Email Address Should be valid.</div>').hide().fadeIn();
//     email.addClass('cta_input_error');
//     cta_error = true;
//   }
//
//   if(cta_error === false){
//     //mailchimp code here
//     ////replace conent with load animation
//     ////on success, open success modal
//
//     //open success modal
//
//   }
// });

export default {
  name: 'GetNotified',

  props: {
    purpleBkg: Boolean,
    ctaLocation: String
  },

  data () {
    return {
      email: '',
      success: false,
      openSuccessModal: false,
      showSpinner: false,
      showEmailWarning: false
    }
  },

  methods: {
    getNotified () {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.showEmailWarning = false
        this.showSpinner = true
        // console.log('hello', this.ctaLocation, this.email)
        // console.log(getUTMS(this.email))
        const traits = getUTMS(this.email)
        if (this.email) {
          window.analytics.identify(this.email, traits)
          window.analytics.track(`CTA ${this.ctaLocation} Click`, {
            category: 'Website',
            label: 'lp-cta'
          })

          this.email = ''
          this.success = true
          setTimeout(() => {
            this.success = false
          }, 1000)
        }

        // if (this.ctaLocation === 'Header') {
        // this.openSuccess = true;
        // console.log('clicked on get notified button')
        // console.log('after emit')
        // }

        setTimeout(() => {
          this.showSpinner = false
          this.$emit('subscriptionSent')
          this.openSuccessModal = true
        }, 2000)
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

        .cta__form__email {
          // border-color: $purple;
        }
      }
    }

    .cta-btn-green {
      background-color: $green;
      color: $white;
    }
  }

  .white-bkg .cta__form__email {
    border: 1px solid $purple;
    border-right:none;

    &::placeholder {
      color: $purple;
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
    height: 100vw;
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
  .cta__form {
    .cta__form__email {
      width: calc(100% - 20px);
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
