<template>
  <section class="advisors-member member">
    <img class="advisor-member__img member__img" :src="src" :alt="alt">

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
.advisor-member__name {
  font-size: 14px;
  opacity: 0.8;
}

.advisor-member__desc {
  font-size: 11px;
  opacity: 0.8;
  margin: 2.5px;
}

.matryx-team__advisors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:50px;
}

</style>
