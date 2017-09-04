<template lang="html">
  <div class="loader-page bkg-color--dark-blue-gradient">
    <div class="loader">
      <img class="loader__image loader__image--left" src="../assets/images/Matryx-Mark-White-Left.png" alt="">
      <img class="loader__image loader__image--center" src="../assets/images/Matryx-Mark-White-Center.png" alt="">
      <img class="loader__image loader__image--right" src="../assets/images/Matryx-Mark-White-Right.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
  .loader-page {
    position:fixed;
    top:0;
    left:0;
    z-index:100000;
    width: 100vw;
    height: 100vh;
    overflow:hidden;

    .loader {
      width: 50%;
      height: 50%;
      min-width: 50px;
      min-height: 50px;
      padding-top: calc(20% - 25px);
      transform: translate(50%, 25%);
      text-align:center;

      .loader__image {
        height:50px;
        width: 25px;
        z-index: 1000000;
        position:relative;

        &--left {
          animation: matryx-loader-left 2.5s infinite;
        }
        &--right {
          animation: matryx-loader-right 2.5s infinite;
        }
        &--center {
          position:absolute;
          width: 100px;
          height:35px;
          padding-top: 15px;
          transform: translateX(-50%);
          animation: matryx-loader-center 2.5s infinite;
        }
      }
    }
  }

  @keyframes matryx-loader-center {
    0% { opacity: 0; }
    50% { opacity: 0; }
    60% { opacity: 1; }
    70% { opacity: 1; }
    90% { opacity: 0; }
    100% { opacity: 0; }
  }

  @keyframes matryx-loader-left {
    0% {opacity: 0; left:-100px;}
    10% {opacity: 0; left:-100px;}
    11% {opacity: 1;}
    12% {opacity: 0;}
    13% {opacity: 1;}
    14% {opacity: 0;}
    15% {opacity: 1;}
    16% {opacity: 0}
    20% {opacity:1; left: -100px;}
    40% {left: 0;}
    50% {left: -50px;}
    70% {opacity: 1; left: -50px;}
    90% {opacity: 0;left: -100px;}
    100% {opacity: 0;}
  }

  @keyframes matryx-loader-right {
    0% {opacity: 0; right:-100px;}
    10% {opacity: 0; right:-100px;}
    11% {opacity: 1;}
    12% {opacity: 0;}
    13% {opacity: 1;}
    14% {opacity: 0;}
    15% {opacity: 1;}
    16% {opacity: 0}
    20% {opacity:1; right: -100px;}
    40% {right: 0;}
    50% {right: -50px;}
    70% {opacity: 1; right: -50px;}
    90% {opacity: 0;right: -100px;}
    100% {opacity: 0;}
  }
</style>
