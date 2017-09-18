<template>
  <div class="body-content">
    <section id="presale">
      <Navbar-TokenSale></Navbar-TokenSale>
      <div id="presale__above-the-fold">
        <div class="presale__header  text-color--white content-container--medium content-container">
          <h1 class="uppercase" style="font-size: 45px;">Pre-Sale has ended</h1>
          <a href="/">
            <Matryx-Btn class="sale" text="Participate in the main sale">
            </Matryx-Btn>
          </a>
          <p class="text-color--matryx-blue"><a href="/sale-terms.pdf"class="text-color--matryx-blue">View sale terms in PDF format.</a></p>
        </div>
      </div>
      <Audited-By></Audited-By>
      <Token-Sale-Info></Token-Sale-Info>
    </section>
  </div>

</template>

<script>
import NavbarTokenSale from '@/components/Navbar-Tokensale'
import MatryxBtn from '@/components/Matryx-Btn'
import TokenSaleInfo from '@/views/Home/Token-Sale'
import AuditedBy from '@/components/Audited-By'

export default {
  name: 'PreSale',

  components: {
    NavbarTokenSale,
    MatryxBtn,
    AuditedBy,
    TokenSaleInfo
  },

  mounted () {
    window.analytics.page('PreSale')
  }
}
</script>

<style lang="scss">
@import '../../assets/css/colors';

  #presale__above-the-fold {
    padding-top: 50px;
    padding-bottom: 100px;
    margin-bottom: 0px;
    margin-top: -5px;
    border-radius: 0;
    background-image: url('../../assets/images/backgrounds/abovethefoldbkg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: bottom;
    text-align: center;

    .presale__content {
      display: flex;
      justify-content: space-between;
      padding: 40px 20px 55px;

      & > .content-container--medium {
        width: 100%;
      }
    }
  }

  footer {
    margin-top: 0px;
  }

  .sale.matryx-button {
    &--blue {
      border: 1px solid #49b749;
      background-color: #49b749;
      color: rgba(255, 255, 255, 0.9);
      font-size: 20px;

      &:hover {
        border: 1px solid #FFF;
        background-color: $matryx-blue;
        color: #FFF;
      }
      &:active {
        position:relative;
        top: 2px;
      }
    }
  }

  /*----- MEDIA QUERIES -----*/
  @media screen and (min-width: 1690px) {
    #presale__above-the-fold.minimum {
      padding-bottom: 220px;
    }
  }

  @media screen and (max-width: 1000px) {
    #presale__above-the-fold {
      .presale__content {
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > .content-container--medium {
          margin-bottom: 40px;
          margin-top: 0;
          width: 80%;
        }
      }
    }
  }

  @media screen and (max-width: 560px) {
    #presale__above-the-fold {
      // & > .content-container {
      //   padding-bottom: 200px;
      // }
      .minimum {
        padding-bottom: 250px;
      }
    }
  }
</style>
