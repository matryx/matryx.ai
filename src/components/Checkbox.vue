<template>
  <div class="checkbox-item">
    <input type="checkbox"
      :id="name"
      :value="name"
      v-model="obj.checked"
      :disabled="!obj.enable"
    >
    <label :for="name">
      <slot name="label"></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',

    props: {
      name: {
        type: String,
        required: true
      },
      obj: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss">
@import '../assets/css/colors';

.checkbox-item {

  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:disabled + label {
    color: $matryx-grey;

    &::after, &::before {
      border: 1px solid $matryx-lighter-grey;
    }
  }
  input[type="checkbox"]:checked + label {
    &::after {
      background-color: $matryx-blue;
    }
    &::before {
      color: #fff;
      content: '\2713';
      font-size: 16px;
      left: -26px;
      top: 1px;
      z-index: 2;
    }
  }
  label {
    position:relative;
    left: 30px;
    margin-bottom: 10px;

    &::after, &::before {
      content: '';
      position:absolute;
      top: 0;
      left: -30px;
      height:20px;
      width: 20px;
    }
    &::after {
      border: 1px solid $matryx-blue;
    }
  }
}

</style>

