<template>
  <div id="general-faq" class="faq__accordion">
    <span class="icon">
      <img src="../../assets/icons/icon-General.svg">
    </span>
    <h2>General Inquiries</h2>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
</style>

<script>
  export default {
    name: 'FAQ-General-FAQs'
  }
</script>

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
