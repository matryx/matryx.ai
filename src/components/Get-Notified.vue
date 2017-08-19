<template lang="html">
  <section :class="{ 'purple-bkg': purpleBkg }">
    <b-form class="form-inline cta__form">
      <input class="form-control cta__form__email"
        v-model="email"
        type="email"
        placeholder="your@email.com"
      >
      <button class="btn btn-yellow cta__form__submit"
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


  .cta__form {
    display: flex;
    justify-content: center;
  }

  .cta__form__email {
    border-radius: 20px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    height: 42px;
    border-right: none;
    font-size: 14px;
    width: 250px;
    padding-left: 20px;

    &:active, &:focus {
      outline: none;
    }
  }

  .cta__form__submit {
    border-radius: 20px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 40px;
    width: 150px;
    text-transform: uppercase;
  }

  .cta-btn-green {
    background-color: $green;
    color: $white;
  }

.purple-bkg {
  background-color: $purple;
  color: $white;
}

.purple-btn {
  border: none;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 500px) {
  .cta {
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
