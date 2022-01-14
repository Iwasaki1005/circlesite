<template>
	<section id="Works" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Works</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<div class="sa sa--up">
			<WorksTimeline />
		</div>
		<BackToHome />
	</section>
</template>

<script>
import WorksTimeline from '../components/Works_components/Works_Timeline.vue'
import BackToHome from '../components/BackToHome.vue'

export default {
	name: 'Page_Works',
	components: {
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