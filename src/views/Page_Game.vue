<template>
	<section id="About" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Game</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<div class="sa sa--up">
			<!--ここに色々いれるぞい-->
		</div>
		<router-link to="/">
			<div class="content-core m-top-2rem sa sa--up">
				<div class="bt-typeA bt-typeA-border d-block center">
					<span class="bt-typeA-border-inner font-E1">Back To Home ></span>
				</div>
			</div>
		</router-link>
	</section>
</template>

<script>
export default {
	name: 'Page_Game',
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
			text: 'Game',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>