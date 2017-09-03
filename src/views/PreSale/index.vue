<template>
  <section id="presale" class="body-content">
    <Navbar-TokenSale></Navbar-TokenSale>
    <div id="presale__above-the-fold">
      <div class="presale__header
        font-size--large uppercase text-color--white">
        <h1>Join the Matryx Token Pre-Sale</h1>
      </div>
      <div class="presale__content content-container content-container--large text-color--white">
        <div class="presale__discounts content-container--medium">
          <h3 class="presale__discounts--title">Pre-Sale Discounts</h3>
          <div class="presale__discounts--list">
            <div class="presale__discounts--list--10">
              <SaleIcon
                :img="discount10"
                text="10% for purchases between 150 - 300 ETH*"
              ></SaleIcon>
            </div>
            <div class="presale__discounts--list-15">
              <SaleIcon
                :img="discount15"
                text="15% for purchases over 300 ETH*"
              ></SaleIcon>
            </div>
          </div>
          <div class="presale__discounts--disclaimer">
            *Discounts only available for purchases made during the pre-sale period
          </div>
        </div>

        <div class="presale__calculator__results content-container--medium">
          <div class="presale__calculator">
            <h3 class="presale__calculator--title">
              How much could you save?
            </h3>
            <div class="presale__calculator--input">
              <input type="number"
                name="presale-calculator"
                placeholder="ETH"
                v-model="purchaseAmount"
              >
              <div> ETH spent </div>
            </div>
          </div>

          <div class="presale__results">
            <div class="presale__results--pre">
              <p>MTX Tokens during Pre-Sale</p>
              <div class="presale__results--box">
                {{ mtxPresale | num_commas }}
              </div>
            </div>

            <div class="presale__results--reg">
              <p>MTX Tokens during Regular Sale</p>
              <div class="presale__results--box">
                {{ mtxRegular | num_commas }}
              </div>
            </div>
          </div>

          <div class="presale__results--explanation">
            <p v-show="diff > 0">
              By participating in the Pre-Sale, you <br/>receive
              <span class="diff"
                :class="{ 'text-color--light-green': diff > 0 }">
                {{ diff | num_commas }}
              </span>
              <span class="extra">extra MTX!</span>
            </p>
            <p v-show="diff <= 0">
              The minimum purchase amount to receive a discount is 150 ETH.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="presale__sign-up">
      <h2>
        {{ message }}
      </h2>
      <Countdown :end="end" class="presale__countdown"></Countdown>
      <h2 class="text-center">
        Sign up if you're interested in participating in the Pre-Sale
      </h2>
      <Get-Notified ctaLocation="Pre-Sale"></Get-Notified>
    </div>
  </section>
</template>

<script>
import NavbarTokenSale from '@/components/Navbar-Tokensale'
import SaleIcon from '@/components/Sale-Icon'
import GetNotified from '@/components/Get-Notified'
import Countdown from '@/components/Countdown'

import discount10 from '@/assets/icons/icon-sale-10discount.svg'
import discount15 from '@/assets/icons/icon-sale-15discount.svg'

export default {
  name: 'PreSale',

  components: {
    NavbarTokenSale,
    SaleIcon,
    GetNotified,
    Countdown
  },

  data () {
    return {
      baseMtx: 1164.96662324,
      purchaseAmount: null,
      discount10,
      discount15,
      message: 'Pre-Sale Starts In:'
    }
  },

  computed: {
    end () {
      const date = 'September 6 2017 15:00:00 UTC'
      const today = new Date()
      const startDate = new Date(date)

      if (today.getTime() - startDate.getTime() > 0) {
        this.message = 'Pre-Sale Ends and Main Sale Starts In:'
        return 'September 13 2017 14:59:59 UTC'
      } else {
        return date
      }
    },
    diff () {
      return this.mtxPresale - this.mtxRegular
    },

    mtxPresale () {
      if (this.purchaseAmount >= 150 && this.purchaseAmount < 300) {
        return Math.round(this.purchaseAmount * (this.baseMtx * 1.1))
      }

      if (this.purchaseAmount > 300) {
        return Math.round(this.purchaseAmount * (this.baseMtx * 1.15))
      }

      return Math.round(this.purchaseAmount * this.baseMtx)
    },

    mtxRegular () {
      return Math.round(this.purchaseAmount * this.baseMtx)
    }
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
      padding: 40px 20px 150px 20px;

      & > .content-container--medium {
        width: 100%;
      }
    }

    .presale__discounts {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &--list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        padding: 25px;

        div {
          width: 200px;
        }

        img {
          width: 130px;
        }
      }
    }

    .presale__calculator__results {
      background-color: rgba(0,0,0,0.46);
      padding: 20px 0 0 0;
      border-radius: 7px;
    }

    .presale__calculator {
      margin: 10px 50px;

      &--input {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 0;

        input, div {
          height: 40px;
          border-radius: 100px;
          border-style: unset;
          font-size: 22px;
          padding: 20px;
          width: 170px;
        }

        input {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          margin-right: 0;
          text-align: center;
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          background-color: $matryx-dark-blue;
        }
      }
    }

    .presale__results {
      &--pre, &--reg {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          margin-bottom: 0;
        }
      }

      &--box {
        height: 40px;
        width: 300px;
        margin-top: 5px;
        margin-bottom: 20px;
        background-color: $white;
        border-radius: 8px;
        color: $matryx-blue;
        font-size: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &--explanation {
        margin-top: 20px;
        padding: 15px;
        border-top: 1px solid $matryx-red;
        background-color: rgba(5, 101, 151, 0.46);
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;

        .diff {
          font-size: 26px;
          margin: 0 2px;
        }

        .extra {
          font-size: 20px;
        }
      }
    }
  }

  #presale__sign-up {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    margin-bottom: -100px;

    .cta__form .cta__form__email {
      border: 1px solid $matryx-blue;
    }
  }

  /*----- MEDIA QUERIES -----*/
  @media screen and (min-width: 1690px) {
    #presale__above-the-fold {
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
      & > .content-container {
        padding-bottom: 200px;
      }

      .presale__calculator {
        margin: 10px 50px;

        &--input {
          input, div {
            min-width: 120px;
          }

          div {
            font-size: 14px;
          }
        }
      }

      .presale__results {
        &--box {
          width: 200px;
        }
      }
    }
  }
</style>
