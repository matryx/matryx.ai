<template>
  <section id="announcement" class="announcement bkg-color--blue-gradient">
    <div class="content-container content-container--large">
      <h2 class="announcement__header text-color--white">
        From now until the end of the token sale
        (<span class="announcement__header__date text-color--matryx-blue">Oct. 13</span>)
        we are offering up to:
      </h2>
      <h2 class="announcement__header text-color--white">150,000 MTX!</h2>
      <img class="announcement__token-img" src="../../assets/images/rewardsProgram/mtx-token.png" alt="mtx coin">
      <h4 class="announcement__sub-header text-color--white">Receiving MTX</h4>
      <hr class="announcement__hr"></hr>
      <p class="text-color--white">
        Submit post URLs with a public Ethereum address to bounties@matryx.ai.
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
      font-size: 3em;
    }
    &__date {
      white-space: nowrap;
    }
  }
  &__token-img {
    margin:10px;
  }
  &__sub-header {
    margin-top: 20px;
  }
  &__hr {
    margin: 0 0 5px 0;
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
