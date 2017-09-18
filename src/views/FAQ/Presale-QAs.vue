<template>
  <div id="presale-faq" class="faq__accordion">
    <QA cssId="how-can-I-participate-in-the-presale">
      <span slot="question">
        How can I participate in the pre-sale?
      </span>
      <p slot="answer">
        The MTX pre-sale period is now over.
      </p>
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

<!--
<QA cssId="why-use-a-blockchain">
  <span slot="question">
    Why use a blockchain?
  </span>
  <p slot="answer">
    Blah blah blah<br><br>blahblahbalhba
  </p>
</QA>
 -->
