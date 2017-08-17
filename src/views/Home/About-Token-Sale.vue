<template>
  <section>
    <div class="content-container--large content-container">
      <h1 class="text-color--purple text--bold font-size--large">About Our Token Sale</h1>
      <div class="card-container--horizontal">
        <div class="card-container--vertical">
          <div class="card">
            <h1 class="text-color--purple">Whey We're Having a Token Sale</h1>
            <p class="text-color--light-purple">
              Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
              No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
              feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
              Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
            </p>
          </div>
          <div class="card">
            <h1 class="text-color--purple">View Details in Our Whitepaper</h1>
            <p class="text-color--light-purple">
              Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
              No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
              feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
              Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
            </p>
          </div>
        </div>
        <div class="card">
          <h1 class="text-color--purple">Benefits of the Blockchain</h1>
          <p class="text-color--light-purple">
            Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
            No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
            feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
            Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
          </p>
          <img src="../../assets/images/video-preview.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutTokenSale'
}
</script>

<style lang="scss">
@import '../../assets/css/colors';
  .card-container {
    &--horizontal,
    &--vertical {
      display:-webkit-box;display:-ms-flexbox;display:flex;
      justify-content: space-between;
    }
    &--vertical {
      flex-flow: column;
      & > * {
        height: calc(50% - 10px);
      }
    }
    &--horizontal {
      margin-top: 40px;

      & > * {
        width: calc(50% - 10px);
      }
    }
  }
  .card {
    display: -webkit-box; display: -ms-flexbox;display: flex;
    flex-direction: column;
    border: 1px solid $purple;
    border-radius: 0;
    padding: 20px;
    justify-content: flex-start;

    h1, p {
      flex: 0 1 auto;
    }

    img {
      height: auto;
      width: 100%;
    }
  }

  /*----- MEDIA QUERIESS -----*/
  @media screen and (max-width: 750px) {
    .card-container {
      &--vertical {
        width: 100%;
      }
      &--horizontal {
        flex-flow:column;
        width: 100%;
        & > * {
          width:100%;
        }
      }
    }
    .card {
      margin-bottom: 20px;
    }
  }
</style>
