<template>
  <div id="troubleshooting-faq" class="faq__accordion">
    <QA cssId="i-cant-see-my-tokens">
      <span slot="question">
        I followed the instructions but I still don’t see my tokens.
      </span>
      <p slot="answer">
        Reach out to the Matryx team team@matryx.ai and provide as much additional information as possible, including transaction metadata. This can be found on an ether block explorer, such as Etherscan.io.
      </p>
    </QA>

    <QA cssId="i-provided-a-non-ERC20-address">
      <span slot="question">
        I provided a non-ERC20 address. What can I do?
      </span>
      <p slot="answer">
        Every possible effort to articulate the importance of ERC20 compliance has been made in our official documentation. In extremely extenuating circumstances, we may be able to make exceptional arrangements. Reach out to team@matryx.ai with as much additional information as possible.
      </p>
    </QA>

    <QA cssId="i-provided-a-exchange-wallet-address">
      <span slot="question">
        I provided an exchange wallet address. What can I do?
      </span>
      <p slot="answer">
        Every possible effort to articulate the importance of owning your private keys has been made in our official documentation. In extremely extenuating circumstances, we may be able to make exceptional arrangements. Reach out to team@matryx.ai with as much additional information as possible.
      </p>
    </QA>

    <QA cssId="im-confused-about-the-number-of-tokens-i-received.">
      <span slot="question">
        I’m confused about the number of tokens I received.
      </span>
      <p slot="answer">
        Should you have questions about or noticed a discrepancy in the number of MTX you received, reach out to team@matryx.ai with as much additional information as possible, including transaction metadata. This can be found on an ether block explorer, such as Etherscan.io. Attach original payment confirmation and any pertinent details for us to investigate.

      </p>
    </QA>

  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-Troubleshooting-QAs',
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
