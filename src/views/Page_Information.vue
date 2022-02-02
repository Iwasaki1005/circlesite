<template>
	<section id="About" class="section">
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Information</span></h2>
		<VerticalLine />
		<v-card theme="disable" class="bg-none sa sa--up">
			<v-tabs v-model="tab" align-with-title grow>
				<v-tabs-slider color="yellow"></v-tabs-slider>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>
			<v-tabs-items v-model="tab">
				<v-tab-item>
					<div class="NW-container">
						<p class="info-indexbg m-bottom-1rem m-bottom-05rem_mobile co-white co-white_mobile">プライバシーポリシー</p>
						<p>
							※googleのやつをコピペ
						</p>
					</div>
				</v-tab-item>
				<v-tab-item>
					<div class="NW-container">
						<p class="info-indexbg m-bottom-1rem m-bottom-05rem_mobile co-white co-white_mobile">当サイトへのリンクについて</p>
						<p>
							当サイトは基本的にリンクフリーです。<br>
							リンクをしていただく際のURLはトップページへお願いします。<br><br>
							サイトへリンクされる際にバナーをご使用される場合につきましてはこちらで用意したバナーをお使いください。<br>
						</p>
						<p class="info-indexbg m-bottom-1rem m-bottom-05rem_mobile co-white co-white_mobile m-top-2rem m-top-2rem_mobile">バナー</p>
						<p class="">
							バナーの画像を直リンクでご利用される場合はバナー下のコードをコピーして貼り付けることでご利用いただけます
						</p>
						<p class="fs-0_8rem fs-0_8rem_mobile co-grey co-grey_mobile">
							※直リンクでご利用される場合、URLの変更やサイトのメンテナンス等で利用できなくなる場合がありますのでご注意ください。
						</p>
						<img class="m-top-1rem m-top-1rem_mobile m-bottom-05rem m-bottom-05rem_mobile" src="../assets/banner/neverlandf_banner1.png">
						<textarea readonly onclick="this.select();" class="width100 width100_mobile df-textarea">
							"<a target="_blank" href="https://circus-co.jp/product/dc4/"><img alt="この恋は世界を変える CIRCUS 20th Project「D.C.4 ～ダ・カーポ4～」好評発売中!" title="この恋は世界を変える CIRCUS 20th Project「D.C.4 ～ダ・カーポ4～」好評発売中!" src="https://circus-co.jp/product/dc4/rc/special/dc4_banner_650x120.jpg"></a>"
						</textarea>
					</div>
				</v-tab-item>
				<v-tab-item>
					<div class="NW-container">
						<p class="info-indexbg m-bottom-1rem m-bottom-05rem_mobile co-white co-white_mobile">閲覧推奨ブラウザ</p>
						<p class="m-bottom-1rem m-bottom-05rem_mobile">当サイトを閲覧する際の推奨ブラウザは下記のものになります。</p>
						<p class="m-bottom-1rem m-bottom-05rem_mobile">
							・Google Chrome
						</p>
						<p class="fs-0_8rem fs-0_8rem_mobile co-grey co-grey_mobile">
							Google Chromeは、Google Inc.の米国およびその他の国における商標または登録商標です。
						</p>
					</div>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
		<BackToHome />
	</section>
</template>

<script>
import VerticalLine from '../components/VerticalLine.vue'
import BackToHome from '../components/BackToHome.vue'

export default {
	name: 'Page_Information',
	components: {
		VerticalLine,
		BackToHome,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	data () {
		return {
			tab: null,
			items: [
			'プライバシーポリシー', 'サイトリンク', '閲覧推奨ブラウザ',
		],
		breadcrumbs: [
		{
			text: 'Home',
			disabled: false,
			to: '/',
		},
		{
			text: 'Information',
			disabled: false,
			href: '',
		},
		],
		}
	},
}
</script>

<style>
.info-indexbg {
	background-color: #e7b06c;
	border-left: #ffdbae solid 0.4vw;
	padding: 0.2vw 0 0.2vw 1vw;
}

.df-textarea {
	border: black solid 1px;
	border-radius: initial;
	font-size: initial;
	font-family: initial;
	color: initial;
	background: initial;
}
</style>