<template>
  <section class="bkg-color--bright-purple">
    <div class="content-container content-container--large   text-color--white">
      <h1 class="content-container--medium">
        Incentivized Innovation Through Collaborative Compeition
      </h1>
      <p class="content-container--medium">
        The Matryx Bounty Marketplace aims to accelerate innovation and reward all users who contribute.
        A bounty is simply a challenge posted to the platform with a fair MTX reward for users who contribute
        to the answer. Any user can post bounties to the Matryx community and any user can participate.
      </p>
      <div class="bounty">
        <div class="bounty__explanation">
          <h4 class="">How it Works</h4>
          <div class="bounty__explanation__card">
            <div class="bounty__explanation__card__item">
              <span>1</span>
              <h3>Bounty is Posted <span>Tom requests a 3D Spaceship model & posts a bounty</span></h3>
            </div>
            <div class="bounty__explanation__card__item">
              <span>2</span>
              <h3>Designs Submitted
                <span>Two users submit their best Spaceship models.
                  Tom likes a design and requests a round of revision.
                </span>
              </h3>
            </div>
            <div class="bounty__explanation__card__item">
              <span>3</span>
              <h3>Winner is Chosen
                <span>
                  Two new users take Tom's favorite designs and 'remix' them.
                  Tom chooses a winner, giving the original creator &amp; the creator of the 'remix' MTX.
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div class="bounty__diagram">
          <h4>COMPETITION STARTS</h4>
          <caption class="text-color--white ">BOUNTY: BUILD SPACESHIP</caption>
          <img src="../../assets/images/bounty-drawing.svg" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BountySystem'
}
</script>

<style lang="scss" scoped>
section {
  padding: 40px 0;
}

h1, h4, p, caption {
  opacity: 0.8;
}

h1 {
  margin-bottom: 20px;
  max-width: 550px;
}

p.content-container--medium {
  max-width: 750px;
  font-size: 18px;
}

.bounty {
  display:-webkit-box;display:-ms-flexbox;display:flex;
  justify-content: space-between;
  margin: 40px 0;

  &__diagram {
    flex: 1 1 auto;

    h4, caption {
      width: 100%;
      text-align:center;
    }
    caption{
      display: block;
      padding-top: 0;
      margin-bottom: 20px;
    }
    img {
      width: 100%;
    }
  }

  &__explanation{
    padding-top: 20px;
    width: 50%;
    max-width: 400px;
    margin-right: 80px;
    position:relative;

    & > h4 {
      opacity: 0.8;
    }

    &__card {
      border: 1px solid rgba(255,255, 255,0.3);
      padding: 20px;

      &__item {
        & > span {
          display:inline-block;
          vertical-align: top;
        }
        h3 {
          display: inline-block;
          width: calc(100% - 70px);
          margin-left: 20px;

          &::after {
            content: '';
            clear: both;
          }

          span {
            font-size: 16px;
            display:block;
            opacity: 0.8;
          }
        }
      }
    }
  }
}


/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 900px) {
  .bounty {
    flex-direction: column;

    & > * {
      width: 100%;
      max-width: 100%;
    }

    &__explanation__card {
      margin-bottom: 40px;
    }
    &__diagram img {
      max-width: 500px;
      margin: 0 auto;
      display: block;
    }
  }
}

</style>
