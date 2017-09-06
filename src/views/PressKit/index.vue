<template lang="html">
  <div id="presskit" class="body-content">
    <div class="bkg-color--matryx-lighter-grey">
      <section class="content-container content-container--small">
        <div class="presskit__header">
          <h2 class="text-color--matryx-grey-blue">PRESS KIT & RESOURCES</h2>
          <p>For press inquiries, please
            <a class="text-color--matryx-blue" href="mailto:press@matryx.ai">contact press@matryx.ai</a>
          </p>
          <a href="/Matryx_Assets.zip" download="Matryx_Assets">
            <button class="matryx-button matryx-button--blue">DOWNLOAD FULL PRESS KIT</button>
          </a>
        </div>
      </section>
    </div>
    <section class="content-container content-container--large">
      <div class="presskit__body">
        <div class="presskit__body__logos">
          <h2 class="text-color--matryx-darker-grey">Matryx Logo</h2>
          <p>Use the logo whenever possible to represent Matryx.</p>
          <div class="presskit__body__logos__container">
            <Logo v-for="logo in logos" :key="logo.filename"
              :src="logo.src"
              :alt="logo.src"
              :type="logo.type"
              :svg="logo.svg"
              :png="logo.png"
              :filename="logo.filename"
              :bluebkg="logo.bluebkg"
            ></Logo>
          </div>
        </div>
        <div class="presskit__body__symbols">
          <h2 class="text-color--matryx-darker-grey">Matryx Symbol</h2>
          <p>Use in areas where the logo would look too small.</p>
          <div class="presskit__body__symbols__container">
            <Logo v-for="symbol in symbols" :key="symbol.filename"
              :src="symbol.src"
              :alt="symbol.src"
              :type="symbol.type"
              :svg="symbol.svg"
              :png="symbol.png"
              :filename="symbol.filename"
              :bluebkg="symbol.bluebkg"
            ></Logo>
          </div>
        </div>
        <div class="presskit__body__colors">
          <h2 class="text-color--matryx-darker-grey">Matryx Colors</h2>
          <div class="presskit__body__colors__container">
            <Color v-for=" color in colors " :key="color.colorHex"
            :colorName="color.colorName"
            :colorHex="color.colorHex"
            :grey="color.grey"
            :blue="color.blue"
            :lightBlue="color.lightBlue"
            >
          </Color>
          </div>
        </div>
        <a href="/Matryx_Assets.zip" download="Matryx_Assets">
          <button class="matryx-button matryx-button--blue">DOWNLOAD FULL PRESS KIT</button>
        </a>
      </div>
    </section>
    <News-Events></News-Events>
    <Media-Mentions></Media-Mentions>
  </div>
</template>

<script>
import Logo from '@/components/Presskit-Download'
import Color from '@/components/Presskit-Color'
import MediaMentions from '@/views/Home/Media-Mentions'
import NewsEvents from '@/views/Home/News-Events'

import blackFullPng from '@/assets/presskit/Matryx_Black_Full_Logo.png'
import blackFullSvg from '@/assets/presskit/Matryx_Black_Full_Logo.svg'
import blackSymbolPng from '@/assets/presskit/Matryx_Black_Symbol.png'
import blackSymbolSvg from '@/assets/presskit/Matryx_Black_Symbol.svg'
import blackVerticalPng from '@/assets/presskit/Matryx_Black_Vertical_Logo.png'
import blackVerticalSvg from '@/assets/presskit/Matryx_Black_Vertical_Logo.svg'

import whiteFullPng from '@/assets/presskit/Matryx_White_Full_Logo.png'
import whiteFullSvg from '@/assets/presskit/Matryx_White_Full_Logo.svg'
import whiteSymbolPng from '@/assets/presskit/Matryx_White_Symbol.png'
import whiteSymbolSvg from '@/assets/presskit/Matryx_White_Symbol.svg'
import whiteVerticalPng from '@/assets/presskit/Matryx_White_Vertical_Logo.png'
import whiteVerticalSvg from '@/assets/presskit/Matryx_White_Vertical_Logo.svg'

export default {
  name: 'Presskit',

  mounted () {
    window.analytics.page('PressKit')
  },

  components: {
    Logo,
    Color,
    MediaMentions,
    NewsEvents
  },
  data () {
    return {
      logos: [
        {
          src: blackFullSvg,
          alt: 'Matryx Black Full Logo',
          type: 'Logo',
          svg: blackFullSvg,
          png: blackFullPng,
          filename: 'Matryx_Black_Full_Logo',
          bluebkg: false
        },
        {
          src: whiteFullSvg,
          alt: 'Matryx White Full Logo',
          type: 'Logo',
          svg: whiteFullSvg,
          png: whiteFullPng,
          filename: 'Matryx_White_Full_Logo',
          bluebkg: true
        },
        {
          src: blackVerticalSvg,
          alt: 'Matryx Black Vertical Logo',
          type: 'Logo',
          svg: blackVerticalSvg,
          png: blackVerticalPng,
          filename: 'Matryx_Black_Vertical_Logo',
          bluebkg: false
        },
        {
          src: whiteVerticalSvg,
          alt: 'Matryx White Vertical Logo',
          type: 'Logo',
          svg: whiteVerticalSvg,
          png: whiteVerticalPng,
          filename: 'Matryx_White_Vertical_Logo',
          bluebkg: true
        }
      ],
      symbols: [
        {
          src: blackSymbolSvg,
          alt: 'Matyrx Black Symbol',
          type: 'Logo',
          svg: blackSymbolSvg,
          png: blackSymbolPng,
          filename: 'Matryx_Black_Symbol',
          bluebkg: false
        },
        {
          src: whiteSymbolSvg,
          alt: 'Matyrx White Symbol',
          type: 'Logo',
          svg: whiteSymbolSvg,
          png: whiteSymbolPng,
          filename: 'Matryx_White_Symbol',
          bluebkg: true
        }
      ],
      colors: [
        {
          colorName: 'Dark Grey',
          colorHex: '#3B3C3F',
          grey: true,
          blue: false,
          lightBlue: false
        },
        {
          colorName: 'Blue',
          colorHex: '#0086CB',
          grey: false,
          blue: true,
          lightBlue: false
        },
        {
          colorName: 'Light Blue',
          colorHex: '#4EB1DE',
          grey: false,
          blue: false,
          lightBlue: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/styles.scss';

section {
  margin: 0px;
}
#presskit {
  .presskit__header {
    text-align: center;
  }

  .presskit__body {
    text-align:center;

    &__logos, &__symbols, &__colors {
      margin-bottom: 80px;

      &__container {
        display:flex;
        justify-content: center;
        flex-wrap: wrap;
      }
    }

  }
}

.matryx-button {
  text-align:center;
  border-radius: 40px;
  text-transform: uppercase;
  padding: 10px 20px;

  &--blue {
    border: 1px solid $matryx-blue;
    background-color: $matryx-blue;
    color: #FFF;

    &:hover {
      background-color: #FFF;
      color: $matryx-blue;
    }
  }
}
</style>
