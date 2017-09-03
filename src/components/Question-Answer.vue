<template>
  <div class="question-answer">
    <b-btn class="faq__accordion__btn"
      block
      v-b-toggle="cssId"
      @click.prevent="changeRoute"
    >
      <slot name="question" class="faq__accordion__question"></slot>

      <span class="accordion-toggle__circle"></span>
      <span class="accordion-toggle__plus icon-bar"></span>
      <span class="accordion-toggle__minus icon-bar"></span>
    </b-btn>

    <b-collapse
      :id="cssId"
      class="faq__accordion__body show"
      accordion="faq-accordion"
      :visible="visible"
    >
      <b-card class="faq__accordion__card">
        <slot name="answer"></slot>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'Question-Answer',

  props: {
    cssId: {
      type: String
    }
  },

  data () {
    return {
      visible: false
    }
  },

  methods: {
    changeRoute () {
      const split = this.$route.path.split('/')
      const path = split[split.length - 2]
      this.$router.push({ path: `/faq/${path}/${this.cssId}` })
    },

    updateRoute (question) {
      if (this.cssId === question) {
        this.visible = true
      }
    }
  },

  mounted () {
    this.updateRoute(this.$route.params.question)
  },

  afterRouteUpdate (to, from, next) {
    this.updateRoute(to.params.question)
    next()
  }
}
</script>

<style lang="scss">
  .faq__accordion__question {
    text-transform: uppercase;
  }
</style>
