<template>
  <div id="general-faq" class="faq__accordion">
    <QA cssId="why-use-a-blockchain">
      <span slot="question">
        Why use a blockchain?
      </span>
      <p slot="answer">
        To maintain a high level of security, accuracy, and reliability, Matryx is built on the Ethereum blockchain, using technologies like  public/private key encryptions, transaction ledgers, and cryptographic hashes. Because Matryx is decentralized, individuals are granted a large degree of autonomy and control over the platform.
      </p>
    </QA>

    <QA cssId="how-is-matryx-different-from-nanome-calcflow-nano-one">
      <span slot="question">
        How is Matryx different from Nanome, Calcflow, or nano-one?
      </span>
      <p slot="answer">
        The Matryx platform is a project developed by Nanome Inc.. Calcflow and nano-one are STEM Virtual Reality tools developed by Nanome that will interface directly with the Matryx platform. Calcflow and nano-one will be the first dApps to integrate the Matryx platform, although any entity may develop software that interfaces with Matryx. It is in Nanome’s best interest to take the lead in developing Matryx-oriented decentralized applications or “dApps.”
      </p>
    </QA>
  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-General-QAs',
  components: { QA }
}
</script>

<style lang="scss">
</style>
