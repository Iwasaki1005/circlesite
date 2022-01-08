<template>
	<section id="About" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Links</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<v-card theme="disable" class="bg-none sa sa--up">
			<v-tabs v-model="tab" align-with-title grow>
				<v-tabs-slider color="yellow"></v-tabs-slider>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<p>サイトとか</p>
				</v-tab-item>
				<v-tab-item>
					<div class="section-div">
						<div class="container1">
							<div class="card1">
								<div class="content1">
									<div class="imgBx1"><img src="https://play-lh.googleusercontent.com/65gRWpXRbhKLD6ak-Eqs8A660E_NJft03eG37hFGitdYp2OyosvaxpN0ErDoz9aWfw"></div>
									<div class="contentBx1">
										<h3 class="co-white f-weight-normal">Someone Famous<br><span class="font-E3">illustrator</span></h3>
									</div>
								</div>
								<ul class="sci1">
									<li style="--i:1">
										<a class="co-white fs-1_2rem" href="#"><i class="fab fa-facebook-square"></i></a>
									</li>
									<li style="--i:2">
										<a class="co-white fs-1_2rem" href="#"><i class="fab fa-twitter-square"></i></a>
									</li>
									<li style="--i:3">
										<a class="co-white fs-1_2rem" href="#"><i class="fab fa-instagram"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
		<BackToHome />
	</section>
</template>

<script>
import BackToHome from '../components/BackToHome.vue'

export default {
	name: 'Page_Links',
	components: {
		BackToHome,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data () {
		return {
			tab: null,
			items: [
			'さいと？', 'クリエイター',
		],
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Links',
			disabled: false,
			href: '',
		},
		],
		}
	},
}
</script>

<style>
.container1 {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 2.8vw 0;
}

.container1 .card1 {
	position: relative;
	width: 20vw;
	height: 28vw;
	background-color: #e7b06c;
	margin: 1.4vw;
	box-shadow: 0 1vw 1.7vw rgba(0,0,0,0.2);
	border-radius: 1vw;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blue(0.7vw);
}

.container1 .card1 .content1 {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	opacity: 0.5;
	transition: 0.5s;
}

.container1 .card1:hover .content1 {
	opacity: 1;
	transform: translateY(-1.4vw);
}

.container1 .card1 .content1 .imgBx1 {
	position: relative;
	width: 10vw;
	height: 10vw;
	border-radius: 50%;
	overflow: hidden;
}

.container1 .card1 .content1 .imgBx1 img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.container1 .card1 .content1 .contentBx1 h3 {
	text-transform: uppercase;
	text-align: center;
	margin: 1.4vw 0 0.7vw;
}

.container1 .card1 .content1 .contentBx1 h3 span {
	text-transform: initial;
}

.container1 .card1 .sci1 {
	position: absolute;
	bottom: 3.5vw;
	display: flex;
}

.container1 .card1 .sci1 li {
	list-style: none;
	margin: 0 0.7vw;
	transform: translateY(1.4vw);
	transition: 0.5s;
	transition-delay: calc(0.1s * var(--i));
}

.container1 .card1:hover .sci1 li {
	transform: translateY(0px);
	opacity: 1;
}
</style>