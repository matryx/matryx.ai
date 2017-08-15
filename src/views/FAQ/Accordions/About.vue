<template>
  <div id="help2" class="faq__accordion">

    <span class="icon"><img src="../../../assets/icons/icon-About.svg" alt=""></span>

    <h1>About</h1>
    <div class="about-questions" v-show="$route.params.accordion === 'about'">
     <Question-Answer v-for="q in accordions.about" :key="q.cssId"
       :question="q.question"
       :answer="q.answer"
       :cssId="q.cssId"
       :visible="q.visible"
     >
     </Question-Answer>
   </div>
   <div class="about-questions" v-show="$route.params.accordion === 'general'">
    <Question-Answer v-for="q in accordions.general" :key="q.cssId"
      :question="q.question"
      :answer="q.answer"
      :cssId="q.cssId"
      :visible="q.visible"
    >
    </Question-Answer>
  </div>
  </div>
</template>

<script>
import QuestionAnswer from '@/views/FAQ/Question-Answer'

export default {
  name: 'FAQ-About',
  components: {
    QuestionAnswer
  },

  data () {
    return {
      accordions: {
        about: [{
          question: 'How can I buy tokens',
          answer: 'With ETH',
          cssId: 'how-can-I-buy-tokens',
          visible: false
        }, {
          question: 'Who is Matryx',
          answer: 'A compnay',
          cssId: 'who-is-matryx',
          visible: false
        }],
        general: [{
          question: 'babsdfasf',
          answer: 'Withfdfda ETH',
          cssId: 'how-can-I-buy-tokens',
          visible: false
        }, {
          question: 'aaaaaaaaax',
          answer: 'A compnfdsay',
          cssId: 'who-is-matryx',
          visible: false
        }]
      }
    }
  },

  mounted () {
    updateRoute(this)
  },

  beforeRouteUpdate (to, from, next) {
    // before route goes, read the params, and if it equals one of the
    // Question-Answer cssIds, then somehow make it show
    // check route
    updateRoute(this)
    next()
  }
}

function updateRoute (vm) {
  const accordion = vm.$route.params.accordion
  console.log('accordion', accordion)
  // const question = vm.$route.params.question

  vm.accordions[accordion].forEach((q, i) => {
    console.log(q, i)
    // if (q.cssId === question) {
    //   console.log('q.cssId', q.cssId, 'question', question)
    //   vm.accordions[accordion][i].visible = true
    //   console.log(q.visible)
    // }
  })
}
</script>

<style lang="scss">
@import '../../../assets/css/styles.scss';
</style>
