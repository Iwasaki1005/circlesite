<template>
	<div class="gallaly-base">
		<!-- イラスト本体-->
		<img id="screen" class="gl-screen">
		<!-- ホバー用div -->
		<div class="hoverdiv1" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<div class="hoverdiv2" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<div class="hoverdiv3" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<div class="hoverdiv4" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose"></div>
		<!-- イラストのリスト 左上-->
		<div id="illust-list" class="illust-list modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
			<!-- サムネ部分 -->
			<div v-for="(column,index) in list" :key="column.title">
				<div v-bind:id="list[index].thumclass" class="illust-list-icon" @click="illustselect(column)" v-bind:class="list[index].thumclass" v-show="list[index].active"></div>
			</div>
			<div class="illust-list-icon-dmy"></div>
		</div>
		<!-- 差分部分 -->
			<div class="illust-list-dif modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
				<transition-group name="items" class="display-flex">
					<div v-for="(column,index) in difil" :key="column">
						<div v-bind:id="column" class="illust-list-icon" @click="differenceselect(index,column)" v-bind:class="difil[index]"></div>
					</div>
				</transition-group>
			</div>
		<!-- 説明文 -->
		<div class="il-description desc-container modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
			<div class="desc-box">
				<span></span>
				<div class="desc-content">
					<p>{{seldes}}</p>
					<a v-bind:href="sellinksrc" target="_blank">{{sellinktxt}}</a>
				</div>
			</div>
		</div>
		<!-- 閉じるボタン -->
		<button class="gl-close" @click="screenclose">
			<span class="glclo-span1"></span>
			<span class="glclo-span2"></span>
			<span class="glclo-span3"></span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		list: Array,
		difil: Array,
		seldes: undefined,
		sellinktxt: undefined,
		sellinksrc: undefined,
	},
	methods: {
		illustselect : function (column) {
			this.$emit('illustselect',column)
		},
		differenceselect : function (index,column) {
			this.$emit('differenceselect',index,column)
		},
		screenclose: function () {
			this.$emit('screenclose')
		},
		modalfuncopen: function () {
			this.$emit('modalfuncopen')
		},
		modalfuncclose: function () {
			this.$emit('modalfuncclose')
		},
	},
}
</script>

<style>
.gallaly-base {
	width: 100%;
	height: 103vh;
	background-color: rgba(0,0,0,0.75);
	display: flex;
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	overflow: scroll;
}

.illust-list {
	height: 100vh;
	width: 13vw;
	position: fixed;
	overflow: scroll;
	top: 0;
	left: 0;
	overflow-x: hidden;
}

.illust-list-dif {
	display: flex;
	position: absolute;
	top: 0;
	left: 11.9vw;
}

.illust-list-icon-dmy {
	height: calc(100vh - 5.85vw - 2vw - 2vw);
	width: 0.1px;
}

.illust-list-icon {
	border: solid 0.2vw #e7b06c;
	width: 10.4vw;
	height: 5.85vw;
	margin: 2vw 0 2vw 1.5vw;
}

.illust-list-icon-select {
	border: solid 0.2vw #fff;
	width: 10.4vw;
	height: 5.85vw;
	margin: 2vw 0 2vw 1.5vw;
	box-shadow: 0 0 0.4vw #ffdbae, 0 0 0.8vw #fff, 0 0 1.2vw #ffdbae;;
}

.illust-list::-webkit-scrollbar{
	width: 0.1px;
}

.illust-list::-webkit-scrollbar-track{
	background: transparent;
	border: none;
}

.illust-list::-webkit-scrollbar-thumb{
	background: transparent;
}

.gallaly-base::-webkit-scrollbar{
	width: 0.1px;
}

.gallaly-base::-webkit-scrollbar-track{
	background: transparent;
	border: none;
}

.gallaly-base::-webkit-scrollbar-thumb{
	background: transparent;
}

.gl-screen {
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	object-fit: contain;
}

.modal-hide {
	opacity: 0;
}

.modalmarker {
	transition: all 0.3s;
}

.modal-hide:active {
	pointer-events: none;
}

.hoverdiv1 {
	position: absolute;
	top: 0;
	left: 0;
	height: 20vh;
	width: 100%;
}

.hoverdiv2 {
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;
	width: 30vw;
}

.hoverdiv3 {
	position: absolute;
	bottom: 0;
	left: 0;
	height: 20vh;
	width: 100%;
}

.hoverdiv4 {
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 30vw;
}





.il-description {
	position: absolute;
	bottom: 3vh;
	right: 3vw;
	background-color: #ffdbae;
	width: 45vw;
	padding: 0.5vw 1vw;
}

.desc-container .desc-box::before {
	content: '';
	position: absolute;
	top: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(45deg,#e7b06c,#e7b06c,#ffdbae,#ffaeca);
}

.desc-container .desc-box::after {
	content: '';
	position: absolute;
	top: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: linear-gradient(45deg,#e7b06c,#e7b06c,#ffdbae,#ffaeca);
	filter: blur(1.4vw);
}

.desc-container .desc-box span {
	position: absolute;
	top: 0.2vw;
	left: 0.2vw;
	right: 0.2vw;
	bottom: 0.2vw;
	background: rgba(0,0,0,0.6);
	z-index: 2;
}
.desc-container .desc-box span::before
{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	background: rgba(255,255,255,0.1);
	pointer-events: none;
}
.desc-container .desc-box .desc-content
{
	position: relative;
	z-index: 10;
	color: #fafafa;
}

.gl-close {
	position: fixed;
    top: 5vh;
    right: 3vw;
    width: 3.6vw;
    height: 2.5vw;
	/* background-color: red; */
    color: white;
	transition: 0.5s ease-in-out;
}

.gl-close:hover {
	transform: rotateZ( 180deg ) ;
}

.gl-close span {
	display : block;
	position: absolute;
	width   : 2.8vw;
	height  : 0.15vw;
	left    : 0.4vw;
	background : #e7b06c;
	transition: 0.5s ease-in-out;
}

.glclo-span1 {
	top : 1.14vw;
	left: 0.42vw;
	transform: rotate(315deg);
}

.glclo-span2 {
	top: 1.14vw;
	transform: rotate(-315deg);
}

.glclo-span3 {
	top: 1.14vw;
	transform: rotate(-315deg);
}


/* .items-leave-active, */
.items-enter-active {
    transition: opacity .5s, transform .5s;
}
.items-leave-to,
.items-enter {
    opacity: 0;
    transform: translateX(-50px);
}
.items-leave,
.items-enter-to {
    opacity: 1;
}
.items-move {
    transition: transform .5s;
}

.items-leave-active {
	transition: opacity 0s, transform 0s;
}
</style>