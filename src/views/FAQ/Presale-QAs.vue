<template>
  <div id="presale-faq" class="faq__accordion">
    <QA cssId="how-can-I-participate-in-the-presale">
      <span slot="question">
        How can I participate in the pre-sale?
      </span>
      <p slot="answer">
        The MTX pre-sale is open to participants who wish to make a purchase of <b>75 ETH or more</b>. Pre-sale-specific communications will begin Thursday, August 24 with the smart contract opening on <b>Wednesday, September 6.</b>
        <br/><br/>
        To make sure you receive relevant communication regarding the pre-sale, please fill out the survey after signing up, and be sure to indicate an intended purchase amount of 75 ETH or more. Feel free to take the survey again and update your answer if needed.
      </p>
    </QA>

    <QA cssId="what-discounts-are-available">
      <span slot="question">
        What discounts are available?
      </span>
      <div slot="answer">
        <p>During the pre-sale there will be two discount tiers available:</p>
        <ul class="discount-list">
          <li><p><b>10% discount for purchases between 150-300 ETH</b></p></li>
          <li><p><b>15% discount for purchases greater than 300 ETH</b></p></li>
        </ul>
        <p>
          Discounts are <em>only</em> available during the pre-sale.
        </p>
      </div>
    </QA>

    <QA cssId="what-is-the-minimum-purchase-for-pre-sale">
      <span slot="question">
        What is the minimum purchase for pre-sale?
      </span>
      <p slot="answer">
        The minimum purchase amount to participate in the pre-sale is <b>75 ETH.</b>
      </p>
    </QA>

    <QA cssId="what-do-I-need-to-do-to-receive-my-tokens">
      <span slot="question">
        What do I need to do to receive my tokens?
      </span>
      <p slot="answer">
        You will need to broadcast a transaction to a specific contract when the pre-sale opens. The Matryx Team will send an email with specific instructions as the date approaches.
      </p>
    </QA>

    <QA cssId="how-can-I-monitor-my-tokens-before-the-public-sale-date?">
      <span slot="question">
        How can I monitor my tokens before the public sale date?
      </span>
      <p slot="answer">
        The Matryx team will share an Etherscan link with you to view details of your transaction and smart contract.
      </p>
    </QA>

    <QA cssId="can-I-change-my-receiving-address-before-the-public-sale-date">
      <span slot="question">
        Can I change my receiving address before the public sale date?
      </span>
      <p slot="answer">
        Unfortunately, ERC20 transactions are irreversible. The Matryx Team is unable to change your receiving address once the transaction has been sent.
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
