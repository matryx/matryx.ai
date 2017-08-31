<template>
  <div id="presale-faq" class="faq__accordion">
    <QA cssId="who-is-matryx":visible="true">
      <span slot="question">
        A <a href="/">link</a>
      </span>
      <span slot="answer">
        Blah blah blah<br><br>blahblahbalhba
      </span>
    </QA>

    <QA cssId="how-does-matryx-work">
      <span slot="question">
        How does Matryx Work?
      </span>
      <span slot="answer">
        It just works
      </span>
    </QA>

    <QA cssId="what-currency-can-I-use">
      <span slot="question">
        What Currency Can I Use?
      </span>
      <span slot="answer">
        You can use ETH
      </span>
    </QA>
  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-Presale-QAs',
  components: { QA }
}
</script>

<style lang="scss">
</style>
