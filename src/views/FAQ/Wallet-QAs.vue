<template>
  <div id="wallet-faq" class="faq__accordion">
    <QA cssId="why-use-a-blockchain">
      <span slot="question">
        Why use a blockchain?
      </span>
      <p slot="answer">
        Blah blah blah<br><br>blahblahbalhba
      </p>
    </QA>
  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-Wallet-QAs',
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
