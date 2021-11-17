<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="Profile-main" class="section">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>profile</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class="pm-flame center sa sa--up">
				<div class="pm-buttons display-flex m-left-05rem">
					<img class="pm-bt" src="../../assets/img/icon_mail.svg">
					<img class="pm-bt" src="../../assets/img/icon_twitter.svg">
					<img class="pm-bt" src="../../assets/img/icon_pixiv.svg">
				</div>
				<div class="pm-name">
					<p class="lh-120 fs-1_2rem co-white">教和出操舵</p>
					<p class="lh-120 fs-0_8rem m-left-1rem co-white">└ GACHA-CYUDOKUSYA:KYOUWA DESOUDA</p>
				</div>
				<div id="twitter-color" class="p-twitter-box pm-tw">
					<a class="twitter-timeline" data-width="100%" data-height="100%" data-theme="light" data-chrome=”noheader,transparent,nofooter,noborders,noscrollbar” href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> <!--<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>-->
				</div>
			</div>
		</section>
	</v-lazy>
</template>

<style scoped>
.pm-flame {
	width: 50vw;
	height: 29.48vw;
	background-image: url(../../assets/img/profile_flame.svg);
	display: grid;
	grid-template-rows: 4.5% 12% auto 4.5%;
	grid-template-columns: 3% 38% auto 3%;
}
</style>

<script>
export default {
  name: 'MainProfile',
  data: () => ({
      isActive: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>