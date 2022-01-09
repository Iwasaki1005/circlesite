<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="Profile-main" class="section">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>profile</span></h2>
			<div class="vertical-line center sa sa--up"></div>

			<!-- 没部分 -->
			<!-- <div class="pm-flame center sa sa--up">
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
					<a class="twitter-timeline" data-width="100%" data-height="100%" data-theme="light" data-chrome=”noheader,transparent,nofooter,noborders,noscrollbar” href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
				</div>
			</div> -->

			<div class="width100 space-around">
				<div class="card">
					<div class="sides left-side"></div>
					<div class="sides right-side"></div>
					<div class="back-side display-flex">
						<div class="pm-gradation width5"></div>
						<div class="width95 p-all-05rem align-flex-end">
							<div>
								<div class="align-flex-end space-between width100">
									<p class="lh-120 fs-1_2rem co-brown">雨地屋しろー</p>
									<div class="display-flex m-left-05rem">
										<img class="pm-bt" src="../../assets/img/icon_mail.svg">
										<img class="pm-bt" src="../../assets/img/icon_twitter.svg">
										<img class="pm-bt" src="../../assets/img/icon_pixiv.svg">
									</div>
								</div>
								<p class="lh-120 fs-0_8rem m-left-1rem co-brown">└ illustrator:Uchiya Shiro</p>
							</div>
						</div>
					</div>
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



.card {
	width: 25.714vw;
	height: 40vw;
	position: relative;
	perspective: 70vw;
}

.left-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	transform: rotateY(0deg);
	transform-origin: left;
	transition: transform 1.5s;
	background: url(../../assets/profile/profile_door_dmy.png) no-repeat;
	background-size: cover;
}

.right-side {
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	transform: rotateY(0deg);
	transform-origin: right;
	transition: transform 1.5s;
	background: url(../../assets/profile/profile_door_dmy.png) no-repeat;
	background-size: cover;
	background-position: -12.857vw;
}

.back-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	transform: translateZ(-21.429vw);
	transition: z-index 0.4s step-end, transform 1s;
	background-color: #fafafa;
}

.card:hover .left-side {
	transform: rotateY(-360deg);
}

.card:hover .right-side {
	transform: rotateY(360deg);
}

.card:hover .back-side {
	transform: translateZ(0);
	z-index: 1;
}



.pm-gradation {
	height: 100%;
	background: linear-gradient(0deg, rgba(231,176,108,1) 25%, rgba(255,174,202,1) 100%);
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