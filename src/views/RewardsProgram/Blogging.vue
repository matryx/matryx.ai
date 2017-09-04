<template>
  <section id="blogging" class="blogging bkg-color--blue-yellow-gradient text-center">
    <div class="content-container content-container--small">
      <h2 class="blogging__header text-color--white">Blogging</h2>
      <hr class="blogging__hr">
      <p class="blogging__paragraph">
        Topic: Use Cases Of Matryx Blogs must be in English, Chinese,
        Russian, Korean, Japanese or Spanish and have 300 or more followers.
        Blogs must be 700 characters or more, link directly to the Matryx homepage
        (<a  class="blogging__link text-color--matryx-light-blue" href="https://matryx.ai">https://matryx.ai</a>), and contain entirely unique content.
        Blogs will be evaluated for quality and length and will earn between
        30 - 200 stakes, as determined by the judgement of the Matryx team.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Blogging'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors.scss';

.blogging {
  &__paragraph {
    color: #fff;

    .text-color--matryx-light-blue {
      &:hover, &active {
        text-decoration:none;
      }
      &:hover {
        color:$matryx-lighter-blue;
        cursor:pointer;
      }
    }
  }
  &__hr {
    border-color: #FFF;
    border-width: 2px;
  }
}

</style>
