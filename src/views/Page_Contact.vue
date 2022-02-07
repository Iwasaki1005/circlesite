<template>
	<div>
		<section id="About" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Contact</span></h2>
			<VerticalLine />
			<div class="sa sa--up">
				<p class="text-center">
					こちらのページから管理人へ問い合わせ<span class="display-only">、</span><br class="mobile-only">連絡をすることができます。<br><br class="mobile-only">
					下記フォーマットにご記入いただき<span class="display-only">、</span><br class="mobile-only">「入力内容の確認」ボタンを押して<br class="mobile-only">内容をご確認のうえ、送信してください。
				</p>
			</div>
			<div class="sa sa--up">
				<form class="center m-top-3rem m-top-3rem_mobile">
					<div class="input-group m-bottom-2rem m-bottom-1_5rem_mobile">
						<input type="text" id="name" required>
						<label for="name"><i class="fas fa-pen"></i> ご用件</label>
					</div>
					<div class="input-group m-bottom-2rem m-bottom-1_5rem_mobile">
						<input type="text" id="email" required>
						<label for="email"><i class="fas fa-envelope"></i> メールアドレス</label>
					</div>
					<div class="input-group m-bottom-2rem m-bottom-1_5rem_mobile">
						<textarea id="mennage" rows="8" required></textarea>
						<label for="message"><i class="fas fa-comments"></i> お問合せ内容</label>
					</div>
					<div class="bt-typeA bt-typeA-border d-block -block_mobile center center_mobile">
						<button class="bt-typeA-border-inner font-E1 font-J1" type="submit"><i class="fas fa-paper-plane m-right-05rem"></i>送信</button>
					</div>
				</form>
			</div>
			<BackToHome />
		</section>
		<Footer />
	</div>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'
import Footer from '../components/Footer.vue'

export default {
	name: 'Page_Contact',
	components: {
		VerticalLine,
		BackToHome,
		Footer,
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
			text: 'Contact',
			disabled: false,
			href: '',
		},
		],
	}),
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) {
	form {
	width: 60%;
}

.input-group{
	position: relative;
}

input, textarea {
	width: 100%;
	padding: 1vw;
	outline: 0;
	border: 0.07vw solid #e7b06c;
	color: #e7b06c;
	background: transparent;
	font-size: 15px;
}

textarea {
	height: 16rem;
}

label {
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	padding: 0.7vw;
	color: #e7b06c;
	cursor: text;
	transition: 0.2s;
}

.sendbt {
	padding: 0.7vw 0;
	color: #e7b06c;
	outline: none;
	background: transparent;
	border: 0.07vw solid #e7b06c;
	width: 100%;
	cursor: pointer;
}

input:focus~label,
input:valid~label,
textarea:focus~label,
textarea:valid~label {
	top: -2.5vw;
	font-size: 1vw;
}
}

@media screen and (max-aspect-ratio: 1/1) {
	form {
	width: 100%;
}

.input-group{
	position: relative;
}

input, textarea {
	width: 100%;
	padding: 1vw;
	outline: 0;
	border: 0.07vw solid #e7b06c;
	color: #e7b06c;
	background: transparent;
	font-size: 15px;
}

textarea {
	height: 16rem;
}

label {
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	padding: 0.7vw;
	color: #e7b06c;
	cursor: text;
	transition: 0.2s;
}

.sendbt {
	padding: 0.7vw 0;
	color: #e7b06c;
	outline: none;
	background: transparent;
	border: 0.07vw solid #e7b06c;
	width: 100%;
	cursor: pointer;
}

input:focus~label,
input:valid~label,
textarea:focus~label,
textarea:valid~label {
	top: -4vw;
	font-size: 1.5vw;
}
}

</style>