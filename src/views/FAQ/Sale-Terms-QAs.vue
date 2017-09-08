<template>
  <div id="saleterms-faq" class="faq__accordion">
    <QA cssId="what-are-the-saleterms">
       <span slot="question">
         What are the sale terms?
       </span>
       <span slot="answer">
         Full token sale terms are available at
         <a href="/sale-terms.pdf" target="_blank">https://matryx.ai/sale-terms.pdf</a>
       </span>
     </QA>

     <QA cssId="where-is-the-matryx-team">
      <span slot="question">
        Where is the Matryx team?
      </span>
      <span slot="answer">
        <p>The Matryx Team is based in San Diego, California. In accordance with the Matryx philosophy, the team collaborates with a variety of individuals across the globe.</p>
      </span>
    </QA>
  </div>
</template>

<script>
import QA from '@/components/Question-Answer'

export default {
  name: 'FAQ-Sale-Terms-QAs',
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
