<template>
	<div class="" style="background-color: grey;">
		<h2>PDF Download</h2>
		<p>
			本ページで公開されているイラストの全てをダウンロードして閲覧することができます。<br>
			ダウンロードしたファイルは個人、閉鎖的な場での閲覧のみ可能です。<br>
			SNSへの投稿、素材としての利用、グッズ化などの一切の商用利用は禁止です。
		</p>
		<div>
			<p>上記の内容に同意します。</p>
			<label>
				<input type="radio" name="yesNo">
				<span class="check"></span>
					Yes
			</label>
			<label>
				<input type="radio" name="yesNo">
				<span class="cross"></span>
					No
			</label>
		</div>
	</div>
</template>

<script> 
export default {
	name: 'Gallery_pdfdownload',
	computed: {
	},
	mounted: function () {
  },
}
</script>

<style scoped>
	label {
		position: relative;
		margin: 5px 0;
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 2em;
		color: white;
		transition: 0.5s;
	}

	label input {
		appearance: none;
		display: none;
	}

	label span {
		position: relative;
		display: inline-block;
		width: 30px;
		height: 30px;
		/* background: #111; */
		margin-right: 15px;
		transition: 0.5s;
	}

	label span::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: #fff;
		box-shadow: 0 -27px 0 #fff;
		transition: 0.5s;
	}

	label input:checked ~ span.check::before {
		background: #0f0;
		box-shadow: 0 0 0 transparent;
	}

	label input:checked ~ span.cross::before {
		background: #f00;
		box-shadow: 0 0 0 transparent;
		transform: rotate(-45deg) translate(10px,-9px);
	}

	label span::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 3px;
		height: 100%;
		background: #fff;
		box-shadow: 27px 0 0 #fff;
		transition: 0.5s;
	}

	label input:checked ~ span.check::after {
		height: 50%;
		background: #0f0;
		box-shadow: 0 0 0 transparent;
	}

	label input:checked ~ span.check {
		transform: rotate(-45deg) translate(7px,-7px);
		transition: 0.5s;
	}
	label input:checked ~ span.cross::after {
		background: #f00;
		box-shadow: 0 0 0 transparent;
		transform: rotate(-45deg) translate(10px,10px);
	}
</style>