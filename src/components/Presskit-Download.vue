<template lang="html">
  <div class="pklogo">
    <div class="pklogo__image" :class="{ 'bkg-color--matryx-blue-gradient': bluebkg }">
      <img :src="src" :alt="alt">
    </div>
    <div class="pklogo__download">
      <p>{{ type }}</p>
      <a :href="svg" class="pklogo__download--svg" :download="filename">
        <img class="pklogo__download__img" src="../assets/icons/icon-download.svg" alt="">
        SVG
      </a>
      <a :href="png" class="pklogo__download--png" :download="filename">
        <img class="pklogo__download__img" src="../assets/icons/icon-download.svg" alt="">
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
    filename: String,
    bluebkg: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.pklogo {
  height: 250px;
  width: 250px;
  padding: 5px;
  margin: 10px;
  border: 1px solid $matryx-lighter-grey;
  box-shadow: 1px 2px 3px $platinum-grey;

  &__image {
    height: 195px;
    width: 240px;
    line-height:195px;
    overflow:hidden;
    border: 1px solid $matryx-lighter-grey;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__download {
    margin: 0 5px;
    padding: 10px 0;

    p {
      color: #000;
      float:left;
      font-size: 12px;
    }
    &__img {
      height: 16px;
      margin-top: 1px;
    }

    &--svg, &--png {
      float: right;
      color: $matryx-light-blue;
      margin: 0 5px;
    }
  }
}

</style>
