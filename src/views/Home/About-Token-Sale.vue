<template>
  <section>
    <!-- I'm Dominique now.-->
    <div class="content-container--large content-container">
      <h1 class="text-color--purple text--bold font-size--large text--center">About Our Token Sale</h1>
      <div class="card-container--horizontal">
        <div class="about-container card-container--vertical">
          <div class="card">
            <h2 class="text-color--purple">Whey We're Having a Token Sale</h2>
            <p class="text-color--light-purple">
              Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
              No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
              feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
              Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
            </p>
          </div>
          <div class="card">
            <h2 class="text-color--purple">View Details in Our Whitepaper</h2>
            <p class="text-color--light-purple">
              Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
              No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
              feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
              Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
            </p>
          </div>
          <div class="card">
            <h2 class="text-color--purple">Benefits of the Blockchain</h2>
            <p class="text-color--light-purple">
              Lorem ipsum dolor sit amet, integre prompta sadipscing et per.
              No eius utinam fierent sea. Duo illud error at, has minim aliquid oportere in,
              feugiat laboramus mel ei. Ipsum fugit cu eam, pri id omittam consulatu.
              Sed cu eirmod commune deterruisset, ceteros maiorum qui ut.
            </p>
          </div>
        </div>
        <div class="roadmap-container card-container--vertical">
          <div class="roadmap">
            <h2 class="text-color--purple">Roadmap</h2>
            <h3 class="roadmap__year text-color--grey">2015</h3>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--past ">Q2</div>
              <p class="roadmap__section__date roadmap__section__date--past">10 NOV 2015</p>
              <div class="roadmap__section__description">
                <p>Nanome Incorporation</p>
                <caption>Token Pre-Sale Launches at 10am GMT for purchases of over
                  150 ETH. Pre-sale period will remain open for one week from Sept. 6 to Setpt 13.
                </caption>
              </div>
            </div>
            <h3 class="roadmap__year text-color--grey">2017</h3>
            <div class="roadmap__section ">
              <div class="roadmap__section__quarter roadmap__section__quarter--future">Q2</div>
              <p class="roadmap__section__date roadmap__section__date--future">10 NOV 2015</p>
              <div class="roadmap__section__description">
                <p>Nanome Incorporation</p>
                <caption>Token Pre-Sale Launches at 10am GMT for purchases of over
                  150 ETH. Pre-sale period will remain open for one week from Sept. 6 to Setpt 13.
                </caption>
              </div>
            </div>
          </div>
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

<style lang="scss" scoped>
@import '../../assets/css/colors';
  .card-container {
    &--horizontal,
    &--vertical {
      display:-webkit-box;display:-ms-flexbox;display:flex;
      justify-content: space-between;
    }
    &--vertical {
      flex-flow: column;

      &.about-container > * {
        height: calc(33.3333% - 10px);
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

    h2, p {
      flex: 0 1 auto;
    }

    img {
      height: auto;
      width: 100%;
    }
  }

  .roadmap {
    max-width: 300px;
    width: 100%;
    margin: 0 0 0 auto;
    right: 20px;
    position: relative;

    h2 {
      position: relative;
      right: 40px;
    }
    h3 {
      position: relative;
      right: 15px;
    }

    &__section {
      position:relative;
      border-left: 1px solid $classic-grey;
      display:-webkit-box;display:-ms-flexbox;display:flex;

      & > * {

      }

      &__date {
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        flex: 0 1 0;
        min-width: 80px;
        position: relative;
        left: 20px;

        &--future { color: $green; }
        &--past { color: $classic-grey;}
      }

      &__quarter {
        background-color: #80828D;
        border: 3px solid white;
        color: rgba(255, 255, 255, 0.7);
        display: inline-block;
        border-radius: 50px;
        padding: 2px;
        height: 32px;
        width: 32px;
        text-align: center;
        position: absolute;
        left: -15px;

          &--future { background-color: $green; color: rgba(255,255,255,0.7);}
          &--past { background-color: $classic-grey;color: rgba(255,255,255,0.7);}
      }

      &__description {
        position: relative;
        left: 17px;

        p {
          font-size: 18px;
          margin: 0;
        }
        caption {
          padding: 0;
          display: inline-block;
          font-style:normal;
        }
      }

    }
  }
  /*----- MEDIA QUERIESS -----*/
  @media screen and (max-width: 850px) {
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
    .roadmap {
      max-width: calc(100% - 20px);

      h2 {
        text-align: center;
        right: 0;
      }
    }
  }
</style>
