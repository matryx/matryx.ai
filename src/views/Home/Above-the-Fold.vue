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
          <span v-else>Join Our Token Sale</span>
        </h1>

        <div>
          <p class="uppercase text-center text-color--matryx-blue" style="margin-bottom: -10px;">Ends in:</p>
          <Countdown end="October 13 2017 15:00:00 UTC" style="margin-top: 0px;"></Countdown>

          <Matryx-Btn text="Purchase MTX" :handleClick="openSaleModal">
          </Matryx-Btn>

          <p class="text-center text-color--matryx-blue">
            Already purchased MTX? <span class="link" @click="openMTXModal">Check your balance.</span>
          </p>
        </div>
      </div>

      <div class="token-sale__video-launcher content-container--medium">
        <iframe class="matryx-video-yt"
          width="560" height="315"
          :src="selectedLanguage" frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>

    </div>
  </section>
</template>

<script>
import Countdown from '@/components/Countdown'
import GetNotified from '@/components/Get-Notified'
import Video from '../../assets/media/giphy.mp4'
import MatryxBtn from '@/components/Matryx-Btn'

export default {
  name: 'AboveTheFold',

  components: {
    Countdown,
    GetNotified,
    MatryxBtn
  },

  mounted () {
  },

  computed: {
    language () {
      return this.$store.state.language
    },

    selectedLanguage () {
      return this.language === 'ch' ? this.VideoLinks.Chinese : this.VideoLinks.English
    }
  },

  data () {
    return {
      Video,
      VideoLinks: {
        English: 'https://www.youtube.com/embed/iLHlwnaqTWw?rel=0&amp;showinfo=0',
        Chinese: 'http://player.youku.com/embed/XMzAwNDA0MTQzNg=='
      },
      totalSold: ''
    }
  },

  methods: {
    goToPreSale () {
      this.$router.push({ name: 'PreSale' })
    },
    openSaleModal () {
      this.$store.commit('showSaleModal', true)
    },
    openMTXModal () {
      this.$store.commit('showCheckMTXModal', true)
    }
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
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 40px 160px;
  }

  .matryx-button {
    background-color: $light-green;
    border-color: $light-green;
    margin: 0 auto 10px;

    &:hover {
      background-color: $matryx-blue;
      border-color: $white;
    }
  }

  .link {
    text-decoration: underline;

    &:hover {
      color: $white;
      cursor: pointer;
    }
  }

  .token-sale__progress {
    min-width: 300px;
    width: 100%;
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
