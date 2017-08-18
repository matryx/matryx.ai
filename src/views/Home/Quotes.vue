<template lang="html">
  <section class="bkg-color--purple">
    <div class="content-container content-container--small" >
      <h1 class="text-color--white">What People are Saying</h1>

      <b-carousel id="quote-carousel"
                indicators
                :interval="3000"
                v-model="slide"
                @slide="onSlide"
                @slid="onSlid"
    >

      <b-carousel-slide >
        <p class="quote-text text-color--white">
          Mollit commodo in exercitation duis irure sit fugiat non consequat pariatur exercitation labore tempor nulla eu elit dolor.
        </p>
        <h3 class="quote-author">
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
  name: 'Quotes'
}
</script>

<style lang="css">
.carousel-indicators {
  height: 10px;
  width: 10px;
  border: none;
  border-radius: 50px;
  max-width: 10px;
}
.quote-text {
  opacity: 0.7;
  font-style: italic;
}
.quote-author {
  float: right;

  &__name {
    font-weight: bold;

  }
}
</style>
