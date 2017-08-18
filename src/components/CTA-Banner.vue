<template lang="html">
  <section :class="{ 'purple-bkg': purpleBkg }">
    <div class="cta content-container content-container--large">
      <h4 class="cta__main">
        Join the Token Sale
      </h4>
      <h6>Enter your email address to stay updated on the token sale launch</h6>
      <b-form class="form-inline cta__form">
        <b-form-input class="form-control cta__form__email"
        size="lg"
        v-model="email"
        type="email"
        placeholder="your@email.com"
        >
        </b-form-input>
        <button class="btn btn-yellow cta__form__submit"
        :class="{ 'purple-btn': purpleBkg }"
        @click.prevent="getNotified"
        >
        Get Notified
        </button>
      </b-form>
    </div>
  </section>
</template>

<script>
import { getUTMS } from '@/utils'

export default {
  name: 'CTABanner',

  props: {
    white: Boolean,
    purpleBkg: Boolean,
    ctaLocation: String
  },

  data () {
    return {
      email: ''
    }
  },

  methods: {
    getNotified () {
      console.log('hello', this.ctaLocation, this.email)
      console.log(getUTMS())
      window.analytics.track(`CTA ${this.ctaLocation} Click`)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.cta {
  text-align: center;

  &__form {
    display: flex;
    justify-content: center;
  }
}

.purple-bkg {
  background-color: $purple;
  color: $white;
}

.purple-btn {
  border: none;
}

.cta .cta__form__email {
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 42px;
  border-right: none;
  font-size: 12px;
  width: 200px;

  &:active, &:focus {
    outline: none;
  }
}

.cta .cta__form__submit {
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 40px;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 500px) {
  .cta .cta__form__email {
    width: calc(100% - 20px);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  .cta .cta__form__submit {
    width: calc(100% - 140px);
    margin-top: 10px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
}
</style>
