<template>
  <div id="contact-faq" class="faq__accordion">
    <QA cssId="how-can-I-contribute-to-matryx">
      <span slot="question">How can contribute to Matryx?</span>
      <span slot="answer">
        <p>If you’re interested in joining the Matryx team, reach out to us at team@matryx.ai with a resume, intention, and as much additional information about you as possible. We are always looking to add new talent to our growing team. </p>
      </span>
    </QA>

    <QA cssId="im-a-developer-and-i-want-to-submit-code">
      <span slot="question">
        I’m a developer and I want to submit code.
      </span>
      <span slot="answer">
        <p>The Matryx platform is open source. Developers who want to submit contributions can do so by submitting pull requests on our GitHub for review.</p>
        <p>An open source project like Matryx wouldn't be possible without developers who are excited about building blockchain solutions. To discuss the Matryx code and platform design, join our telegram chat and talk to the team directly. </p>
        <p>All contributors must agree to the Matryx CLA before their code is merged.</p>
      </span>
    </QA>

    <QA cssId="more-questions">
      <span slot="question">
        More questions?
      </span>
      <span slot="answer">
        <p>Shoot us an email with your questions and concerns at team@matryx.ai</p>
      </span>
    </QA>
  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-Contact-QAs',
  components: { QA }
}
</script>

<style lang="scss">
#contact-faq {
  // put all CSS in here so that it is scoped by ID
}
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

cssId: should be a-lowercase-hyphenated-form of the question

The slot="question" needs to be a 'span' or it will mess with the plus minus symbol on the side
<span slot="question"></span>

The slot="answer" can be a 'div' or a 'p' or a 'span'
<p slot="answer"></p>
<div slot="answer"></div>

 -->
