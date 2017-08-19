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
      <a :href="articleLink" target="_blank">
        <button class="btn-purple">Read Article</button>
      </a>
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
    image: String,
    articleLink: String
  }
}
</script>

<style lang="scss">
@import '../assets/css/colors';

/* mixin for multiline */
@mixin multiLineEllipsis($lineHeight: 1.1em, $lineCount: 1, $bgColor: white){
  overflow: hidden;
  position: relative;
  line-height: $lineHeight;
  max-height: $lineHeight * $lineCount;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: $bgColor;
  }
}


.primary-event {
  width: calc(33.3333% - 40px);
  min-width: 300px;
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
      height: 110px;
      background-color: $white;
      position: absolute;
      left: 25px;
      top: 27px;
      padding: 15px 20px;
    }

    &__name {
      color: $purple;
      // @include multiLineEllipsis($lineHeight: 1.1em, $lineCount: 2, $bgColor: white);
      font-weight: 700;
      font-size: 24px;
      /* styles for '...' */
      & {
        /* hide text if it more than N lines  */
        overflow: hidden;
        /* for set '...' in absolute position */
        position: relative;
        /* use this value to count block height */
        line-height: 1.1em;
        /* max-height = line-height (1.2) * lines max number (3) */
        max-height: 2.2em;
        /* fix problem when last visible word doesn't adjoin right side  */
        text-align: left;
        /* place for '...' */
        margin-right: -1em;
        padding-right: 1em;
      }
      /* create the ... */
      &:before {
        /* points in the end */
        content: '...';
        /* absolute position */
        position: absolute;
        /* set position to right bottom corner of block */
        right: 27px;
        bottom: 0;
        background-color: #FFF;
      }
      /* hide ... if we have text, which is less than or equal to max lines */
      &:after {
        /* points in the end */
        content: '';
        /* absolute position */
        position: absolute;
        /* set position to right bottom corner of text */
        right: 27px;
        /* set width and height */
        width: 1em;
        height: 1em;
        margin-top: 0.2em;
        /* bg color = bg color under block */
        background: white;
      }
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
    justify-content: space-between;
    padding: 20px 30px;
    height:calc(100% - 165px);

    a {
    }
  }

  button.btn-purple {
    font-size: 14px;
    padding: 5px 10px;
    margin-top: 30px;
  }


}
</style>
