<template lang="html">
  <section class="bkg-color--purple">
    <div class="content-container content-container--small" >
      <h1 class="text-color--white">What People are Saying</h1>

      <b-carousel id="quote-carousel" indicators :interval="3000">

      <b-carousel-slide>
        <p class="quote-text text-color--white">
          Mollit commodo in exercitation duis irure sit fugiat non consequat pariatur exercitation labore tempor nulla eu elit dolor.
        </p>
        <h3 class="quote-author text-color--white">
          <span class="quote-author__name">John Smith</span>
          <span class="quote-author__company">company name</span>
        </h3>
      </b-carousel-slide>
      <b-carousel-slide >
        <p class="quote-text text-color--white">
          Proident aliqua exercitation incididunt nostrud irure eiusmod nulla aute pariatur.
        </p>
        <h3 class="quote-author text-color--white">
          <span class="quote-author__name">John Smith</span>
          <span class="quote-author__company">company name</span>
        </h3>
      </b-carousel-slide>

    </b-carousel>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Quotes',
  methods: {
    onSlide (slide) {
      this.sliding = true
    },
    onSlid (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss">
.carousel-indicators {
  position:relative;

  li{
    height: 10px;
    width: 10px;
    border: none;
    border-radius: 50px;
    max-width: 10px;
  }
}
.quote-text {
  opacity: 0.7;
  font-style: italic;
}
.quote-author {
  float: right;

  &__name {
    font-weight: bold;
    display:block;
    text-align:right;
  }
  &__company {
    display:block;
    text-align:right;
  }
}
</style>
