<template>
	<div>
		<div class="container1">
			<div v-for="(column,index) in creators" :key="column.title" class="card1">
				<div class="content1">
					<div class="imgBx1"><img v-bind:src="creators[index].iconsrc"></div>
					<div class="contentBx1">
						<h3 class="co-white co-white_mobile f-weight-normal f-weight-normal_mobile">{{ creators[index].name }}<br><span class="font-E3">{{ creators[index].title }}</span></h3>
					</div>
				</div>
				<ul class="sci1">
					<li v-if="creators[index].activelink.includes('hp')" style="--i:1">
						<a class="co-white co-white_mobile fs-1_2rem fs-1_2rem_mobile" v-bind:href="creators[index].hpsrc"><i class="fas fa-home"></i></a>
					</li>
					<li v-if="creators[index].activelink.includes('twitter')" style="--i:2">
						<a class="co-white co-white_mobile fs-1_2rem fs-1_2rem_mobile" v-bind:href="creators[index].twittersrc"><i class="fab fa-twitter-square"></i></a>
					</li>
					<li v-if="creators[index].activelink.includes('github')" style="--i:3">
						<a class="co-white co-white_mobile fs-1_2rem fs-1_2rem_mobile" v-bind:href="creators[index].githubsrc"><i class="fab fa-github-square"></i></a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'LinksCreator',
  data: () => ({
      isActive: false,
  }),
  props: {
		creators: Array,
  },
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) {
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
}

@media screen and (max-aspect-ratio: 1/1) {
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
	width: 35vw;
	height: 50vw;
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
	width: 15vw;
	height: 15vw;
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
}
</style>