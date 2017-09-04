<template>
  <section id="announcement" class="announcement bkg-color--blue-gradient">
    <div class="content-container content-container--large">
      <h2 class="announcement__header text-color--white">
        From now until
        <span class="announcement__header__date text-color--matryx-blue">
          October 13th
        </span>
        we are offering up to
      </h2>
      <h2 class="announcement__header text-color--white">150,000 MTX!</h2>
      <img class="announcement__token-img" src="../../assets/images/rewardsProgram/mtx-token.png" alt="mtx coin">
      <h4 class="announcement__sub-header text-color--white">Receiving MTX</h4>
      <hr class="announcement__hr"></hr>
      <p class="announcement__submit text-color--white">
        Submit post URLs with a public Ethereum address to
          <a href="mailto:bounties@matryx.ai">bounties@matryx.ai.</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Announcement'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors.scss';

.announcement{
  text-align:center;
  &__header {
    &:nth-child(2) {
      font-size: 4em;
    }
    &__date {
      white-space: nowrap;
      font-size: 1.3em;
      line-height: 2.5em;
    }
  }
  &__token-img {
    margin: 30px 10px;
  }
  &__sub-header {
    margin: 20px;
    font-size: 32px;
  }
  &__hr {
    margin: 0 0 5px 0;
  }
  &__submit {
    padding-top: 10px;
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) {
  .announcement {
    &__header {
      font-size: 24px;

      &:nth-child(2) {
        font-size: 2em;
      }
    }
    &__token-img {
      max-height:100px;
    }
    &__sub-header {
      font-size: 1.2em;
    }
    &__hr {
      border-color: $matryx-blue;
      border-width: 2px;
    }
  }
}
</style>
