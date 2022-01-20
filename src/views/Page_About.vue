<template>
	<section id="About" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>About</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<div class="sa sa--up">
			<p class="text-center">
				当サイトは個人サークル「ねばーランド.F」の公式ページです。<br><br>
				主にイラストやゲームの創作を中心に活動をしています。<br><br>
				管理人への連絡、バグの報告などは<router-link to="/contact">こちら</router-link>からお願いします。<br><br>
			</p>
		</div>
		<BackToHome />
	</section>
</template>

<script>
import BackToHome from '../components/BackToHome.vue'

export default {
	name: 'Page_About',
	components: {
		BackToHome,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data: () => ({
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'About',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>