<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="News" class="section">
			<h2 id="news-index" class="font-E3 text-center scroll-fadein index-anime"><span id="news-span" class="">News</span></h2>
			<VerticalLine />
			<div class="display-flex sa sa--up">
				<router-link class="display-flex hover-flash news-window-container" v-bind:to="newsscreen.link">
					<div class="news-window-info">
						<div class="news-window-info-text co-white co-white_mobile">
							<p>{{newsscreen.date}}</p>
							<p>{{newsscreen.title}}</p>
						</div>
						<div class="news-window-info-tag">
							<div v-if="newsscreen.tag.includes('dmy')" class="newstag-dmy co-white co-white_mobile font-E1 tr-duration-05s">dmy</div>
							<div v-if="newsscreen.tag.includes('info')" class="newstag-info co-white co-white_mobile font-E1 tr-duration-05s">info</div>
							<div v-if="newsscreen.tag.includes('game')" class="newstag-info co-white co-white_mobile font-E1 tr-duration-05s">game</div>
						</div>
					</div>
					<div v-bind:class="newsscreen.mainthum" class="news-window-img-container overflow-hidden content-core tr-duration-05s"></div>
				</router-link>
				<div class="news-list-container center_mobile display-only">
					<div class="news-list-dia-position content-core">
						<div class="news-list-dia">
							<router-link class="news-dia1 display-flex display-flex_mobile" v-bind:to="news[0].link">
								<div v-on:mouseover="newshover(0)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[0].subthum" class="news-dia-img"></div>
								</div>
							</router-link>
							<router-link class="news-dia2 display-flex display-flex_mobile" v-bind:to="news[1].link">
								<div v-on:mouseover="newshover(1)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[1].subthum" class="news-dia-img"></div>
								</div>
							</router-link>
							<router-link class="news-dia3 display-flex display-flex_mobile" v-bind:to="news[2].link">
								<div v-on:mouseover="newshover(2)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[2].subthum" class="news-dia-img"></div>
								</div>
							</router-link>
							<router-link class="news-dia4 display-flex display-flex_mobile" v-bind:to="news[3].link">
								<div v-on:mouseover="newshover(3)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[3].subthum" class="news-dia-img"></div>
								</div>
							</router-link>
						</div>
					</div>
					<div class="news-list-button content-core">
						<a href="#" class="bt-typeA bt-typeA-border">
							<span class="bt-typeA-border-inner font-E1">View more ></span>
						</a>
					</div>
				</div>
				<div class="news-list-container center_mobile mobile-only">
					<div class="news-list-dia-position content-core">
						<div class="news-list-dia">
							<div class="news-dia1 display-flex display-flex_mobile">
								<div v-on:mouseover="newshover(0)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[0].subthum" class="news-dia-img"></div>
								</div>
							</div>
							<div class="news-dia2 display-flex display-flex_mobile">
								<div v-on:mouseover="newshover(1)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[1].subthum" class="news-dia-img"></div>
								</div>
							</div>
							<div class="news-dia3 display-flex display-flex_mobile">
								<div v-on:mouseover="newshover(2)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[2].subthum" class="news-dia-img"></div>
								</div>
							</div>
							<div class="news-dia4 display-flex display-flex_mobile">
								<div v-on:mouseover="newshover(3)" v-on:mouseleave="newshover(0)" class="width100 width100_mobile height100 height100_mobile hover-flash overflow-hidden">
									<div v-bind:class="news[3].subthum" class="news-dia-img"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="news-list-button content-core">
						<a href="#" class="bt-typeA bt-typeA-border">
							<span class="bt-typeA-border-inner font-E1">View more ></span>
						</a>
					</div>
				</div>
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
				title:'ダミー3',
				date:'9999.99.99',
				tag:['dmy','info'],
				mainthum:'mthum-3',subthum:'sthum-3',
				link:'/news/20200101dmy',
				emergent: false,
			},
			{
				title:'ダミー4',
				date:'2021.08.11',
				tag:['dmy','info'],
				mainthum:'mthum-4',subthum:'sthum-4',
				link:'/news/20200101dmy',
				emergent: false,
			},
		],
		newsscreen : {
			title:'',
			date:'',
			tag:[],
			mainthum:'',subthum:'',
			link:'',
			emergent: false,
		},
	}),
	methods: {
		newshover : function (index) {
			this.newsscreen.title = this.news[index].title;
			this.newsscreen.date = this.news[index].date;
			this.newsscreen.tag = this.news[index].tag;
			this.newsscreen.mainthum = this.news[index].mainthum;
			this.newsscreen.subthum = this.news[index].subthum;
			this.newsscreen.link = this.news[index].link;
			this.newsscreen.emergent = this.news[index].emergent;
		},
	},
	created: function() {
		this.newshover(0)
	},
	updated: function () {
		this.indexanime()
		this.scrollanime_js()
		// this.newshover(0)
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