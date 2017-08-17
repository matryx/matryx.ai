<template>
  <div class="primary-event">
    <div class="primary-event__heading">
      <img class="primary-event__heading__img"
        src="../assets/images/video-preview.png">
      <div class="primary-event__heading__text">
        <h4 class="primary-event__heading__name">{{ name }}</h4>
        <div class="primary-event__heading__date">{{ date }}</div>
      </div>
    </div>

    <div class="primary-event__body">
      <div class="primary-event__body__description">{{ desc }}</div>
      <button class="btn-purple">{{ cta }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrimaryEvent',

  props: {
    name: String,
    date: String,
    desc: String,
    cta: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.primary-event {
  width: 355px;
  height: 235px;

  &__heading {
    height: 155px;
    padding: 15px;
    position: relative;
    margin-bottom: 10px;

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &__text {
      width: 305px;
      height: 90px;
      background-color: $white;
      position: absolute;
      left: 38px;
      top: 55px;
      padding: 20px;
    }

    &__name {
      color: $purple
    }

    &__date {
      color: grey;
      letter-spacing: 0.5px;
    }
  }

  &__body {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;

    &__description {
      max-width: 185px;
    }
  }

  button.btn-purple {
    height: 30px;
    width: 115px;
    border-radius: 5px;
    font-size: 11px;
    padding: 5px 10px;
  }
}
</style>
