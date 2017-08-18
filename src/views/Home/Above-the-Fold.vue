<template>
  <section class="bkg-color--purple">
    <div class="token-sale content-container content-container--large ">
      <div class="token-sale__text content-container--small text-color--white">
        <h1 class="font-size--large ">Join Our Token Sale</h1>
        <p class="lead ">
          Want to join in on the action? Enter your email to be notified when our
          token sale launches.
        </p>
        <Countdown></Countdown>
        <b-form class="form-inline cta__form">
          <b-form-input class="form-control cta__form__email"
          v-model="email"
          type="email"
          placeholder="Enter your email"
          >
          </b-form-input>
          <button class="btn btn-yellow cta__form__submit"
          :class="{ 'purple-btn': purpleBkg }"
          @click.prevent="getNotified"
          >
          GET UPDATES
          </button>
        </b-form>
      </div>
      <div class="token-sale__video content-container--small">
        <video src="../../assets/media/giphy.mp4" controls ></video>
      </div>
    </div>
    <div class="media-mentions bkg-color--white">
      <div class=" content-container content-container--large media-mentions__img-container">
        <p>Featured By</p>
        <img src="../../assets/images/gizmodo.png" alt="">
        <img src="../../assets/images/sdut-logo.png" alt="">
        <img src="../../assets/images/UCSD-logo.png" alt="">
        <img src="../../assets/images/singularity.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Countdown from '@/components/Countdown'

export default {
  name: 'AboveTheFold',

  components: {
    Countdown
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors.scss';

section {
  margin-top: 80px;
  margin-bottom: 0px;

  & > .content-container {
    display:flex;
    justify-content: space-between;
  }
}


.token-sale__text {
  p.lead {
    border-left: 1px solid $yellow;
    padding-left: 20px;
    font-size: 16px;
    max-width: 350px;
    opacity: 0.8;
    margin-top:20px;
  }
}

.jumbotron {
  border-radius: 0;
  background-image: url('../../assets/images/purplebkg.jpg');
  background-size: cover;
  margin-bottom: 0;
}

/*media mentions*/
.media-mentions {
  display:-webkit-box;display:-ms-flexbox;display:flex;
  flex-direction: column;

  p{
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  &__img-container {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 20%;
      max-width: 200px;
    }
  }

}

.tokensale-background {
  position:absolute;
  min-height:100%;
  min-width:100%;
  top:0;
  left:0;
  z-index: 1;
}

.cta {

  &__form {
    display: flex;
    justify-content: flex-start;
  }
}

.purple-bkg {
  background-color: $purple;
  color: $white;
}

.purple-btn {
  border: none;
}

.cta__form__email {
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 42px;
  border-right: none;
  font-size: 12px;
  width: 200px;

  &:active, &:focus {
    outline: none;
  }
}

.cta__form__submit {
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 40px;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 1000px) {
  video {
    width: 100%;
  }
  .token-sale {
    flex-direction: column;
  }
  .token-sale__text,
  .token-sale__video {
    width: 100%;
    margin: 20px 0;
    max-width: 100%;
    text-align:center;
  }
  .token-sale__text p.lead {
    margin: 20px auto;
    width: 100%;
    max-width: 560px;

  }

  .cta__form {
    justify-content: center;
    margin-top: 20px;
  }

}

@media screen and (max-width: 500px) {
  .cta__form__email {
    width: calc(100% - 20px);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  .cta__form__submit {
    width: calc(100% - 140px);
    margin-top: 10px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
}

</style>
