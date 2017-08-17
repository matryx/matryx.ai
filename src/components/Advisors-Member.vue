<template>
  <section class="advisors-member">
    <img class="advisor-member__img" :src="src" :alt="alt">

    <div class="advisor-member__name">{{ name }}</div>

    <div class="advisor-member__desc">{{ desc }}</div>
  </section>
</template>

<script>
export default {
  name: 'AdvisorsMember',

  props: {
    src: String,
    alt: String,
    name: String,
    desc: String
  }
}
</script>

<style lang="scss">

</style>
