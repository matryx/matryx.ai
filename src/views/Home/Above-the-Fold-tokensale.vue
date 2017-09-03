<template>
  <section class="above-the-fold">
    <div class="token-sale content-container content-container--large ">
      <div class="token-sale__text content-container--medium text-color--white">
        <h1 class="font-size--large uppercase">
          <span v-if=" language === 'ru' ">
            ПРИСОЕДИНЯЙТЕСЬ К НАШЕЙ ПРОДАЖЕ ТОКЕНОВ
          </span>
          <span v-else-if=" language === 'ch' ">参与我们的代币销售</span>
          <span v-else-if=" language === 'ge' ">
            NEHMEN SIE AN UNSEREM TOKEN-VERKAUF TEIL
          </span>
          <span v-else-if=" language === 'ja' ">当社のトークンセールに参加</span>
          <span v-else-if=" language === 'ko' ">저희 토큰 판매에 참여하세요</span>
          <span v-else>Matryx Token Sale</span>
        </h1>
        <p class="lead ">
          <span v-if=" language === 'ru' ">
            Окажитесь в центре событий. Введите ваш адрес электронной почты, чтобы получать уведомления о начале нашей продажи токенов.
          </span>
          <span v-else-if=" language === 'ch' ">
            加入行动。输入您的电子邮箱，以便收到代币销售的相关更新。
          </span>
          <span v-else-if=" language === 'ge' ">
            Seien Sie dabei. Geben Sie Ihre E-Mail ein, um zum Start unseres Token-Verkaufs benachrichtigt zu werden.
          </span>
          <span v-else-if=" language === 'ja' ">
            アクションに参加してください。電子メールを入力して、トークンセールが開始されたときに通知を受けてください。
          </span>
          <span v-else-if=" language === 'ko' ">
            수익활동에 참여하세요. 귀하의 이메일을 입력하시고 저희 토큰 판매의 런칭에 대한 알림을 받으세요.
          </span>
          <span v-else>
            Participate in Pre-Sale. Click button below to begin
          </span>
        </p>
        <div class="progress-bar">
          <div class="progress-bar__bar-container">
            <div class="progress-bar__bar-progress" :style="ETHProgress"></div>
            <div class="progress-bar__bar-total"></div>
          </div>
          <p>
            <span class="progress-bar__bar-progress--text">{{ ETHPurchased }}</span>
            <span class="progress-bar__bar-total--text">/ 161803 ETH</span>
          </p>
        </div>
        <button class="matryx-button matryx-button--blue" @click="openSaleModal">
          PURCHASE MTX
        </button>
      </div>
      <div class="token-sale__video-launcher content-container--medium">
        <iframe class="matryx-video-yt"
          width="560" height="315"
          src="https://www.youtube.com/embed/iLHlwnaqTWw?rel=0&amp;showinfo=0" frameborder="0"
          allowfullscreen
        >
        </iframe>
        <!-- <b v-b-modal.matryx-video> -->
          <!-- <img src="../../assets/images/videothumbnail.png" class="video-link-image" alt=""> -->
        <!-- </b> -->
      </div>
    </div>
  </section>
</template>

<script>
// import Countdown from '@/components/Countdown'
// import GetNotified from '@/components/Get-Notified'

export default {
  name: 'AboveTheFoldTokensale',

  computed: {
    language () {
      return this.$store.state.language
    }
  },

  data () {
    return {
      ETHPurchased: Number,
      ETHProgress: String,
      ETHData: [ 1356, 15677, 48768, 89235, 156098 ]
    }
  },

  methods: {
    openSaleModal () {
      console.log('hello openSaleModal')
      this.$store.commit('showSaleModal', true)
    }
  },

  mounted () {
    this.ETHPurchased = this.ETHData[(Math.floor(Math.random() * 5))]
    var ETHPercent = (this.ETHPurchased / 161803) * 100
    this.ETHProgress = 'width: ' + ETHPercent + '%;'
    console.log(this.ETHPurchased, this.ETHProgress, ETHPercent)
  }
}
</script>

<style lang="scss" >
@import '../../assets/css/colors.scss';

iframe{
  width: 560px !important;
}

section.above-the-fold {
  margin-bottom: 0px;
  margin-top:0;

  & > .content-container {
    display:flex;
    justify-content: space-between;
    padding: 40px 40px 160px;
  }
}

.token-sale__text {
  p.lead {
    border-left: 4px solid $matryx-blue;
    padding-left: 20px;
    font-size: 16px;
    max-width: 350px;
    opacity: 0.8;
    margin-top:20px;
  }
}

.above-the-fold {
  border-radius: 0;
  background-image: url('../../assets/images/backgrounds/abovethefoldbkg.svg');
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
.above-the-fold{

  .modal-dialog {
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
}


#getNotified{
  .modal-footer {
    display:none;
  }
  .modal-header {
    border-bottom: none;
    padding:0;
  }
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
      padding: 0 40px 20px;
    }

    .cta__form__email {
      border: 1px solid $matryx-dark-grey;
      border-right: none;

      &::placeholder {
        color: $matryx-dark-grey;
      }
    }
  }
}

/*----- tokensale styles-----*/
/* progress bar */
.progress-bar {
  background-color: transparent;
  margin: 30px 0;

  &__bar-container {
    position:relative;
    height: 20px;
    width: 100%;
  }
  &__bar-progress {
    background-color: $matryx-light-blue;

    &--text {
      color: #FFF;
    }
  }
  &__bar-total {
    width: 100%;

    &--text {
      color: $matryx-light-blue;
    }
  }
  &__bar-progress, &__bar-total {
    float:left;
    border: 1px solid $matryx-light-blue;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
  }
}

/*matryx button */
.matryx-button {
  width: 100%;
  height: 50px;
  text-align:center;
  border-radius: 40px;
  text-transform: uppercase;
  padding: 20px auto;
  margin: 30px auto;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.7);

  &--blue {
    border: 1px solid $matryx-blue;
    background-color: $matryx-blue;
    color: #FFF;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.9);
    }
    &:active {
      position:relative;
      top: 2px;
    }
  }
}
/*----- END tokensale styles-----*/




.tokensale-background {
  position:absolute;
  min-height:100%;
  min-width:100%;
  top:0;
  left:0;
  z-index: 1;
}





.purple-btn {
  border: none;
}


/*----- MEDIA QUERIES -----*/
@media screen and (min-width: 1690px) {
  section.above-the-fold {
    padding-bottom: 220px;
  }
}

@media screen and (min-width: 1400px) {
  section.above-the-fold {
    padding-bottom: 50px;
  }
}

@media screen and (max-width: 1000px) {

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

@media screen and (max-width: 750px) {
  iframe{
    width: 300px !important;
    height: 200px !important;
  }
}

@media screen and (max-width: 500px) {
  section.above-the-fold {
    & > .content-container {
      padding-top: 40px;
    }
  }
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
