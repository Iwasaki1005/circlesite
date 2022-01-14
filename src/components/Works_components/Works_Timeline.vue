<template>
	<v-timeline>
		<v-timeline-item v-for="(year, i) in works" :key="i" :color="year.color" small class="sa sa--up">
			<template v-slot:opposite>
				<span :class="`fs-2_5rem font-E3 ${year.textclass}`" v-text="year.year"></span>
			</template>
			<div class="py-4">
				<a :class="`fs-1_2rem ${year.textclass}`" :href="year.linkhref">
					{{year.title}}
				</a>
				<div>
					{{year.text}}
				</div>
			</div>
		</v-timeline-item>
	</v-timeline>
</template>

<script>
export default {
	name: 'Works_Timeline',
	data: () => ({
		works: [
			{
				color: '#e7b06c',
				textclass: 'co-brown',
				year: '1960.03',
				title: 'あいうえお',
				text: 'かきくけこ',
				linkhref: 'https://vuetifyjs.com/ja/api/v-timeline-item/#props',
			},
			{
				color: '#ff4d91',
				textclass: 'co-pink',
				year: '1970',
				title: 'Lorem ipsum',
				text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
			},
			{
				color: '#ff4d91',
				textclass: 'co-pink',
				year: '1980',
				title: 'Lorem ipsum',
				text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
			},
			{
				color: '#e7b06c',
				textclass: 'co-brown',
				year: '1990',
				title: 'Lorem ipsum',
				text: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
			},
		],
	}),
	mounted: function() {
		this.scrollanime_js()
	},
}
</script>

<style>
.nw-column {
	padding: 1rem 2rem;
	border-radius: 0.2vw;
	/*box-shadow: 0.06vw 0.06vw 0.12vw 0.12vw #e7b06c;*/
	margin: 2rem 0.5rem;
}

.bg-none {
	background-color: transparent;
}
</style>