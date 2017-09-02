<template lang="html">
  <div class="pklogo">
    <div class="pklogo__image">
      <img :src="src" :alt="alt">
    </div>
    <div class="pklogo__downloads">
      <p>{{ type }}</p>
      <a :href="svg" class="pklogo__download--svg" :download="filename">
        <i class="fa fa-download"></i>
        SVG
      </a>
      <a :href="png" class="pklogo__download--png" :download="filename">
        <i class="fa fa-download"></i>
        PNG
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresskitDownload',
  props: {
    src: String,
    alt: String,
    type: String,
    svg: String,
    png: String,
    filename: String
  }
}
</script>

<style lang="scss" scoped>
</style>
