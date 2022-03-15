<template>
	<div>
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>News</span></h2>
		<VerticalLine />
		<v-card theme="disable" class="bg-none sa sa--up">
			<v-tabs v-model="tab" align-with-title grow>
				<v-tabs-slider color="yellow"></v-tabs-slider>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<router-link to="/news/20210202dmy">
						<div class="nw-column m-bottom-2rem">
							<div class="align-center align-center_mobile">
								<p class="fs-0_8rem fs-0_8rem_mobile m-right-05rem m-right-05rem_mobile co-black co-black_mobile">2022.※未定</p>
								<div class="newstag-info font-E1">info</div>
							</div>
							<p class="co-black co-black_mobile">新サークル「ねばーランドF」活動開始しました。</p>
						</div>
					</router-link>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
	</div>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
	name: 'News_Maincontents',
	components: {
		VerticalLine,
	},
	data () {
		return {
			tab: null,
			items: [
			'2022',
		],
		breadcrumbs: [
			{
				text: 'Home',
				disabled: false,
				to: '/',
			},
			{
				text: 'News',
				disabled: false,
				href: '',
			},
			],
		}
	},
	mounted: function() {
		this.scrollanime_js()
	},
}
</script>

<style>
.nw-column {
	padding: 1rem 2rem;
	border-radius: 0.2vw;
	margin: 2rem 0.5rem;
	box-shadow: 0.04vw 0.04vw 0.4vw 0.01vw #e7b06c;
}

.bg-none {
	background-color: transparent;
}
</style>