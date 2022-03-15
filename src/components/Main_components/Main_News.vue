<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="News" class="section">
			<h2 id="news-index" class="font-E3 text-center scroll-fadein index-anime"><span id="news-span" class="">News</span></h2>
			<VerticalLine />
			<div class="display-flex sa sa--up">
				<router-link class="display-flex hover-flash news-window-container" v-bind:to="news[0].link">
					<div class="news-window-info">
						<div class="news-window-info-text co-white co-white_mobile">
							<p>{{news[0].date}}</p>
							<p>{{news[0].title}}</p>
						</div>
						<div class="news-window-info-tag">
							<div v-if="news[0].tag.includes('dmy')" class="newstag-dmy co-white co-white_mobile font-E1 tr-duration-05s">dmy</div>
							<div v-if="news[0].tag.includes('info')" class="newstag-info co-white co-white_mobile font-E1 tr-duration-05s">info</div>
							<div v-if="news[0].tag.includes('game')" class="newstag-info co-white co-white_mobile font-E1 tr-duration-05s">game</div>
						</div>
					</div>
					<div v-bind:class="news[0].mainthum" class="news-window-img-container overflow-hidden content-core tr-duration-05s"></div>
				</router-link>
				<div class="column-center column-center_mobile m-top-1rem_mobile">
					<h3 class="co-brown co-brown_mobile f-weight-normal f-weight-normal_mobile">-最新情報-</h3>
					<div>
						<router-link class="m-bottom-05rem m-bottom-05rem_mobile" v-bind:to="news[1].link">
							<div class="m-bottom-05rem m-bottom-05rem_mobile m-top-05rem m-top-05rem_mobile">
								<div class="display-flex display-flex_mobile">
									<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[1].date}}</p>
									<div class="align-center align-center_mobile">
										<div v-if="news[1].tag.includes('dmy')" class="newstag-dmy-small">dmy</div>
										<div v-if="news[1].tag.includes('info')" class="newstag-info-small">info</div>
										<div v-if="news[1].tag.includes('game')" class="newstag-info-small">game</div>
									</div>
								</div>
								<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[1].title}}</p>
							</div>
						</router-link>
						<router-link class="m-bottom-05rem m-bottom-05rem_mobile" v-bind:to="news[2].link">
							<div class="m-bottom-05rem m-bottom-05rem_mobile m-top-05rem m-top-05rem_mobile">
								<div class="display-flex display-flex_mobile">
									<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[2].date}}</p>
									<div class="align-center align-center_mobile">
										<div v-if="news[2].tag.includes('dmy')" class="newstag-dmy-small">dmy</div>
										<div v-if="news[2].tag.includes('info')" class="newstag-info-small">info</div>
										<div v-if="news[2].tag.includes('game')" class="newstag-info-small">game</div>
									</div>
								</div>
								<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[2].title}}</p>
							</div>
						</router-link>
						<router-link class="m-bottom-05rem m-bottom-05rem_mobile" v-bind:to="news[3].link">
							<div class="m-bottom-05rem m-bottom-05rem_mobile m-top-05rem m-top-05rem_mobile">
								<div class="display-flex display-flex_mobile">
									<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[3].date}}</p>
									<div class="align-center align-center_mobile">
										<div v-if="news[3].tag.includes('dmy')" class="newstag-dmy-small">dmy</div>
										<div v-if="news[3].tag.includes('info')" class="newstag-info-small">info</div>
										<div v-if="news[3].tag.includes('game')" class="newstag-info-small">game</div>
									</div>
								</div>
								<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[3].title}}</p>
							</div>
						</router-link>
						<router-link class="m-bottom-05rem m-bottom-05rem_mobile" v-bind:to="news[4].link">
							<div class="m-bottom-05rem m-bottom-05rem_mobile m-top-05rem m-top-05rem_mobile">
								<div class="display-flex display-flex_mobile">
									<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[4].date}}</p>
									<div class="align-center align-center_mobile">
										<div v-if="news[4].tag.includes('dmy')" class="newstag-dmy-small">dmy</div>
										<div v-if="news[4].tag.includes('info')" class="newstag-info-small">info</div>
										<div v-if="news[4].tag.includes('game')" class="newstag-info-small">game</div>
									</div>
								</div>
								<p class="fs-0_8rem fs-0_8rem_mobile co-black_mobile co-black">{{news[4].title}}</p>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="content-core content-core_mobile m-top-2rem  m-top-2rem_mobile sa sa--up">
				<a href="#" class="bt-typeA bt-typeA-border d-block center">
					<span class="bt-typeA-border-inner font-E1">View more ></span>
				</a>
			</div>
		</section>
	</v-lazy>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'

export default {
	name: 'MainNews',
	components: {
		VerticalLine,
	},
	data: () => ({
		isActive: false,
		news : [
			// 【メモ】新しいものニュースを上から順に追加していく
			{
				title:'ダミー1ナントカカントカのお知らせ',
				date:'2021.11.24',
				tag:['dmy','info','game'],
				mainthum:'mthum-1',subthum:'sthum-1',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'2021.05.13',
				tag:['dmy','info'],
				mainthum:'mthum-2',subthum:'sthum-2',
				link:'/news/20210202dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'9999.99.99',
				tag:['info'],
				mainthum:'mthum-3',subthum:'sthum-3',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'2021.08.11',
				tag:['dmy','info','game'],
				mainthum:'mthum-4',subthum:'sthum-4',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。',
				date:'2021.08.11',
				tag:['dmy','info'],
				mainthum:'mthum-4',subthum:'sthum-4',
				link:'/news/20200101dmy',
				emergent: false,
			},
		],
	}),
	created: function() {
		this.newshover(0)
	},
	updated: function () {
		this.indexanime()
		this.scrollanime_js()
	},
}
</script>

<style>
.mthum-1 {
	background-image: url(../../uploads/news/dmynews_1.png);
	background-position: center;
}
.sthum-1 {
	background-image: url(../../uploads/news/dmynews_1.png);
	background-position: center;
}
.mthum-2 {
	background-image: url(../../uploads/news/dmynews_2.png);
	background-position: center;
}
.sthum-2 {
	background-image: url(../../uploads/news/dmynews_2.png);
	background-position: center;
}
.mthum-3 {
	background-image: url(../../uploads/news/dmynews_3.png);
	background-position: center;
}
.sthum-3 {
	background-image: url(../../uploads/news/dmynews_3.png);
	background-position: center;
}
.mthum-4 {
	background-image: url(../../uploads/news/dmynews_4.png);
	background-position: center;
}
.sthum-4 {
	background-image: url(../../uploads/news/dmynews_4.png);
	background-position: center;
}
</style>