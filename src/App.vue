<template>
	<div id="app">
		<Loading />
		<BackgroundEffect />
		<Glmenu />
		<DrawerMenu />
		<v-app>
			<transition name="slide" mode="out-in">
				<router-view />
			</transition>
		</v-app>
		<!-- <Footer /> -->
	</div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
	transition: opacity 0.5s,;
}
.slide-enter,
.slide-leave-to {
	opacity: 0;
}
</style>

<script>
	import Loading from './components/Loading.vue'
	import BackgroundEffect from './components/BackgroundEffect.vue'
	import Glmenu from './components/GloMenu.vue'
	import DrawerMenu from './components/DrawerMenu.vue'
	// import Footer from './components/Footer.vue'

	export default {
		name: 'App',
		data: function () {
			return { show: true };
		},
		components: {
			BackgroundEffect,
			Loading,
			Glmenu,
			DrawerMenu,
			// Footer,
		},
		methods : {
			createTitleDesc : function(routeInstance){
				// タイトルを設定
				if(routeInstance.meta.title){
					var setTitle = routeInstance.meta.title + ' | ねばーランド.F';
					document.title = setTitle;
				} else {
					document.title = 'title is not set'
				}
				// メタタグdescription設定
				if(routeInstance.meta.desc){
					var setDesc = routeInstance.meta.desc + ' | ねばーランド.F';
					document.querySelector("meta[name='description']").setAttribute('content', setDesc)
				} else {
					document.querySelector("meta[name='description']").setAttribute('content', 'description is not set')
				}
			} 
		},
		mounted : function(){
			var routeInstance = this.$route;
			this.createTitleDesc(routeInstance);
		},
		watch: { 
			'$route' (routeInstance,) {
				this.createTitleDesc(routeInstance);
			}
		},
		head: {
			meta: [
				{ name: 'keywords', content: 'ねばーランドF,イラスト,フリーゲーム' },
				{ name: 'copyright', content: '© NEVERLAND.F' },
				{ name: 'author', content: 'ねばーランド.F' },
				{ property: 'og:title', content: 'ねばーランド.F' },
				{ property: 'og:description', content: 'サークル「ネバーランドF」のオフィシャルウェブページです。製作したイラスト、ゲームなどを公開しています。' },
				{ property: 'og:type', content: 'website' },
				{ property: 'og:url', content: 'http://neverland-f.com/' },
				{ property: 'og:locale', content: 'ja_JP' },
				// { property: 'og:image', content: 'https://example.com/img/og.png' },
				// { name: 'twitter:card', content: 'summary_large_image' },
				// { name: 'twitter:image', content: 'https://example.com/img/og.png' }
			],
			link: [
				{ rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css' },
				{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' },
				// { rel: 'icon', href: require('./path/to/icon-16.png'), sizes: '16x16', type: 'image/png' }, 
			],
			script: [
				{ type: 'text/javascript', src: 'https://platform.twitter.com/widgets.js', async: true},
			],
		},
	}
</script>