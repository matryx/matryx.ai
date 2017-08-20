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
      <button class="btn cta__form__submit cta-btn-green" v-else>
        Success!
      </button>
    </b-form>

  </section>
</template>

<script>
import { getUTMS } from '@/utils'

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
      width: 250px;
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
