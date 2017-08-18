<template>
  <div class="primary-event">
    <div class="primary-event__heading">
      <img class="primary-event__heading__img"
        :src="image">
      <div class="primary-event__heading__text">
        <h4 class="primary-event__heading__name">{{ name }}</h4>
        <div class="primary-event__heading__date">{{ date }}</div>
      </div>
    </div>

    <div class="primary-event__body">
      <div class="primary-event__body__description">
        <span>{{ desc }}</span>
      </div>
      <button class="btn-purple">Read Article</button>
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
    image: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.primary-event {
  width: 355px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  margin: 20px 20px;

  &__heading {
    height: 155px;
    position: relative;
    margin-bottom: 10px;
    box-sizing: border-box;

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.5;
    }

    &__text {
      width: calc(100% - 40px);
      height: 95px;
      background-color: $white;
      position: absolute;
      left: 25px;
      top: 40px;
      padding: 15px 20px;
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
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 30px;
  }

  button.btn-purple {
    font-size: 11px;
    padding: 5px 10px;
    margin-top: 30px;
  }
}
</style>
