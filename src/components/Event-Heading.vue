<template>
  <div class="primary-event__heading">
    <img class="primary-event__heading__img" :src="image">
    <div class="primary-event__heading__text">
      <h4 class="primary-event__heading__name">{{ name }}</h4>
      <div class="primary-event__heading__date">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventHeading',

  props: {
    name: String,
    date: String,
    image: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

// .primary-event {
//   &__heading {
//     height: 155px;
//     position: relative;
//     margin-bottom: 10px;
//     box-sizing: border-box;
//
//     &__img {
//       position: absolute;
//       width: 100%;
//       height: 100%;
//       opacity: 0.5;
//     }
//
//     &__text {
//       width: 305px;
//       max-height: 95px;
//       background-color: $white;
//       position: absolute;
//       left: 25px;
//       top: 40px;
//       padding: 15px 20px;
//     }
//
//     &__name {
//       color: $purple
//     }
//
//     &__date {
//       color: grey;
//       letter-spacing: 0.5px;
//     }
//   }
// }

.primary-event {
  &__heading {


    &__img {

    }

    &__text {

    }

    &__name {
    }

    &__date {

  }
}
</style>
