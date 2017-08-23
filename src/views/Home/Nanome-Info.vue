<template>
  <section>
    <div class="content-container content-container--large nanome">
      <div class="nanome__info">
        <h4 class="nanome__info__title">Built by the Team at Nanome</h4>
        <div class="nanome__info__text text-color--matryx-dark-grey">
          Nanome builds intelligent virtual reality interfaces that enable scientists and engineers to collaborate, design and simulate with nanoscale precision. Our software helps advance research and development in life sciences, materials sciences, and nanoengineering by integrating a hands-on virtual reality interface with cloud computing.
        </div>
      </div>
      <div class="nanome__logos">
        <h3 class="text-color--matryx-grey">OUR CURRENT PRODUCTS</h3>
        <div class="nanone__logos__calcflow logo">
          <img src="../../assets/images/calcflow.png" alt="Calcflow">
        </div>
        <div class="nanome__logos__nanoone logo">
          <img src="../../assets/images/nanoone.png" alt="Nano One">
        </div>
        <p>Available on <a href="http://store.steampowered.com/app/493430/nanoone/" target="_blank">Steam</a> and <a href="http://calcflow.io/" target="_blank">Oculus</a></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NanomeInfo'
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/colors';

.nanome {
  display: flex;
  justify-content: center;
  color: #4A4A4A;
  flex-direction: column;
}

.nanome__info {
  padding: 20px 40px 20px 0;

  &__title {
    font-size: 38px;
    line-height: 34px;
  }

  &__text {
    margin-top: 30px;
    font-size: 18px;
    line-height: 30px;
    max-width: 900px;
    width: 100%;
  }
}

.logo {
  margin-bottom: 20px;
  /*min-width: 300px;*/
  text-align: left;
  display: inline-block;
  max-width: calc(50%-10px);
}


.logo > img {
  max-height: 215px;
  max-width: 175px;
}

/*----- MEDIA QUERIES -----*/
@media screen and (max-width: 850px) {
  .nanome {
    flex-wrap: wrap;
  }
  .nanome__info {

    &__text {
      max-width: 100%;
    }
  }
  .nanome__logos {
    margin-top: 50px;

    h3{
      margin-bottom: 40px;
    }
  }
}
@media screen and (max-width: 500px) {
  .logo {
    img {
      max-height: 125px;
      max-width: 125px;
    }
  }
}
</style>
