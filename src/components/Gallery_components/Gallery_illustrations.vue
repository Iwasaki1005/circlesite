<template>
	<div>
		<div class="sa sa--up">
		<div class="align-center m-bottom-05rem">
			<p class="fs-0_8rem co-brown m-right-05rem">ナントカコンテンツを非表示にする</p>
			<input type="checkbox" class="Ga-checkbox" @click="ratingswitch" :checked="checked" @input="$emit('input', $event.target.checked)">
		</div>
		<div class="align-center">
			<p class="fs-0_8rem co-brown m-right-1rem">タグ一覧</p>
			<button @click="tagallremove" class="bt-alloff">All OFF</button>
		</div>

		<div class="display-flex m-top-05rem">
			<div v-for="(column) in alltags" :key="column">
				<div v-if="activetag.includes(column)" class="tag-on" @click="removetag(column)">{{ column }}</div>
				<div v-else class="tag-off" @click="addtag(column)">{{ column }}</div>
			</div>
		</div>
		</div>

		<transition-group name="illustrations" style="display: flex; flex-wrap: wrap;">
			<div v-for="(column,index) in list" :key="column.title">
				<transition name="illustrations">
					<div class="illust-div sa sa--up" @click="screenopen(index)" v-bind:class="list[index].thumclass" v-show="list[index].active" v-bind:data-sa_delay="index * 1000"></div>
				</transition>
			</div>
		</transition-group>
		
		<!-- 個別で記入したパターン(没) -->
		<!-- <transition-group name="illustrations" style="display: flex; flex-wrap: wrap;">
			<div key="1" v-if="activetag.includes('ヤンキー')"></div>
			<div key="2" v-else class="illust-div bgil-1"></div>

			<div key="3" v-if="activetag.includes('女の子')"></div>
			<div key="4" v-else class="illust-div bgil-2"></div>

			<div key="5" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="6" v-else class="illust-div bgil-3"></div>

			<div key="7" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="8" v-else-if="check"></div>
			<div key="8" v-else class="illust-div bgil-4"></div>

			<div key="9" v-if="activetag.includes('男の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="10" v-else class="illust-div bgil-5"></div>

			<div key="11" v-if="activetag.includes('男の子') || activetag.includes('ヤンキー')"></div>
			<div key="12" v-else class="illust-div bgil-6"></div>

			<div key="13" v-if="activetag.includes('女の子') || activetag.includes('複数人') || activetag.includes('ヤンキー')"></div>
			<div key="14" v-else class="illust-div bgil-7"></div>
		</transition-group> -->
	</div>
</template>

<script>
export default {
	name: 'GalleryIllustrations',
	props: {
		list: Array,
		alltags: Array,
		activetag: Array,
	},
	methods: {
		addtag : function (column) {
			this.$emit('addtag',column)
		},
		removetag : function (column) {
			this.$emit('removetag',column)
		},
		tagallremove : function() {
			this.$emit('tagallremove')
		},
		ratingswitch : function () {
			this.$emit('ratingswitch')
		},
		screenopen: function (index) {
			this.$emit('screenopen',index)
		}
	},
	updated: function () {
		this.scro()
	},
}
</script>

<style>
.bt-allon {
	background-color: #e7b06c;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: #fafafa;
}

.bt-alloff {
	background-color: #fafafa;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	border-radius: 0.8vw;
	padding: 0.1vw 0.5vw;
	color: #e7b06c;
}

.tag-on {
	background-color: #e7b06c;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	padding: 0.1vw 0.5vw;
	color: #fafafa;
	margin-right: 0.5rem
}

.tag-off {
	background-color: #fafafa;
	border: 0.1vw solid #e7b06c;
	font-size: 0.6rem;
	padding: 0.1vw 0.5vw;
	color: #e7b06c;
	margin-right: 0.5rem
}

.illustrations-enter-active {
  animation: illustrations-in .5s;
}

.illustrations-leave-to {
  opacity: 0;
}

@keyframes illustrations-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.illustrations-move {
  transition: transform 1s;
}

.illustrations-leave-active {
  position: absolute;
}
</style>