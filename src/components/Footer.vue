<template>
	<div class="ft-bg">
		<div class="space-around-align-center">
			<img class="dr-logo" src="../assets//logo/neverlandf_logo1.png">
			<div class="space-around co-white width60 fs-1_2rem">
				<span class="hover-left-in-light">Home</span>
				<span class="hover-left-in-light">About</span>
				<span class="hover-left-in-light">News</span>
				<span class="hover-left-in-light">Gallery</span>
				<span class="hover-left-in-light">Game</span>
				<span class="hover-left-in-light">Goods</span>
				<span class="hover-left-in-light">Works</span>
			</div>
		</div>
		<div class="ft-whiteline m-top-05rem m-bottom-2rem center"></div>
		<div class="width90 space-around fs-0_8rem m-bottom-1rem center">
			<div class="content-core co-white hover-left-in-light display-flex_important">
				<i class="fab fa-twitter-square fs-1_2rem"></i>
				<span class="m-right-05rem">『雨地屋しろー』Twitter</span>
				<i class="fas fa-external-link-alt"></i>
			</div>
			<!-- <span>share</span> -->
		</div>
		<div class="space-between width90 center fs-0_8rem m-bottom-1rem">
			<span></span>
			<div class="space-around co-white width25">
				<span class="hover-left-in-light">Information</span>
				<span class="hover-left-in-light">Link</span>
				<span class="hover-left-in-light">Contact</span>
			</div>
		</div>
		<div>
			<span>※著作権表記</span>
			<span>当サイトは基本的にリンクフリーです。</span>
			<span>リンクをしていただく際のURLはトップページへお願いします。</span>
			<span>詳細はこちら</span>
		</div>
		<div>
			<span>page top</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.ft-bg {
	background-color: #e7b06c;
	padding: 2.5vw 10vw;
	margin-top: 30vw;
}

.ft-whiteline {
	width: 90%;
	height: 0.05vw;
	background: #fafafa;
}

.hover-left-in-light {
	position: relative;
	display: inline-block;
	text-decoration: none;
}

.hover-left-in-light::after {
	position: absolute;
	bottom: -0.1vw;
	left: 0;
	content: '';
	width: 100%;
	height: 0.05vw;
	background: #fafafa;
	transform: scale(0, 1);
	transform-origin: right top;
	transition: transform .3s;
}

.hover-left-in-light:hover::after {
	transform-origin: left top;
	transform: scale(1, 1);
}
</style>