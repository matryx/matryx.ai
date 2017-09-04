<template>
  <section id="blogging" class="blogging ">
    <div class="content-container content-container--small bkg-color--blue-yellow-gradient text-center">
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
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+50,082c49+50 */
  background: rgb(255,255,255); /* Old browsers */
  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(8,44,73,1) 50%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(8,44,73,1) 50%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(8,44,73,1) 50%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#082c49',GradientType=0 ); /* IE6-9 */

  .content-container {
    border-radius: 40px;
  }

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

@media screen and (max-width: 650px) {
  .blogging {
    .content-container {
      border-radius: 0px;
      margin-left: 0px;
      max-width: 100%;
      margin-right: 0px;
    }

    &__paragraph {

    }
  }
}
</style>
