<template>
	<div>
		<section id="Debugfloor" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Debugfloor</span></h2>
			<VerticalLine />
			<TestFontAwesome />
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'
import Footer from '../components/Footer.vue'

import TestFontAwesome from '../components/Debugfloor_components/Test_FontAwesome.vue'

export default {
	name: 'Page_Debugfloor',
	components: {
		BackToHome,
		VerticalLine,
		Footer,
		TestFontAwesome,
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
			text: 'Debugfloor',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>