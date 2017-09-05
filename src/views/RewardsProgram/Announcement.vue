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
      <hr class="announcement__hr"></hr>
      <p class="announcement__submit text-color--white">
        <br/>
        The Matryx Rewards program is a unique avenue with which we can simultaneously
        engage and grow the community through a tiered bounty system. It is designed to reward
        participants who significantly contribute to our overall outreach.
        <br/><br/>
        As our community driven outreach grows, tiers are unlocked which
        increase the possible MTX per stake!
      </p>
      <h4 class="announcement__sub-header text-color--white">
        <!-- As our community driven outreach grows, new levels are unlocked to
        increase the possible MTX per stake available! -->
      </h4>
      <a href="" >
        <span class="announcement__button">PARTICIPATE</span>
      </a>
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
    font-size: 28px;
  }
  &__hr {
    margin: 0 0 5px 0;
  }
  &__submit {
    padding-top: 10px;
    font-size: 20px;
  }
  &__button {
    display:block;
    margin: 0 auto;
    line-height: 50px;
    width: 250px;
    height: 50px;
    font-size: 20px;
    border-radius: 40px;
    background-color: $yellow;
    color: #FFF;

    &:hover {
      background-color: #FFF;
      color: $light-yellow;
      cursor:pointer;
      text-decoration: none;
    }
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
