<template>
  <div class="question-answer">
    <b-btn class="faq__accordion__btn" block v-b-toggle="cssId"
      @click.prevent="changeRoute(cssId)">
      {{ question }}
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
        {{ answer }}
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'Question-Answer',

  props: {
    question: {
      type: String
    },
    cssId: {
      type: String
    },
    answer: {
      type: String
    },
    visible: {
      type: Boolean
    },
    changeRoute: {
      type: Function
    }
  }
}
</script>

<style>

</style>
