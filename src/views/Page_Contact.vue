<template>
	<div>
		<section id="Contact" class="section">
			<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
			<h2 class="font-E3 text-center"><span>Contact</span></h2>
			<VerticalLine />
			<div class="sa sa--up">
				<p class="text-center">
					こちらのページから管理人へ問い合わせ<span class="dis-only">、</span><br class="mob-only">連絡をすることができます。<br><br class="mob-only">
					下記フォーマットにご記入いただき<span class="dis-only">、</span><br class="mob-only">「入力内容の確認」ボタンを押して<br class="mob-only">内容をご確認のうえ、送信してください。
				</p>
			</div>
			<div class="sa sa--up">
				<form method="post" action="php/mail.php" class="m-rl-auto m-top-3rem">
					<div class="p-relative m-bottom-2rem_dis m-bottom-1_5rem_mob">
						<input name="ご用件" v-model="contact_index" type="text" id="name" required>
						<label for="name"><i class="fas fa-pen"></i> ご用件</label>
					</div>
					<div class="p-relative m-bottom-2rem_dis m-bottom-1_5rem_mob">
						<input name="メールアドレス"  v-model="contact_mail" type="text" id="email" required>
						<label for="email"><i class="fas fa-envelope"></i> メールアドレス</label>
					</div>
					<div class="p-relative m-bottom-2rem_dis m-bottom-1_5rem_mob">
						<textarea name="お問合せ内容"  v-model="contact_message" id="mennage" rows="8" required></textarea>
						<label for="message"><i class="fas fa-comments"></i> お問合せ内容</label>
					</div>
					
					<div class="bt-typeA bt-typeA-border d-block m-rl-auto">
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

	input, textarea {
		width: 100%;
		padding: 1vw;
		outline: 0;
		border: 0.07vw solid #e7b06c;
		color: #333;
		font-family: Kosugi Maru, sans-serif;
		font-size: 1.4vw;
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

	input:focus~label,
	input:valid~label,
	textarea:focus~label,
	textarea:valid~label {
		top: -4vw;
		font-size: 1.5vw;
	}
}
</style>