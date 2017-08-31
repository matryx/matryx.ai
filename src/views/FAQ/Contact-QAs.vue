<template>
  <div id="contact-faq" class="faq__accordion">
    <QA cssId="who-is-matryx">
      <span slot="question">
        A <a href="/">link</a>
      </span>
      <span slot="answer">
        Blah blah blah<br><br>blahblahbalhba
      </span>
    </QA>

    <QA cssId="how-does-matryx-work">
      <span slot="question">
        How does Matryx Work?
      </span>
      <span slot="answer">
        It just works
      </span>
    </QA>

    <QA cssId="what-currency-can-I-use">
      <span slot="question">
        What Currency Can I Use?
      </span>
      <span slot="answer">
        You can use ETH
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
