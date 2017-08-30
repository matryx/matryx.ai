<template>
	<div class="error__content text-center">
   		<h1 class="error__content__title">404 ERROR</h1>
   		<img src="../../assets/images/backgrounds/404.png" alt="">
		<p class="error__content__body text-color--matryx-dark-grey">Something's not right here, you and I both know it.</p>
		<p class="text-color--matryx-dark-grey">Were you looking for our <a href="https://matryx.ai/matryx-whitepaper.pdf"> white paper</a>? No? Then maybe you should make your way back <a href="https://www.matryx.ai"> home.</a></p>
	</div>
</template>

<script>
export default {
  name: 'ErrorPage',
  beforeRouteEnter (to, from, next) {
    document.title = '(╯°□°)╯︵ ┻━┻'
    next()
  },
  beforeRouteLeave (to, from, next) {
    document.title = 'Matryx.ai'
    next()
  }
}
</script>

<style media="screen">
@import '../../assets/css/font-awesome.css';
@import '../../assets/css/magnific-popup.css';
@import '../../assets/css/isotope.css';
@import '../../assets/css/jquery.mCustomScrollbar.css';
@import '../../assets/css/responsive.css';

.error__content img{
	position: relative;
	display: inline;
	max-width: 60%;
}
.error__content__title{
	font-weight: bold;
	font-size: 80px;
	margin: 50px;
	padding: 10px;
}

.error__content__body{
	font-size: 24px;
	padding: 50px 0px 10px 0px;
}

@media screen and (max-width: 850px) {
	.error__content__title{
		font-size: 50px;
	}
}

@media screen and (max-width: 500px) {
	.error__content__title{
		font-size: 50px;
	}

	.error__content__body{
		padding: 25px;
	}
	.error__content p{
		padding: 15px;
	}
}

</style>
