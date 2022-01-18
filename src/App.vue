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
		<Footer />
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
	import Footer from './components/Footer.vue'

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
			Footer,
		},
		methods : {
			createTitleDesc : function(routeInstance){
				// タイトルを設定
				if(routeInstance.meta.title){
					var setTitle = routeInstance.meta.title + ' | サイトタイトル';
					document.title = setTitle;
				} else {
					document.title = 'title is not set'
				}
				// メタタグdescription設定
				if(routeInstance.meta.desc){
					var setDesc = routeInstance.meta.desc + ' | サイトタイトル';
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
		}
	}
</script>