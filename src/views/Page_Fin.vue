<template>
	<div>
		<section id="" class="section">
			<div class="sa sa--up">
				<p class="text-center  m-top-3rem">
					お問い合わせありがとうございます。<br>
					送信は正常に完了しました。
				</p>
			</div>
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import BackToHome from '../components/BackToHome.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'News_20210202dmy',
	components: {
		BackToHome,
		Footer,
	},
	mounted: function() {
		this.scrollanime_js()
	},
}
</script>