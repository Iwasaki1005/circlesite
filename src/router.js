import Vue from 'vue'
import Router from 'vue-router'
import Page_Main from './views/Page_Main.vue'
import Page_HelloWorld from './components/HelloWorld.vue'
import Page_About from './views/Page_About.vue'
import Page_News from './views/Page_News.vue'
import Page_Gallery from './views/Page_Gallery.vue'
import Page_Game from './views/Page_Game.vue'
import Page_Information from './views/Page_Information.vue'
import Page_Contact from './views/Page_Contact.vue'
import Page_Goods from './views/Page_Goods.vue'
import Page_Links from './views/Page_Links.vue'
import News_Maincontents from './components/News_components/News_Maincontents.vue'
import News_20200101dmy from './components/News_components/News_20200101dmy.vue'
import News_20210202dmy from './components/News_components/News_20210202dmy.vue'
import Page_404 from './views/Page_404.vue'


Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Page_Main,
			meta: { title: 'Home', desc: 'サークル「ネバーランドF」のオフィシャルウェブページです。製作したイラスト、ゲームなどを公開しています。' }
		},
		{
			path: '/helloworld',
			name: 'helloworld',
			component: Page_HelloWorld,
		},
		{
			path: '/about',
			name: 'about',
			component: Page_About,
			meta: { title: 'About', desc: '当サークルについての概要を記載しています。' }
		},
		{
			path: '/gallery',
			name: 'gallery',
			component: Page_Gallery,
			meta: { title: 'Gallery', desc: '製作したイラストを公開しています。' }
		},
		{
			path: '/information',
			name: 'information',
			component: Page_Information,
			meta: { title: 'Information', desc: '当サイトについての概要を記載しています。' }
		},
		{
			path: '/game',
			name: 'game',
			component: Page_Game,
			meta: { title: 'Game', desc: '製作したゲームを公開しています。' }
		},
		{
			path: '/contact',
			name: 'contact',
			component: Page_Contact,
			meta: { title: 'Contact', desc: 'サークルの管理者へ問い合わせのメールを出すことができます。' }
		},
		{
			path: '/goods',
			name: 'goods',
			component: Page_Goods,
			meta: { title: 'Contact', desc: '製作したグッズの紹介、販売先のショップ様へのリンクを記載しています。' }
		},
		{
			path: '/links',
			name: 'links',
			component: Page_Links,
			meta: { title: 'Links', desc: '' }
		},
		{
			path: '/news',
			component: Page_News,
			meta: { title: 'Contact', desc: 'サークルのお知らせを記載しています。' },
			children: [
				{
					path: '',
					component: News_Maincontents,
					name: 'news',
					meta: { title: 'News', desc: 'ディスクリプションを記述' },
				},
				{
					path: '/news/20200101dmy',
					component: News_20200101dmy,
					name: '20200101dmy',
					meta: { title: '2020年(仮)のテストニュースです。', desc: '2020年(仮)のテストニュースです。' }
				},
				{
					path: '/news/20210202dmy',
					component: News_20210202dmy,
					name: '20210202dmy',
					meta: { title: '2021年(仮)のテストニュースです。', desc: '2021年(仮)のテストニュースです。' }
				}
			]
		},
		{
			path: '*',
			name: 'NotFound',
			component: Page_404,
			meta: { title: 'Error_404NotFound', desc: '申し訳ありません。お探しのページは見つかりませんでした。' }
		},
	],
	scrollBehavior () {
		return new Promise(() => {
		setTimeout(() => {
			window.scroll({top: 0, behavior: 'instant'});
		}, 400)
		})
	},
})