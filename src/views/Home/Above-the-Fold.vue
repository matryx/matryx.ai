<template>
  <section class="above-the-fold">
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
      <div class="token-sale__video-launcher content-container--medium">
        <b-btn v-b-modal.matryx-video>
          <img src="../../assets/images/videothumbnail.png" class="video-link-image" alt="">
        </b-btn>
      </div>
    </div>
    <b-modal id="matryx-video" >
      <video :src="Video" controls></video>
    </b-modal>
  </section>
</template>

<script>
import Countdown from '@/components/Countdown'
import GetNotified from '@/components/Get-Notified'
import Video from '../../assets/media/giphy.mp4'

export default {
  name: 'AboveTheFold',

  components: {
    Countdown,
    GetNotified
  },

  data () {
    return {
      Video
    }
  }

}
</script>

<style lang="scss" >
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

.above-the-fold {
  border-radius: 0;
  background-image: url('../../assets/images/backgrounds/purplewavebig.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 0;
  background-position-y: bottom;
}

.token-sale__video-launcher button {
  padding: 0;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 20px #aeaeae, -2px -2px 20px #aeaeae;

  &:hover, &:active, &:focus {
    box-shadow: 3px 3px 30px #aeaeae, -3px -3px 30px #aeaeae;

  }
}


/*video modal*/
.above-the-fold .modal-dialog {
  max-width: 900px;
}
.modal-content{
  background-color: transparent;
  border:none;
}
.modal-header {
  border-bottom: none;
  padding:0;
}
.modal-body {
  padding:0;

  video {
    width: 100%;
  }
}
.modal-footer {
  display:none;
}
.close, .close:focus {
  color: #fff;
  text-shadow: 0 1px 0 #000;
  opacity: 0.7;
  outline: none;
}
.close:hover {
  color: #fff;
  text-shadow: 0 1px 0 #000;
  opacity:1;
}


#getNotified{
  .modal-dialog{
    background-color: #fff;
    border-radius:10px;

    .close{
      right: 10px;
      position: relative;
      padding: 10px;
    }
    .close, .close:focus {
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity: 0.7;
      outline: none;
    }
    .close:hover {
      color: #000;
      text-shadow: 0 1px 0 #fff;
      opacity:1;
    }

    .content-container {
      padding: 40px;
    }

    .cta__form__email {
      border: 1px solid $purple;
      border-right: none;

      &::placeholder {
        color: $purple;
      }
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



.purple-bkg {
  background-image: url('../../assets/images/backgrounds/ctapurple.png');
  background-size:cover;
  color: $white;
}

.purple-btn {
  border: none;
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
  .token-sale__video-launcher {
    width: 100%;
    margin: 20px 0;
    max-width: 100%;
    text-align:center;
  }
  .token-sale__video-launcher {
    width: 100%;
    img {width: 100%;}
  }
  .token-sale__text p.lead {
    margin: 20px auto;
    width: 100%;
    max-width: 560px;

  }



}

@media screen and (max-width: 500px) {
  #getNotified .modal-dialog .cta__form__email {
    border-right: 1px solid $purple;
  }
  .above-the-fold .cta .cta__form .cta__form__email {
    width: calc(100% - 20px);
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
  .above-the-fold .cta .cta__form .cta__form__submit {
    width: calc(100% - 20px);
    margin-top: 10px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }
}

</style>
