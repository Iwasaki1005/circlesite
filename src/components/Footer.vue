<template>
	<div class="ft-bg">
		<div class="space-around-align-center">
			<router-link to="/">
				<img class="ft-logo" src="../assets//logo/neverlandf_logo1.png">
			</router-link>
			<!-- Display用 -->
			<div class="space-around width60 fs-1_2rem display-only">
				<router-link to="/">
					<span class="hover-left-in-light co-white">Home</span>
				</router-link>
				<router-link to="/about">
					<span class="hover-left-in-light co-white">About</span>
				</router-link>
				<router-link to="/news">
					<span class="hover-left-in-light co-white">News</span>
				</router-link>
				<router-link to="/gallery">
					<span class="hover-left-in-light co-white">Gallery</span>
				</router-link>
				<router-link to="/game">
					<span class="hover-left-in-light co-white">Game</span>
				</router-link>
				<router-link to="/shop">
					<span class="hover-left-in-light co-white">Shop</span>
				</router-link>
				<router-link to="/works">
					<span class="hover-left-in-light co-white">Works</span>
				</router-link>
			</div>
			<!-- Mobile用 -->
			<div class="width100_mobile fs-1_2rem_mobile mobile-only text-center_mobile">
				<div class="space-around_mobile m-bottom-1rem_mobile">
					<router-link to="/">
						<span class="hover-left-in-light co-white_mobile">Home</span>
					</router-link>
				</div>
				<div class="space-around_mobile m-bottom-1rem_mobile">
					<router-link to="/about" class="width30_mobile">
						<span class="hover-left-in-light co-white_mobile">About</span>
					</router-link>
					<router-link to="/news" class="width30_mobile">
						<span class="hover-left-in-light co-white_mobile">News</span>
					</router-link>
					<router-link to="/gallery" class="width30_mobile">
						<span class="hover-left-in-light co-white_mobile width40_mobile">Gallery</span>
					</router-link>
				</div>
				<div class="space-around_mobile m-bottom-1rem_mobile">
					<router-link to="/game" class="width30_mobile">
						<span class="hover-left-in-light co-white_mobile width40_mobile">Game</span>
					</router-link>
					<router-link to="/shop" class="width30_mobile">
						<span class="hover-left-in-light co-white_mobile">Shop</span>
					</router-link>
					<router-link to="/works" class="width30_mobile">
						<span class="hover-left-in-light co-white_mobile">Works</span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="ft-whiteline m-top-05rem m-bottom-2rem center"></div>
		<div class="width90 space-around fs-0_8rem fs-0_8rem_mobile m-bottom-1rem m-bottom-1rem_mobile center">
			<div class="content-core content-core_mobile co-white co-white_mobile hover-left-in-light display-flex_important">
				<i class="fab fa-twitter-square fs-1_2rem fs-1_2rem_mobile"></i>
				<span class="m-right-05rem m-right-05rem_mobile">『雨地屋しろー』Twitter</span>
				<i class="fas fa-external-link-alt"></i>
			</div>
		</div>
		<div class="space-between space-between_mobile width90 center fs-0_8rem fs-0_8rem_mobile m-bottom-1rem m-bottom-1rem_mobile">
			<span></span>
			<div class="space-around space-around_mobile width25 width50_mobile">
				<router-link to="/information">
					<span class="hover-left-in-light co-white co-white_mobile">Information</span>
				</router-link>
				<router-link to="/links">
					<span class="hover-left-in-light co-white co-white_mobile">Link</span>
				</router-link>
				<router-link to="/contact">
					<span class="hover-left-in-light co-white co-white_mobile">Contact</span>
				</router-link>
			</div>
		</div>
		<div class="width100 width100_mobile fs-0_8rem fs-0_8rem_mobile co-white co-white_mobile content-core linkset-position m-bottom-2rem m-bottom-2rem_mobile">
			<div>
				<p>当サイトは基本的にリンクフリーです。</p>
				<p>リンクをしていただく際のURLはトップページへお願いします。</p>
				<p>詳細は<router-link to="/information"><span class="hover-left-in-light co-white co-white_mobile mobile-linkline-white">こちら</span></router-link></p>
			</div>
		</div>
		<div class="width100 fs-0_8rem fs-0_8rem_mobile co-white co-white_mobile justify-center justify-center_mobile">
			<small>© 2022 corpname inc.</small>
		</div>
		<div class="pagetop-position">
			<a href="#" class="btnarrow5"><i class="fas fa-chevron-left co-white_mobile mobile-only m-right-05rem_mobile fs-0_8rem_mobile"></i>page top</a>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
@media screen and (min-aspect-ratio: 1/1) { 
	.ft-bg {
		background-color: #e7b06c;
		padding: 1.5vw 10vw;
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

.pagetop-position {
	position: relative;
	right: -77vw;
	bottom: 2.5vw;
}

.linkset-position {
	padding: 0 5%;
}





.btnarrow5{
    /*矢印の基点とするためrelativeを指定*/
  position: relative;
    /*ボタンの形状*/
  border: 0.07vw solid #e7b06c;
    padding: 0.5vw 2.1vw;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #fafafa;
    outline: none;
    /*アニメーションの指定*/
    transition: all .2s linear;

	transform:rotateZ(90deg)
}

.btnarrow5:hover{
  background:#fafafa;
  color:#e7b06c;
}

/*矢印と下線の形状*/
.btnarrow5::before{
  content:"";
    /*絶対配置で下線の位置を決める*/
  position: absolute;
  top:50%;
  right:8.1vw;
    /*下線の形状*/
  width:2.8vw;
  height:0.07vw;
  background:#fafafa;
    /*アニメーションの指定*/
    transition: all .2s linear;
}

.btnarrow5::after{
  content:"";
    /*絶対配置で矢印の位置を決める*/
  position: absolute;
    top: 23%;
    right: 10.5vw;
    /*矢印の形状*/
  width:0.07vw;
  height:0.8vw;
  background:#fafafa;
    transform:skewX(136deg);
    /*アニメーションの指定*/
    transition: all .2s linear;
}

/*hoverした際の移動*/
.btnarrow5:hover::before{
  right:10.7vw;
  background:#e7b06c;
}

.btnarrow5:hover::after{
  right:13vw;
  background:#e7b06c;
}

.ft-logo {
	height: 6.75vw;
    width: 18vw;
}

}
@media screen and (max-aspect-ratio: 1/1) {
	.ft-bg {
		background-color: #e7b06c;
		padding: 4vw 10vw;
		margin-top: 30vw;
	}

	.ft-logo {
		width: 30vw;
	}

	.ft-mobileline {
		background-color: #fafafa;
		width: 100%;
		height: 0.15vw;
		margin: 0.5rem 0 1rem 0;
	}

	.ft-whiteline {
		width: 100%;
		height: 0.05vw;
		background: #fafafa;
		margin-bottom: 1rem;
	}

	.pagetop-position {
		position: relative;
		right: -65vw;
		bottom: 6.5vw;
	}

	.btnarrow5{
    /*矢印の基点とするためrelativeを指定*/
  position: relative;
    /*ボタンの形状*/
  border: 0.07vw solid #e7b06c;
    padding: 0.5vw 2.1vw;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #fafafa;
    outline: none;
    /*アニメーションの指定*/
    transition: all .2s linear;

	transform:rotateZ(90deg)
}

}
</style>