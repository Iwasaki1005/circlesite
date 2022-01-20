<template>
	<div class="ft-bg">
		<div class="space-around-align-center">
			<router-link to="/">
				<img class="dr-logo" src="../assets//logo/neverlandf_logo1.png">
			</router-link>
			<div class="space-around co-white width60 fs-1_2rem">
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
		</div>
		<div class="ft-whiteline m-top-05rem m-bottom-2rem center"></div>
		<div class="width90 space-around fs-0_8rem m-bottom-1rem center">
			<div class="content-core co-white hover-left-in-light display-flex_important">
				<i class="fab fa-twitter-square fs-1_2rem"></i>
				<span class="m-right-05rem">『雨地屋しろー』Twitter</span>
				<i class="fas fa-external-link-alt"></i>
			</div>
		</div>
		<div class="space-between width90 center fs-0_8rem m-bottom-1rem">
			<span></span>
			<div class="space-around co-white width25">
				<router-link to="/information">
					<span class="hover-left-in-light co-white">Information</span>
				</router-link>
				<router-link to="/links">
					<span class="hover-left-in-light co-white">Link</span>
				</router-link>
				<router-link to="/contact">
					<span class="hover-left-in-light co-white">Contact</span>
				</router-link>
			</div>
		</div>
		<div class="width100 fs-0_8rem co-white flex-end linkset-position m-bottom-2rem">
			<div>
				<p>当サイトは基本的にリンクフリーです。</p>
				<p>リンクをしていただく際のURLはトップページへお願いします。</p>
				<p>詳細は<router-link to="/information"><span class="hover-left-in-light co-white">こちら</span></router-link></p>
			</div>
		</div>
		<div class="width100 fs-0_8rem co-white justify-center">
			<small>© 2022 corpname inc.</small>
		</div>
		<div class="pagetop-position">
			<a href="#" class="btnarrow5">page top</a>
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
</style>