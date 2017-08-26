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
        <button class="btn-blue">Read Article</button>
      </a>
      <p class="share-social--title text-color--matryx-blue">Share:</p>
      <div class="share-social">
        <!-- Sharingbutton Facebook -->
        <a class="resp-sharing-button__link" :href="facebookLink" target="_blank" aria-label="">
          <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
            <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
            </div>
          </div>
        </a>
        <!-- Sharingbutton Twitter -->
        <a class="resp-sharing-button__link" :href="twitterLink" target="_blank" aria-label="">
          <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
            <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
            </div>
          </div>
        </a>
      </div>





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
    articleLink: String,
    facebookLink: String,
    twitterLink: String
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
      position: absolute;
      left: 25px;
      top: 27px;
      padding: 15px 20px;
      background-color: $matryx-darker-grey;
    }

    &__name {
      color: $purple;
      // @include multiLineEllipsis($lineHeight: 1.1em, $lineCount: 2, $bgColor: white);
      font-weight: 100;
      font-size: 20px;
      color: $white;
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
        background-color:$matryx-darker-grey;
        /* absolute position */
        position: absolute;
        /* set position to right bottom corner of block */
        right: 27px;
        bottom: 0;
      }
      /* hide ... if we have text, which is less than or equal to max lines */
      &:after {
        /* points in the end */
        content: '';
        background-color:$matryx-darker-grey;
        /* absolute position */
        position: absolute;
        /* set position to right bottom corner of text */
        right: 27px;
        /* set width and height */
        width: 1em;
        height: 1em;
        margin-top: 0.2em;
        /* bg color = bg color under block */
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
    color: $matryx-dark-grey;
    height:calc(100% - 165px);

    a {
    }
  }

  button.btn-blue {
    font-size: 14px;
    padding: 5px 20px;
    margin-top: 30px;
    border-radius: 25px;
  }


}

</style>
