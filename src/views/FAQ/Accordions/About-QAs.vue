<template>
  <div id="about-faq" class="faq__accordion">
    <div class="about-questions">
      <Question-Answer
        v-for="q in questions"
        :key="q.cssId"
        :question="q.question"
        :answer="q.answer"
        :cssId="q.cssId"
        :visible="q.visible"
        :changeRoute="changeRoute"
      >
      </Question-Answer>
   </div>
  </div>
</template>

<script>
import QuestionAnswer from '@/views/FAQ/Question-Answer'

export default {
  name: 'About-QAs',
  components: {
    QuestionAnswer
  },

  data () {
    return {
      questions: [{
        question: 'Who is Matryx',
        answer: 'A compnay',
        cssId: 'who-is-matryx',
        visible: true
      }, {
        question: 'How can I buy tokens',
        answer: 'With ETH',
        cssId: 'how-can-I-buy-tokens',
        visible: false
      }, {
        question: 'no token for you',
        answer: 'ah man',
        cssId: 'give-to-me-token',
        visible: false
      }]
    }
  },

  methods: {
    changeRoute (cssId) {
      this.$router.push({ path: `/faq/about/${cssId}` })
    }
  },

  mounted () {
    updateRoute(this, this.$route.params.question)
  },

  afterRouteUpdate (to, from, next) {
    updateRoute(this, to.params.question)
    next()
  }
}

function updateRoute (vm, question) {
  vm.questions.forEach((q, i) => {
    if (q.cssId === question) {
      console.log('q.cssId', q.cssId, 'question', question)
      vm.questions[i].visible = true
      console.log(q.visible)
    }
  })
}
</script>

<style lang="scss">
@import '../../../assets/css/faq.scss';
</style>
