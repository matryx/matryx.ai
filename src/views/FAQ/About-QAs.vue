<template>
  <div id="about-faq" class="faq__accordion">
    <QA cssId="what-is-matryx">
      <span slot="question"> What is Matryx? </span>
      <p slot="answer">
        Matryx aims to be the de facto standard for decentralized collaboration. Matryx is an open source platform that consists of a blockchain-based bounty system, a library of digital assets, and a marketplace. It is the first bounty-based platform that rightfully compensates all contributors to a winning bounty. This model can be applied to all forms of collaboration, but Matryx will bootstrap with a focus on STEM and academia.
        <br/></br/>
        There are several key components of the Matryx ecosystem: a decentralized platform, an Ethereum token, and a library of applications. They are heavily integrated with each other and each component benefits greatly from the others. Users will interface with applications like Calcflow, nano-one, and the Matryx web marketplace in order to submit and download content. This content is managed by smart contracts on the Matryx platform and community input. All individuals are incentivized to maintain the platform’s quality via an ERC20 token called MTX.
      </p>
    </QA>

    <QA cssId="how-does-matryx-bounty-system-work">
      <span slot="question"> How does the Matryx bounty system work? </span>
      <div slot="answer">
        <p>
          The Matryx bounty system aims to accelerate innovation and reward all users who contribute. A bounty is simply a challenge posted to the platform with a fair MTX reward for users who make relevant contributions to the answer. Any user can post bounties to the Matryx community and any user can participate. Here's a simple example of how a bounty could work:
        </p>
        <ol>
          <li>
            <p>Bounty is Posted</p>
            <p>Marshall requests a 3D Spacecraft model & posts a bounty</p>
          </li>
          <li>
            <p>Solutions Submitted</p>
            <p>Two users submit their best Spacecraft models. Marshall likes a design and requests a round of revision from the community.
            </p>
          </li>

          <li>
            <p>Winner is Chosen</p>
            <p>Two new users take Marshall's favorite designs and 'remix' it. Marshall chooses a winner and a smart contract distributes MTX to all contributors.
            </p>
          </li>
        </ol>
        <p>
          Initially, the content submitted to the Matryx platform will be intended to fulfill user-posted bounties. These bounties will request specific solutions to specific problems, ranging from mathematical proofs to 3D designs. Bounty posters may browse through an initial batch of submissions and select a winner. More importantly, a bounty poster may select a submission as the “parent” for a new batch of community revision. When the poster is satisfied, or another parameter is met, a winner is chosen. All contributors, not just the final submitter, are rewarded with MTX. Through this process of collaborative revision, the Matryx platform aims to cultivate an unrivaled database of quality content.
        </p>
      </div>
    </QA>

    <QA cssId="how-are-bounty-splits-determined">
      <span slot="question">
        How are bounty splits determined for collaborative solutions?
      </span>
      <p slot="answer">
        Users must determine concise and transparent parameters for collaborative solutions prior to posting a bounty. By default, all relevant contributors will share a bounty reward equally.
        <br/><br/>
        In the future, contributors will be able to suggest a percentage split of the bounty with their submissions. Users will be incentivized to post reasonable and fair split suggestions by a reputation system.
      </p>
    </QA>


    <QA cssId="what-if-no-fitting-solution-by-end-of-tournament">
      <span slot="question">
        What if no fitting solution is found by the end of a tournament?
      </span>
      <p slot="answer">
        The Matryx Platform allows for nested bounties, meaning new bounties can be posted using an existing submission as a starting point, or parent. Through a nested bounty, a bounty poster can extend a tournament and raise the MTX reward while properly attributing and compensating all prior contributors.
      </p>
    </QA>

  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-About-QAs',

  components: { QA }
}
</script>

<style lang="scss">
</style>
