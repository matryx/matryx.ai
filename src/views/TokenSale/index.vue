<template>
  <div class="body-content">
    <video src="../../assets/media/giphy.mp4" autoplay loop poster="posterimage.jpg" class="tokensale-background"></video>
    <!-- <div id="preloader">
			<div class="cssload-square">
				<div class="cssload-square-part cssload-square-green"></div>
				<div class="cssload-square-part cssload-square-pink"></div>
				<div class="cssload-square-blend"></div>
			</div>
		</div> -->
		<!-- comming-soon-preloade END -->

		<section class="comming-soon-header-section" id="wrapper">
			<div class="comming-soon-header-colume">
				<div class="comming-soon-header-social-icon-left">
					<ul>
						<li class="comming-soon-facebook"><a target="_blank" href="https://www.facebook.com/matryxai/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li class="comming-soon-twitter"><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
					</ul>
				</div>
				<!-- <div class="comming-soon-header-social-icon-right">
					<ul class="comming-soon-scroll ">
						<li id="know-more-button"><a href="">a</a></li>
						<li id="know-more-top-button"><a href="">c</a></li>
					</ul>
				</div> -->
			</div>
			<div class="comming-soon-header-main-content">
				<div class="container">
					<div class="comming-soon-header-logo">
						<a href="#"><img class="logo--medium" src="../../assets/images/header-logo.png" alt=""></a>
					</div>
					<div class="comming-soon-header-content">
						<div class="comming-soon-header-single-content">
								<h3 style="font-size: 2.5em;"><a href="/"><img class="logo--small text--inline" style="vertical-align: sub;" src="../../assets/images/Matryx-Logo-White-640px.png" alt=""></a> Token Sale</h3>
							<div class="cd-intro">
						    	<h1 class="cd-headline clip is-full-width">
									<span class="cd-words-wrapper"> <!--  -->
										<b class="is-visible">Launching Soon</b>
											<!-- <b class="">Stay Tuned</b> -->
									</span>
								</h1>
							</div>
							<p>Matryx is a platform built for collaborative problem-solving. Stay tuned for more details on how to participate.</p>
						</div>
						<div class="comming-soon-header-input">
							<form id="mc-form">
						        <input id="mc-email"  placeholder="E-mail address"  type="email">
								<button class="submit-btn"  type="submit" value="submit">Notify me</button>
						        <label for="mc-email"></label>
						    </form>
						</div>
						<div class="comming-soon-header-single-content-bottom">
							<p>Subscribe to get notifications</p>
						</div>
					</div>
				</div>
			</div>

		</section>
  </div>
</template>

<script>
export default {
  name: 'token-sale'
}
</script>

<style media="screen">
@import '../../assets/css/font-awesome.css';
@import '../../assets/css/magnific-popup.css';
@import '../../assets/css/isotope.css';
@import '../../assets/css/jquery.mCustomScrollbar.css';
@import '../../assets/css/tokensale.css';
@import '../../assets/css/responsive.css';


.tokensale-background {
  position:absolute;
  min-height:100%;
  min-width:100%;
}
</style>
