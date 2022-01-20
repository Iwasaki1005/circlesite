<template>
	<div class="narabe sa sa--up">
		<div v-for="(column) in gamelist" :key="column.title">
			<div class="game-bg">
				<div>
					<!-- サムネ -->
					<div class="samunemini">
						<div class="samunemini img-scale-hover" v-bind:class="column.thumclass"></div>
					</div>
					<!-- title -->
					<div class="co-black m-top-05rem m-bottom-05rem">
						<p class="lh-110">{{ column.title }}</p>
					</div>
					<!-- タグ -->
					<div class="display-flex m-bottom-1rem">
						<div v-if="column.tag.includes('New')" class="gametag-dmy">New</div>
						<div v-if="column.tag.includes('開発中')" class="gametag-dmy">開発中</div>
						<div v-if="column.tag.includes('発売中')" class="gametag-dmy">発売中</div>
						<div v-if="column.tag.includes('RPG')" class="gametag-dmy">RPG</div>
						<div v-if="column.tag.includes('rating=r18')" class="gametag-r18">R-18</div>
					</div>
				</div>
				<div>
					<!-- 発売日 -->
					<div class="fs-0_8rem">
						<span class="co-grey m-right-05rem lh-110">{{ column.release }}</span>
						<span class="co-grey lh-110">on sale</span>
					</div>
					<!-- 値段 -->
					<div class="space-between">
						<span class="fs-0_8rem co-grey m-right-05rem lh-110">{{ column.price }}</span>
					</div>
					<!-- rating -->
					<div v-if="column.rating.includes('rating=r18')"></div>
					<!-- リンク -->
					<a v-bind:href="column.linksrc" target="_blank">
						<div class="hover-flash">
							<img class="bt-hp-open-sm m-right-05rem" src="../../assets/img/bt-officialsite.svg">
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'GameGames',
	props: {
		gamelist: Array,
	},
	updated: function () {
		this.scrollanime_js()
	},
}
</script>

<style>
.game-bg {
	border: 1px solid #e7b06c;
	height: 25vw;
	width: 18.5vw;
	margin-right: 1.5vw;
	margin-bottom: 1vw;
	padding: 0.5vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 0.4vw;
	background: #fafafa;
}

.narabe {
	display: flex;
	flex-wrap: wrap;
}

.samunemini {
	width: 100%;
	height: 10vw;
	overflow:hidden;
}

.gametag-dmy {
    background-color: #e7b06c;
    text-align: center;
    width: 2.2rem;
    height: 1.0rem;
    margin: 0.1rem;
    border-radius: 10%;
    font-size: 0.6rem;
    line-height: 1.0rem;
	color: #fafafa;
}

.gametag-r18 {
    background-color: #e62078;
    text-align: center;
    width: 2.2rem;
    height: 1.0rem;
    margin: 0.1rem;
    border-radius: 10%;
    font-size: 0.6rem;
    line-height: 1.0rem;
	color: #fafafa;
}

.bt-hp-open-sm {
    height: 2.5vw;
    width: 8.5vw;
}
</style>