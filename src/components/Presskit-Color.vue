<template lang="html">
  <div class="pkcolor">
    <div class="pkcolor__display" :class="{ 'bkg-color--matryx-darker-grey' : grey, 'bkg-color--matryx-blue' : blue, 'bkg-color--matryx-light-blue' : lightBlue }">
    </div>
    <div class="pkcolor__values">
      <p>{{ colorName }}</p>
      <p>{{ colorHex }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PresskitColor',
  props: {
    colorName: String,
    colorHex: String,
    grey: Boolean,
    blue: Boolean,
    lightBlue: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/colors.scss';

.pkcolor {
  height: 230px;
  width: 160px;
  padding: 5px;
  margin: 10px;

  &__display {
    height: 150px;
    width: 150px;
    border-radius: 100px;
  }

  &__values {
    margin: 0 5px;
    padding: 10px 0;

    p {
      color: #000;
      font-size: 14px;
      text-align:center;
      margin-bottom: 0;
    }
  }
}

</style>
