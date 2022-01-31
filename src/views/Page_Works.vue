<template>
	<section id="Works" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Works</span></h2>
		<VerticalLine />
		<div class="sa sa--up">
			<WorksTimeline />
		</div>
		<BackToHome />
	</section>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'
import WorksTimeline from '../components/Works_components/Works_Timeline.vue'


export default {
	name: 'Page_Works',
	components: {
		VerticalLine,
		BackToHome,
		WorksTimeline,
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
			text: 'Works',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>