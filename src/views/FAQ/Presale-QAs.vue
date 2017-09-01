<template>
  <div id="presale-faq" class="faq__accordion">
    <QA cssId="how-can-I-participate-in-the-presale">
      <span slot="question">
        How can I participate in the presale?
      </span>
      <p slot="answer">
        The MTX presale is open to selected purchasers. Presale-specific communications will begin Thursday, August 24 with the smart contract opening on Wednesday, September 6. Reach out to the Matryx team directly at team@matryx.ai.
      </p>
    </QA>

    <QA cssId="what-do-I-need-to-do-to-receive-my-tokens">
      <span slot="question">
        What do I need to do to receive my tokens?
      </span>
      <p slot="answer">
        You will need to broadcast a transaction to a specific contract when the presale opens. The Matryx Team will send an email with specific instructions as the date approaches.
      </p>
    </QA>

    <QA cssId="how-can-I-monitor-my-tokens-before-the-public-sale-date?">
      <span slot="question">
        How can I monitor my tokens before the public sale date?
      </span>
      <p slot="answer">
        The Matryx team will share with you a link on Etherscan to view details of your transaction and smart contract.
      </p>
    </QA>

    <QA cssId="can-I-change-my-receiving-address-before-the-public-sale-date">
      <span slot="question">
        Can I change my receiving address before the public sale date?
      </span>
      <p slot="answer">
        Unfortunately, ERC20 transactions are irreversible. The Matryx Team is unable to change your receiving address
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
