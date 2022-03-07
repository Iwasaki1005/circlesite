<template>
	<div>
		<button class="bt-typeA bt-typeA-border d-block center center_mobile m-bottom-2rem m-bottom-2rem_mobile sa sa--up" v-on:click="pdfdlopen">
			<span class="bt-typeA-border-inner font-E1">PDF Download</span>
		</button>
		<modal name="pdfdownload">
			<div class="column-center column-center_mobile p-tb-1rem p-tb-4rem_mobile p-rl-2rem_mobile">
				<h3 class="co-brown co-brown_mobile f-weight-normal f-weight-normal_mobile m-bottom-1rem m-bottom-1rem_mobile">PDF Download</h3>
				<p class="m-bottom-2rem m-bottom-2rem_mobile">
					本ページで公開されているイラストの全てをダウンロードして閲覧することができます。<br>
					ダウンロードしたファイルは個人、閉鎖的な場での閲覧のみ可能です。<br>
					SNSへの投稿、素材としての利用、グッズ化などのその他一切の商用利用は禁止です。
				</p>
				<div>
					<p class="m-bottom-1rem m-bottom-1rem_mobile">上記の内容に同意します。</p>
					<div class="space-around space-around_mobile">
						<label v-on:click='pdfdlactive'>
							<input type="radio" name="yesNo" v-model="agree" value="yes">
							<span class="check"></span>
								Yes
						</label>
						<label v-on:click='pdfdlfalse'>
							<input type="radio" name="yesNo" v-model="agree" value="no">
							<span class="cross"></span>
								No
						</label>
					</div>
				</div>
				<div class="content-core content-core_mobile m-top-1rem m-top-1rem_mobile">
					<div id="pdf_dlbt" class="bt-typeA bt-typeA-border d-block center tr-duration-05s isdisable_grey">
						<span class="bt-typeA-border-inner font-E1">Download</span>
					</div>
				</div>
				<img class="m-top-1rem m-top-1rem_mobile close-bt" v-on:click="pdfdlclose" src="../../assets/img/bt-close.svg">
			</div>
		</modal>
	</div>
</template>

<script> 
export default {
	name: 'Gallery_pdfdownload',
	methods: {
		pdfdlactive: function () {
			const pdfdlbt = document.getElementById('pdf_dlbt');
			pdfdlbt.classList.remove('isdisable_grey')
		},
		pdfdlfalse: function () {
			const pdfdlbt = document.getElementById('pdf_dlbt');
			pdfdlbt.classList.add('isdisable_grey')
		},
		pdfdlopen : function() {
			this.$modal.show('pdfdownload');
		},
		pdfdlclose : function () {
			this.$modal.hide('pdfdownload');
		},
	}
}
</script>

<style scoped>
@media screen and (min-aspect-ratio: 1/1) { 
	label {
		position: relative;
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 1rem;
		color: #333;
		transition: 0.5s;
	}

	label input {
		appearance: none;
		display: none;
	}

	label span {
		position: relative;
		display: inline-block;
		width: 1.5vw;
		height: 1.5vw;
		/* background: #111; */
		margin-right: 0.75vw;
		transition: 0.5s;
	}

	label span::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.15vw;
		background: #e7b06c;
		box-shadow: 0 -1.5vw 0 #e7b06c;
		transition: 0.5s;
	}

	label input:checked ~ span.check::before {
		background: #0f0;
		box-shadow: 0 0 0 transparent;
	}

	label input:checked ~ span.cross::before {
		background: #f00;
		box-shadow: 0 0 0 transparent;
		transform: rotate(-45deg) translate(0.5vw, -0.45vw);
	}

	label span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0.1vw;
		height: 100%;
		background: #e7b06c;
		box-shadow: 1.4vw 0 0 #e7b06c;
		transition: 0.5s;
	}

	label input:checked ~ span.check::after {
		height: 50%;
		background: #0f0;
		box-shadow: 0 0 0 transparent;
	}

	label input:checked ~ span.check {
		transform: rotate(-45deg) translate(0.35vw,-0.35vw);
		transition: 0.5s;
	}
	label input:checked ~ span.cross::after {
		background: #f00;
		box-shadow: 0 0 0 transparent;
		transform: rotate(-45deg) translate(0.5vw,0.5vw);
	}
}
@media screen and (max-aspect-ratio: 1/1) {
	label {
		position: relative;
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 1rem;
		color: #333;
		transition: 0.5s;
	}

	label input {
		appearance: none;
		display: none;
	}

	label span {
		position: relative;
		display: inline-block;
		width: 3.75vw;
		height: 3.75vw;
		/* background: #111; */
		margin-right: 1.8vw;
		transition: 0.5s;
	}

	label span::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.375vw;
		background: #e7b06c;
		box-shadow: 0 -3.75vw 0 #e7b06c;
		transition: 0.5s;
	}

	label input:checked ~ span.check::before {
		background: #0f0;
		box-shadow: 0 0 0 transparent;
	}

	label input:checked ~ span.cross::before {
		background: #f00;
		box-shadow: 0 0 0 transparent;
		transform: rotate(-45deg) translate(1.25vw, -1.125vw);
	}

	label span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0.25vw;
		height: 100%;
		background: #e7b06c;
		box-shadow: 3.5vw 0 0 #e7b06c;
		transition: 0.5s;
	}

	label input:checked ~ span.check::after {
		height: 50%;
		background: #0f0;
		box-shadow: 0 0 0 transparent;
	}

	label input:checked ~ span.check {
		transform: rotate(-45deg) translate(0.875vw,-0.875vw);
		transition: 0.5s;
	}
	label input:checked ~ span.cross::after {
		background: #f00;
		box-shadow: 0 0 0 transparent;
		transform: rotate(-45deg) translate(1.25vw,1.25vw);
	}
}
</style>

<style>
	@media screen and (min-aspect-ratio: 1/1) { 
		.vm--modal {
		top: 20vh!important;
		left: 15vw!important;
		width: 70vw!important;
		height: 33vw!important;
		margin: 0;
		background-color: #fafafa!important;
	}

	.close-bt {
		width: 5rem;
		cursor: pointer;
	}
	}

	@media screen and (max-aspect-ratio: 1/1) {
.vm--modal {
		top: 15vh!important;
		left: 7.5vw!important;
		width: 85vw!important;
		height: 110vw!important;
		margin: 0;
		background-color: #fafafa!important;
	}

	.close-bt {
		width: 7rem;
	}
	}
</style>