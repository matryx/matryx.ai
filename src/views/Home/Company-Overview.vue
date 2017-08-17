<template>
  <section>
    <hr>
    <div class="content-container--large content-container">
      <h1 class="text-color--purple text--bold font-size--large">Company Overview</h1>
      <div class="overview">
        <div class="overview__column-1 mobile--order-1">
          <h1 class="text-color--purple">Company Background</h1>
          <p class="text-color--light-purple">
            Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
            No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
            feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
            Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
          </p>
          <button class="btn-yellow">Read the Whitepaper</button>
        </div>
        <div class="overview__column-2 mobile--order-2">
          <img src="../../assets/images/video-preview.png" alt="">
        </div>
      </div>
      <div class="overview">
        <div class="overview__column-2">
          <img src="../../assets/images/video-preview.png" alt="">
        </div>
        <div class="overview__column-1">
          <h1 class="text-color--purple">The Problem</h1>
          <p class="text-color--light-purple">
            Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
            No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
            feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
             Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
          </p>
          <button class="btn-yellow">Read the Whitepaper</button>
        </div>
      </div>
      <div class="overview">
        <div class="overview__column-1 mobile--order-1">
          <h1 class="text-color--purple">The Matryx Solution</h1>
          <p class="text-color--light-purple">
            Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
            No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
            feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
             Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
          </p>
          <button class="btn-yellow">Read the Whitepaper</button>
        </div>
        <div class="overview__column-2 mobile--order-2">
          <img src="../../assets/images/video-preview.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CompanyOverview'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors';

  section {
    padding: 40px 0px;
  }

  h1.font-size--large {
    margin: 40px 0;
  }

  .pull-left {
    float: left;
  }
  .pull-right {
    float: right;
  }

  .overview {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid $purple;

    &__column-1,
    &__column-2 {
      width: calc(50% - 40px);

    }
    &__column-1 {
    }
    &__column-2 {

      img {
        width: 100%;
      }
    }
  }

  /*----- MEDIA QUERIESS -----*/
  @media screen and (max-width: 750px) {
    .overview {
      flex-direction: column;

      &__column-1,
      &__column-2 {
        width: 100%;
        float: none;

        img {
          margin-bottom: 30px;
        }
      }
    }
    .mobile--order-1 {
      order: 1;
    }
    .mobile--order-1 {
      order: 2;
    }
  }
</style>
