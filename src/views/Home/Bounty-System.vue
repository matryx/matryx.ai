<template>
  <section class="bkg--blue-gradient">
    <div class="content-container content-container--large   text-color--white">
      <h1 class="content-container--medium">
        Incentivized Innovation Through Collaborative Competition
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
              <h3>Bounty is Posted
              <p>Marshall requests a 3D Spacecraft model &#38; posts a bounty</p>
              </h3>

            </div>
            <div class="bounty__explanation__card__item">
              <span>2</span>
              <h3>Designs Submitted
                <p>Two users submit their best Spacecraft models.
                  Marshall likes a design and requests a round of revision from the community.
                </p>
              </h3>
            </div>
            <div class="bounty__explanation__card__item">
              <span>3</span>
              <h3>Winner is Chosen
                <p>
                  Two new users take Marshall's favorite designs and 'remix' it. Marshall chooses a winner and a smart contract distributes MTX to all contributors.
                </p>
              </h3>
            </div>
          </div>
        </div>
        <div class="bounty__diagram">
          <h4>COMPETITION STARTS</h4>
          <caption class="text-color--white ">BOUNTY: DESIGN A SPACECRAFT</caption>
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




// <style lang="scss" scoped>
section {
  padding: 20px 0 ;
}

h1, h4, p, caption {
  opacity: 0.8;
}

h1 {
  margin-bottom: 20px;
  max-width: 550px;
}

.bkg--blue-gradient {
  background-image: url('../../assets/images/backgrounds/bluegradient.png');
  background-size:cover;
  background-repeat: no-repeat;
  background-position:bottom;
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
    padding-top: 30px;

   h4, caption {
      width: 100%;
      text-align:center;
      font-size: 20px;
    }
    caption{
      display: block;
      padding-top: 0;
      margin-bottom: 20px;
      font-size: 14px;
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
      font-size:22px;
      margin-bottom: 20px;
    }

   &__card {
      border: 1px solid rgba(255,255, 255,0.3);
      padding: 20px;

     &__item {
        & > span {
          display:inline-block;
          vertical-align: top;
          font-size: 16px;
        }
        h3 {
          display: inline-block;
          width: calc(100% - 70px);
          margin-left: 20px;

         &::after {
            content: '';
            clear: both;
          }

         span, p {
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
  .content-container {
    padding-bottom: 0;
  }
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
//
// section {
//   padding: 20px 0 ;
// }
//
// h1, h4, p, caption {
//   opacity: 0.8;
// }
//
// h1 {
//   margin-bottom: 20px;
//   max-width: 550px;
// }
//
// .bkg--blue-gradient {
//   background-image: url('../../assets/images/backgrounds/bluegradient.png');
//   background-size:cover;
//   background-repeat: no-repeat;
//   background-position:bottom;
// }
//
// p.content-container--medium {
//   max-width: 750px;
//   font-size: 18px;
// }
//
// .bounty {
//   display:-webkit-box;display:-ms-flexbox;display:flex;
//   justify-content: space-between;
//   margin: 40px 0;
//
//   &__diagram {
//     flex: 1 1 auto;
//     padding-top: 30px;
//
//     h4, caption {
//       width: 100%;
//       text-align:center;
//       font-size: 20px;
//     }
//     caption{
//       display: block;
//       padding-top: 0;
//       margin-bottom: 20px;
//       font-size: 14px;
//     }
//     img {
//       width: 100%;
//     }
//   }
//
//   &__explanation{
//     padding-top: 20px;
//     width: 50%;
//     max-width: 400px;
//     margin-right: 80px;
//     position:relative;
//
//     & > h4 {
//       opacity: 0.8;
//       font-size:22px;
//       margin-bottom: 20px;
//     }
//
//     &__card {
//       border: 1px solid rgba(255,255, 255,0.3);
//       padding: 20px;
//
//       &__item {
//         & > span {
//           display:inline-block;
//           vertical-align: top;
//           font-size: 16px;
//         }
//         h3 {
//           display: inline-block;
//           width: calc(100% - 70px);
//           margin-left: 20px;
//
//           &::after {
//             content: '';
//             clear: both;
//           }
//
//           span, p {
//             font-size: 16px;
//             display:block;
//             opacity: 0.8;
//           }
//         }
//       }
//     }
//   }
// }
//
//
// /*----- MEDIA QUERIES -----*/
// @media screen and (max-width: 900px) {
//   .content-container {
//     padding-bottom: 0;
//   }
//   .bounty {
//     flex-direction: column;
//     & > * {
//       width: 100%;
//       max-width: 100%;
//     }
//     &__explanation__card {
//       margin-bottom: 40px;
//     }
//     &__diagram img {
//       max-width: 500px;
//       margin: 0 auto;
//       display: block;
//     }
//   }
// }
//
</style>
