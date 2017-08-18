<template>
  <section class="above-the-fold bkg-color--purple">
    <div class="token-sale content-container content-container--large ">
      <div class="token-sale__text content-container--medium text-color--white">
        <h1 class="font-size--large uppercase">Join the Matryx Token Sale</h1>
        <p class="lead ">
          Want to join in on the action? Enter your email to be notified when our
          token sale launches.
        </p>
        <Countdown></Countdown>
        <Get-Notified ctaLocation="Above the Fold"></Get-Notified>
      </div>
      <div class="token-sale__video content-container--medium">
        <video src="../../assets/media/giphy.mp4" controls ></video>
      </div>
    </div>
  </section>
</template>

<script>
import Countdown from '@/components/Countdown'
import GetNotified from '@/components/Get-Notified'

export default {
  name: 'AboveTheFold',

  components: {
    Countdown,
    GetNotified
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors.scss';

section.above-the-fold {
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

.above-the-fold .jumbotron {
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

.above-the-fold .cta__form__email {
  border-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 42px;
  border-right: none;
  font-size: 12px;
  width: 220px;
  padding-left: 20px;

  &:active, &:focus {
    outline: none;
  }
}

.above-the-fold .cta__form__submit {
  border-radius: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  height: 40px;
  width: 150px;
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
  .above-the-fold .cta__form__email {
    width: calc(100% - 20px);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  .above-the-fold .cta__form__submit {
    width: calc(100% - 20px);
    margin-top: 10px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
}

</style>
