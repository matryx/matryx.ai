<template>
  <section id="above-the-fold-rp" class="bkg-color--matryx-blue-gradient">
    <div class="content-container content-container--large">
      <h1 class="font-size--large text-color--white">Matryx Rewards Program</h1>
      <a href="#ways-to-earn" class="above-the-fold-rp__button text-color--white">
        EARN MTX
      </a>
      <h2 class="above-the-fold-rp__lead text-color--white">Join The Conversation</h2>
      <div class="above-the-fold-rp__arrow text-color--matryx-light-blue">&lang;</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AbovetheFold'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors.scss';
  #above-the-fold-rp {
    display:flex;
    flex-direction:column;
    text-align:center;
    margin: 0;
    background: url('../../assets/images/rewardsProgram/rewards-program-bkg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    .font-size--large {
      font-size: 4.5em;
      line-height: 1.5em;
    }

    .above-the-fold-rp__button {
      display:block;
      margin:0 auto;
      height: 70px;
      width: 300px;
      margin-bottom: 20px;
      line-height: 70px;
      font-size: 1.5em;
      color: #fff;
      text-decoration: none;
      border-radius: 40px;
      border:none;
      background: rgb(7,24,39); /* Old browsers */
      background: -moz-linear-gradient(-45deg, rgba(7,24,39,1) 0%, rgba(0,134,203,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(-45deg, rgba(7,24,39,1) 0%,rgba(0,134,203,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(135deg, rgba(7,24,39,1) 0%,rgba(0,134,203,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#071827', endColorstr='#0086cb',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
      transition: all 0.3s ease-in-out;

      &:hover {
        background: rgba(255,255,255,0.9) !important;
        text-decoration: none;
        color: $matryx-dark-blue;
        cursor:pointer;
      }
    }

    .above-the-fold-rp__lead {
      font-weight: lighter;
    }

    .above-the-fold-rp__arrow {
      margin-top: 50px;
      font-size: 5em;
      transform: rotate(-90deg);
    }
  }

  @media screen and (max-width: 767px) {
    #above-the-fold-rp {
      .font-size--large {
        font-size: 3em;
        line-height: 1.2em;
      }
    }
  }
</style>
