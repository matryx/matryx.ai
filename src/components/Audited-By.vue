<template lang="html">
  <div class="audited">
    <h2>
      <span v-if=" language === 'ch' ">已通过</span>
      <span v-else> Audited by </span>
    </h2>
    <a href="https://tokenmarket.net/blog/matryx-token-and-token-sale-smart-contract-audit/" target="_blank">
      <img src="../assets/icons/icon-tokenmarket-horizontal.png">
    </a>
    <h2 v-if=" language === 'ch' ">审核</h2>
  </div>
</template>

<script>
export default {
  name: 'AuditedBy',
  computed: {
    language () {
      return this.$store.state.language
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.audited {
  padding-bottom: 130px;
  color: $matryx-dark-grey;
  text-align: center;
  max-width: 400px;
  padding: 20px 40px;
  margin: 50px auto;

  h2 {
    margin: 0.5em auto;
  }

  img {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
