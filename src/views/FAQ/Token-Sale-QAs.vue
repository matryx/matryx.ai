<template>
  <div id="tokensale-faq" class="faq__accordion">
    <QA cssId="when-will-I-receive-my-mtx">
      <span slot="question">
        When will I receive my MTX?
      </span>
      <p slot="answer">
        MTX tokens will be distributed no later than October 11, 2017.
        <br/><br/>
        Different wallets observe token contracts in different ways. Refer to your preferred wallet’s official documentation. In most popular wallets, the token should appear automatically. If not, you may need to add the token manually to your wallet.
      </p>
    </QA>

    <QA cssId="will-matryx-accept-fiat">
      <span slot="question">
        Will Matryx accept fiat payment during the token sale?
      </span>
      <p slot="answer">
        Matryx is a blockchain platform native to digital currency. We will only accept ETH.
      </p>
    </QA>
  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-Token-Sale-QAs',
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
