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
      success: false
    }
  },

  methods: {
    getNotified () {
      console.log('hello', this.ctaLocation, this.email)
      console.log(getUTMS(this.email))
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
        }, 3000)
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
