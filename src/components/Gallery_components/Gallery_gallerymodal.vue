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
			<div v-for="(column,index) in difil" :key="column">
				<div v-bind:id="column" class="illust-list-icon" @click="differenceselect(index,column)" v-bind:class="difil[index]"></div>
			</div>
		</div>
		<!-- 説明文 -->
		<div class="il-description modalmarker modal-hide" v-on:mouseover="modalfuncopen" v-on:mouseleave="modalfuncclose">
			<p>{{seldes}}</p>
			<a v-bind:href="sellinksrc" target="_blank">{{sellinktxt}}</a>
		</div>
		<!-- 閉じるボタン -->
		<button class="toziru" @click="screenclose">閉じる</button>
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
	height: 100vh;
	background-color: #00000080;
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

.toziru {
	position: fixed;
	top: 5vh;
	right: 5vw;
	color: white;
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
.il-description {
	position: absolute;
	bottom: 3vh;
	right: 3vw;
	background-color: #ffdbae;
	width: 45vw;
	padding: 0.5vw 1vw;
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
</style>