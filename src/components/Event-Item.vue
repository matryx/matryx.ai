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
      <a :href="eventLink" target="_blank"> 
        <button class="btn-purple">RSVP</button>
      </a>
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
    image: String,
    eventLink: String
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
    padding: 15px 0px 30px 0px;

    &__description {
      color: $purple;
      font-size: 16px;
      max-width: 185px;
      margin-left: -150px;
      padding-bottom: 10px;
    }
  }

  button.btn-purple {
    height: 35px;
    width: 120px;
    font-size: 11px;
    padding: 5px 10px;
    margin-left: 25px;
  }
}
</style>
