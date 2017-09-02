<template>
  <div id="tokensale-faq" class="faq__accordion">
    <QA cssId="why-is-matryx-conducting-a-token-sale">
      <span slot="question">
        Why is Matryx conducting a token sale?
      </span>
      <p slot="answer">
        The ultimate goal of Matryx is to incentivize collaboration in fields of knowledge and creation like STEM. To reach that goal, Matryx requires a medium of exchange for ideas in a global community. Token Sales are a proven way to engage a global support network.
      </p>
    </QA>

    <QA cssId="when-will-I-receive-my-mtx">
      <span slot="question">
        When will I receive my MTX?
      </span>
      <p slot="answer">
        MTX tokens will be distributed no later than October 13, 2017.
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

    <QA cssId="how-will-the-revenue-from-the-token-sale-be-used">
      <span slot="question">
        How will the revenue from the token sale be used?
      </span>
      <p slot="answer">
        The incoming revenue from the token sale will be used to expand our platform and conduct in-depth technical research and development with the continued goal of expanding and refining the Matryx platform. Some of this revenue will also be used to develop Calcflow and nano-one and integrate them with the Matryx platform.
      </p>
    </QA>

    <QA cssId="what-is-the-number-of-mtx-in-circulation">
      <span slot="question">
        What is the number of MTX in circulation? How many will be sold?
      </span>
      <p slot="answer">
        Exactly 314,159,265 (π * 100,000,000) Matryx Tokens will be created. 60% of the tokens will be sold during the token sale at a rate of approximately 1165 MTX per ETH, with a cap of 161,803 (ϕ * 100,000) ETH.
      </p>
    </QA>

    <QA cssId="what-is-the-difference-between-matryx">
      <span slot="question">
        What is the difference between Matryx and MTX?
      </span>
      <p slot="answer">
        Matryx refers to the entire platform, blockchain, and dApp ecosystem of incentivized collaboration. MTX is a symbol referring specifically to the ERC20 token circulated on the platform.
      </p>
    </QA>

    <QA cssId="how-can-i-use-the-mtx-token">
      <span slot="question">
        How can I use the MTX token?
      </span>
      <p slot="answer">
        The MTX token can be used to post bounties and purchase assets on the Matryx platform. As the platform grows, apps within the Matryx ecosystem will use MTX to exchange value in a variety of ways.
      </p>
    </QA>

    <QA cssId="how-can-i-participate-in-the-matryx-token-sale">
      <span slot="question">
        How can I participate in the Matryx Token Sale?
      </span>
      <div slot="answer">
        <p>
          Token purchasers may participate in the MTX token sale through the web application that will be located on the home page here on <a href="https://matryx.ai">https://matryx.ai</a>. Participants should <b>only</b> use the information listed on the website.
        </p>
        <p class="text--bold"> Requirements:</p>
        <ul>
          <li>
            <p><b>A valid ERC20 Ethereum Address.</b> This must be from an ERC20 compatible wallet like Parity, Mist, MyEtherWallet, or Metamask. Your MTX will be delivered to this address. Non-ERC20 compatible wallet addresses will not be accepted.
            </p>
            <p>The Ethereum address used must not be associated with a third party exchange or service that has custody over the private key.</p>
            <p class="text--bold">You must own the private key if your address is an exchange address.</p>
          </li>
        </ul>

        </div>
    </QA>

    <QA cssId="Where-are-the-mtx-token-sale-terms">
      <span slot="question">
        Where are the MTX Token Sale terms?
      </span>
      <p slot="answer">
        Full token sale terms will be available soon.
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
