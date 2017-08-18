<template>
  <div class="event-item">
    <div class="event-item__heading">
      <img class="event-item__heading__img" :src="image">
      <div class="event-item__heading__text">
        <h4 class="event-item__heading__name">{{ name }}</h4>
      </div>
    </div>

    <div class="event-item__body">
      <div class="event-item__body__description">
        <div class="event-item__body__date">{{ date }}</div>
        <div class="event-item__body__day">{{ day }}</div>
      </div>
      <button class="btn-purple">RSVP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Secondary Event',

  props: {
    name: String,
    date: String,
    day: String,
    image: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

.event-item {
  width: 355px;
  box-sizing: border-box;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  margin: 20px 20px;

  &__heading {
    height: 87px;
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
      width: 305px;
      max-height: 95px;
      background-color: $white;
      position: absolute;
      left: 25px;
      top: 20px;
      padding: 15px 20px;
    }

    &__name {
      color: $purple
    }
  }

  &__body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;

    &__description {
      color: $purple;
      font-size: 16px;
      max-width: 185px;
    }
  }

  button.btn-purple {
    height: 30px;
    width: 115px;
    font-size: 11px;
    padding: 5px 10px;
    margin-left: 25px;
  }
}
</style>
