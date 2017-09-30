<template lang="html">
  <section class="bkg-color--matryx-lighter-grey">
    <div class="content-container content-container--medium" >
      <!-- <h1 class="text-color--dark-grey">What People are Saying</h1> -->

      <carousel
          :pagination-enabled=true
          pagination-active-color="#0086CB"
          pagination-color="#636A74"
          :per-page=1
          :scroll-per-page=true
          :click-target-size=20
          :loop=true
          :autoplay=true
          :autoplay-timeout="5000">
       <slide>
         <span class="quote__quotes">&#x275D;</span>
         <p class="quote-text" v-if="language === 'ch' ">
           Matryx 平台将会让更多的人更早地进入这个领域…这将带给这个平台一个网络效应，催化在各行各业的创新，这对科学，尤其是对生物科技而言是至关重要的!
         </p>
         <p class="quote-text" v-else>
           Matryx will allow more people to enter into the space earlier… which will have network effects, catalyze the pace of innovation in the space, and will be as important for biotech as it is for science more generally.
         </p>
         <h5 class="quote-author">
          <span class="quote-author__name" v-if="language === 'ch'">
           Benjamin Bratton 博士
          </span>
          <span class="quote-author__name" v-else>Benjamin Bratton PhD.</span>
          
          <span class="quote-author__company" v-if="language === 'ch'">
             社会学家，建筑师和设计理论家，加州大学圣地亚哥分校
          </span>
          <span class="quote-author__company" v-else>Sociologist, Architectural and design theorist, UC San Diego</span>
         </h5>
       </slide>
       <slide>
         <span class="quote__quotes">&#x275D;</span>
         <p class="quote-text" v-if="language === 'ch'">
           他们团队让我们最喜欢的一点就是每次我们会见，他们的产品都着有非常惊人的进步. 他们的执行能力是非常帮的！他们给出的解决方案在行业内都首屈一指而且独一无二的!
         </p>
         <p class="quote-text" v-else>
           One thing we really like about their team is every single time we meet them, they have amazing progress. And their execution is extremely well done… they’re providing a solution that the industry really needs and no one actually has done it yet.
         </p>
         <h5 class="quote-author">
          <span class="quote-author__name">Allen Hsu</span>
          <span class="quote-author__company" v-if="language === 'ch'">
            风险投资人，星火资本 (Sparkland Capital)
          </span>
          <span class="quote-author__company" v-else>
            Venture Capitalist, Sparkland Capital
          </span>
         </h5>
       </slide>
       <slide>
         <span class="quote__quotes">&#x275D;</span>
          <p class="quote-text" v-if="language === 'ch'">
           在学术界的人一直都在等待这一刻，我想乃至很多其他的行业也是！我觉得尤其是在生物科技类的学者会对这款平台充满期待.
         </p>
         <p class="quote-text" v-else>
           People have been waiting for this both in academia and I think in industry as well. And I think specifically in the scientific genres within industries, so life sciences for example have been wanting it really well.
         </p>
         <h5 class="quote-author">
            <span class="quote-author__name">Geoff Odell</span>
            <span class="quote-author__company" v-if="language === 'ch'">
              前诺华(Novartis)全球业务副主席
            </span>
            <span class="quote-author__company" v-else>
              Former VP of Global Operations, Novartis
            </span>
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
  },

  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
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
  border: 1px solid $matryx-dark-grey !important;
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
  margin-left: 15px;
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

@media screen and (max-width: 500px) {
  .VueCarousel-slide {
    position: relative;
    padding-left: 40px;
    padding-right: 20px;
    padding-top: 40px;
  }
}
</style>
