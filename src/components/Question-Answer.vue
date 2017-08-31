<template>
  <div class="question-answer">
    <b-btn class="faq__accordion__btn"
      block
      v-b-toggle="cssId"
      @click.prevent="changeRoute(cssId)"
    >
      <slot name="question"></slot>

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
    },
    visible: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    changeRoute (cssId) {
      const split = this.$route.path.split('/')
      const path = split[split.length - 2]
      this.$router.push({ path: `/faq/${path}/${cssId}` })
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
  if (vm.cssId === question) {
    vm.visible = true
  }
}
</script>

<style lang="scss"></style>
