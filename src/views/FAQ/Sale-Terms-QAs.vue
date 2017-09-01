<template>
  <div id="saleterms-faq" class="faq__accordion">
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
