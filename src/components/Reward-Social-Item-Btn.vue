<template>
  <a :href="link" target="_blank" class="btn btn-yellow reward-ts-item__btn uppercase">
    {{ linkText }}
  </a>
</template>

<script>
export default {
  name: 'RewardSocialItemBtn',

  props: ['link', 'linkText']
}
</script>

<style lang="scss">
@import '../assets/css/colors';
.reward-ts-item__btn {
  border-color: $light-yellow;
  color: $white !important;
  background-color: $light-yellow;
  width: 250px;
  border-radius: 30px;
  padding: 15px;
  bottom: 0;
  position: absolute;

  &:focus {
    outline: none;
  }

  &:hover {
    color: $yellow !important;
    cursor: pointer !important;
  }
}
</style>
