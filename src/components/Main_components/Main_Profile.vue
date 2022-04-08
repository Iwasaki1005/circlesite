<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="Profile-main" class="section">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>profile</span></h2>
			<VerticalLine />
			<div class="width100 width100_mobile space-around space-around_mobile sa sa--up">
				<div class="card">
					<div class="sides left-side"></div>
					<div class="sides right-side"></div>
					<div class="back-side display-flex display-flex_mobile">
						<div class="pm-gradation width5 width5_mobile"></div>
						<div class="width95 width95_mobile p-all-05rem p-all-05rem_mobile align-flex-end align-flex-end_mobile">
							<div>
								<div class="display-flex_mobile m-bottom-05rem_mobile mobile-only">
									<img class="pm-bt" src="../../assets/img/icon_mail.svg">
									<img class="pm-bt m-left-05rem" src="../../assets/img/icon_twitter.svg">
									<img class="pm-bt m-left-05rem" src="../../assets/img/icon_pixiv.svg">
								</div>
								<div class="align-flex-end align-flex-end_mobile space-between width100 width100_mobile">
									<p class="lh-120 lh-120_mobile fs-1_2rem co-brown co-brown_mobile">雨地屋しろー</p>
									<div class="display-flex m-left-05rem display-only">
										<img class="pm-bt" src="../../assets/img/icon_mail.svg">
										<img class="pm-bt" src="../../assets/img/icon_twitter.svg">
										<img class="pm-bt" src="../../assets/img/icon_pixiv.svg">
									</div>
								</div>
								<p class="lh-120 lh-120_mobile fs-0_8rem fs-0_8rem_mobile m-left-1rem m-left-1rem_mobile co-brown co-brown_mobile">└ illustrator:<br class="mobile-only"><span class="mobile-only pm-mbnamem-1"></span>Uchiya Shiro</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</v-lazy>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
  name: 'MainProfile',
  components: {
		VerticalLine,
  },
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

<style scoped>
@media screen and (min-aspect-ratio: 1/1) { 
/* .pm-flame {
	width: 50vw;
	height: 29.48vw;
	background-image: url(../../assets/img/profile_flame.svg);
	display: grid;
	grid-template-rows: 4.5% 12% auto 4.5%;
	grid-template-columns: 3% 38% auto 3%;
} */

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

.pm-bt {
	width: 2vw;
	height: 2vw;
	margin-right: 0.5rem;
}
}
@media screen and (max-aspect-ratio: 1/1) {
.card {
	width: 38.571vw;
	height: 60vw;
	position: relative;
	perspective: 105vw;
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
	background-position: -19.2855vw;
}

.back-side {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	transform: translateZ(-32.1435vw);
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

.pm-bt {
	width: 4vw;
	height: 4vw;
	margin-right: 0.5rem;
}

.pm-mbnamem-1 {
	margin-left: 1.2rem;
}
}
</style>