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
        <!-- <a href="#" class="launch-video" data-modal-id="matryx-video" @click.prevent="launchVideo">
            <img src="../../assets/images/videothumbnail.png" class="video-link-image" alt="">
        </a> -->
        <b-btn v-b-modal.matryx-video>
          <img src="../../assets/images/videothumbnail.png" class="video-link-image" alt="">
        </b-btn>

      </div>
    </div>
    <!-- <div class="modal fade" id="matryx-video" tabindex="-1" role="dialog" aria-labelledby="modal-video-label">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-video">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe class="embed-responsive-item" src="../../assets/media/giphy.mp4"
                                webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
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

.above-the-fold {
  border-radius: 0;
  background-image: url('../../assets/images/backgrounds/purplewavebig.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 0;
  background-position-y: bottom;
}

/*video link*/
a.launch-video {
  position:relative;

  img.video-link-play {
    position: absolute;
  }
  img.video-link-image {
    width:calc(100% - 60px);
    max-width: 450px;
  }
}


/*video modal*/
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
  background-image: url('../../assets/images/backgrounds/ctapurple.png');
  background-size:cover;
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
  text-transform: uppercase;
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
