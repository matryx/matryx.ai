<template>
  <section>
    <b-jumbotron
    class="bkg-color--purple"
      header="A Decentralized Research Platform."
      lead="Driven by Collaboration &amp; Competition." >
      <!-- <video src="../../assets/media/giphy.mp4" autoplay loop poster="posterimage.jpg" class="tokensale-background"></video> -->

    </b-jumbotron>
    <div class="media-mentions bkg-purple">
      <p>Featured in</p>
      <div class=" content-container content-container--large media-mentions__img-container">
        <img src="../../assets/images/gizmodo.png" alt="">
        <img src="../../assets/images/sdut-logo.png" alt="">
        <img src="../../assets/images/UCSD-logo.png" alt="">
        <img src="../../assets/images/singularity.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboveTheFold'
}
</script>

<style lang="scss">

section {
  margin-top: 0px;
}

.jumbotron {
  .container{
    position: static;
    // p, h1{
    //   z-index: 2;
    //   position: absolute;
    //   width: calc(100% - 248px);
    //   text-align: center;
    // }
    // p{
    //   bottom: 0px;
    // }
  }
}

/*media mentions*/
.media-mentions {
  display:-webkit-box;display:-ms-flexbox;display:flex;
  flex-direction: column;

  p{
    text-align: center;
    text-transform: uppercase;
  }

  &__img-container {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width:200px;
    }
  }

}

.tokensale-background {
  position:absolute;
  min-height:100%;
  min-width:100%;
  top:0;
  left:0;
  z-index: 1;
}

</style>
