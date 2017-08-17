<template>
  <div class="primary-event">
    <div class="primary-event__heading">
      <div class="primary-event__heading__name">{{ name }}</div>
      <div class="primary-event__heading__date">{{ date }}</div>
    </div>

    <div class="primary-event__description">
      {{ desc }}
    </div>

    <button class="btn-purple">
      cta
    </button>
  </div>
</template>

<script>
export default {
  name: 'PrimaryEvent',

  props: {
    name: String,
    date: String,
    desc: String
  }
}
</script>

<style lang="scss">
</style>
