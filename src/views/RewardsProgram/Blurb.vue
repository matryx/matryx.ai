<template>
  <section id="blurb" class="bkg-color--matryx-lighter-grey">
    <div class="content-container content-container--large">
      <h3 class="blurb__text text-color--matryx-blue">
        Matryx aims to tackle the world's biggest &amp; smallest problems.
        <br>
        That's why we need the entire community involved!
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blurb'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors.scss';

  #blurb {
    .blurb {
      &__text {
        text-align:center;
      }
    }
  }

  @media screen and (max-width: 767px) {
    #blurb{
      .content-container {
        padding: 40px 20px;
      }
      .blurb__text {
        font-size: 24px;
      }
    }
  }
</style>
