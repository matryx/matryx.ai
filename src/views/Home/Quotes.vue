<template lang="html">
  <section class="bkg-color--matryx-lighter-grey">
    <div class="content-container content-container--medium" >
      <!-- <h1 class="text-color--dark-grey">What People are Saying</h1> -->

      <carousel
          :pagination-enabled=true
          :per-page=1
          :scroll-per-page=true
          :click-target-size=20
          :autoplay=true
          :autoplay-timeout="5000">
       <slide>
         <span class="quote__quotes">&#x275D;</span>
         <p class="quote-text">
           [Matryx] will allow more people to enter into the space earlier… which will have network effects, catalyze the pace of innovation in the space, and will be as important for biotech as it is for science more generally.
         </p>
         <h5 class="quote-author">
           <span class="quote-author__name">Benjamin Bratton PhD.</span>
           <span class="quote-author__company">Sociologist, Architectural and design theorist, UC San Diego</span>
         </h5>
       </slide>
       <slide>
         <span class="quote__quotes">&#x275D;</span>
         <p class="quote-text">
           People have been waiting for this both in academia and industry. I think it’s going to disrupt some of the challenges in the life science industry and how do you bring information together. If you can imagine someone of the amazing scientists at work at these companies-- at Novartis, GSK, Pfizer, Astrozennica, whomever-- have them get together to try and solve a human health problem, as opposed to trying to do it individually…
         </p>
         <h5 class="quote-author">
           <span class="quote-author__name">Geoff Odell</span>
           <span class="quote-author__company"> Former VP of Global Operations, Novartis</span>
         </h5>
       </slide>
       <slide>
         <span class="quote__quotes">&#x275D;</span>
         <p class="quote-text">
           One thing we really like about their team is every single time we meet them, they have amazing progress. And their execution is extremely well done… they’re providing a solution that the industry really needs and no one actually has done it yet.
         </p>
         <h5 class="quote-author">
           <span class="quote-author__name">Allen Hsu</span>
           <span class="quote-author__company">Venture Capitalist, Sparkland Capital</span>
         </h5>
       </slide>
     </carousel>

    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Quotes',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

.content-container--medium{
  max-width: 750px;
  padding: 50px 0px 90px 0px;
}

.VueCarousel-slide {
  position:relative;
  padding-left: 65px;
  padding-top: 20px;
}

.VueCarousel-dot--active{
  .VueCarousel-dot-inner {
      background-color: $matryx-light-blue !important;
  }
}

.VueCarousel-dot-inner {
  background-color: $matryx-grey !important;
}

.quote__quotes {
  font-size: 80px;
  line-height: .9em;
  position: absolute;
  top: 0;
  left: 0;
  color: $matryx-light-blue;
}
.quote-text {
  font-size:20px;
  opacity: 0.8;
  font-style: italic;
  color: $matryx-darker-grey;
}
.quote-author {
  opacity: 0.8;
  float: right;
  color: $midnight-tint-2;

  &__name {
    font-size: 20px;
    font-weight: bold;
    display:block;
    text-align:right;
  }
  &__company {
    display:block;
    text-align:right;
  }
}

@media screen and (max-width: 750px) {
  .quote-text {
    font-size:14px;
  }
  .quote-author {
    &__name {
      font-size: 16px;
    }
    &__company {
      font-size:14px;
    }
  }
}
</style>
