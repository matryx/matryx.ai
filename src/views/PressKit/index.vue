<template lang="html">
  <div id="presskit" class="body-content">
    <div class="bkg--matryx-lighter-grey">
      <section class="content-container content-container--small">
        <div class="presskit__header">
          <h2 class="text-color--matryx-grey-blue">PRESS KIT & RESROUCES</h2>
          <p>For press inquiries, please contact <a href="mailto:press@matryx.ai">press@matryx.ai</a></p>
          <a href="@/assets/presskit" download="Matryx_Assets">
            <button class="matryx-button matryx-button--blue">DOWNLOAD FULL PRESSKIT</button>
          </a>
        </div>
      </section>
    </div>
    <section class="content-container content-container--large">
      <div class="presskit__body">
        <div class="presskit__body__logos">
          <h2 class="text-color--matryx-darker-grey">Matryx Logo</h2>
          <p>Use the logo whenever possible to represent Matryx.</p>
          <Logo v-for="logo in logos" :key="logo.filename"
            :src="logo.src"
            :alt="logo.src"
            :type="logo.type"
            :svg="logo.svg"
            :png="logo.png"
            filename="logo.filename"
          ></Logo>
        </div>
        <div class="presskit__body__symbols">
          <h2 class="text-color--matryx-darker-grey">Matryx Symbol</h2>
          <p>Use in areas where the logo would look too small.</p>
          <Logo v-for="symbol in symbols" :key="symbol.filename"
            :src="symbol.src"
            :alt="symbol.src"
            :type="symbol.type"
            :svg="symbol.svg"
            :png="symbol.png"
            filename="symbol.filename"
          ></Logo>
        </div>
        <div class="presskit__body__colors">

        </div>
        <a href="@/assets/presskit" download="Matryx_Assets">
          <button class="matryx-button matryx-button--blue">DOWNLOAD FULL PRESSKIT</button>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '@/components/Presskit-Download'

export default {
  name: 'Presskit',
  components: {
    Logo
  },
  data () {
    return {
      logos: [
        {
          src: '',
          alt: '',
          type: '',
          svg: '',
          png: '',
          filename: ''
        }
      ],
      symbols: [
        {
          src: '',
          alt: '',
          type: '',
          svg: '',
          png: '',
          filename: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

#presskit {
  .presskit__header {

    h2 {

    }

    p {

    }

  }

  .presskit__body {

    & > * > h2 {

    }

    & > * > p {

    }

    &__logos {

    }

    &__symbols {

    }

    &__colors {

    }

  }
}
</style>
