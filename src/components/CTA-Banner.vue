<template lang="html">
  <div class="cta">
    <h4 class="cta__main" :class="{ 'white': white }">
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
      <button class="btn btn-lg btn-yellow cta__form__submit"
        @click.prevent="getNotified"
      >
        Get Notified
      </button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'CTABanner',

  props: {
    white: String
  },

  data () {
    return {
      email: ''
    }
  },

  methods: {
    getNotified () {
      console.log('hello')
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

.cta .cta__form__email {
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 40px;
  border: 1px solid $purple;
  border-right: none;
  font-size: 12px;
  width: 200px;
}

.cta .cta__form__submit {
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>

<!--     border: 1px solid #EF8A11;
    color: #EF8A11;
    padding: 10px 20px;
    background-color: #FFF; -->
