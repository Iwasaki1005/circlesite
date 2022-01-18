<template>
	<ul id="Drawer-menu" class="dr-menu dr-hidden">
		<img class="dr-logo center" src="../assets//logo/neverlandf_logo1.png">
		<div class="dr-links">
			<div id="dr-content1" class="dr-container dr-saup opacity-0">
				<router-link to="/">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-home co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">H</span><span class="co-grey">ome</span></p>
							<p class="dr-fs2 co-grey">ホーム</p>
						</div>
					</div>
				</router-link>
				<router-link to="/about">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-object-group co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">A</span><span class="co-grey">bout</span></p>
							<p class="dr-fs2 co-grey">概要</p>
						</div>
					</div>
				</router-link>
				<router-link to="/news">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-newspaper co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">N</span><span class="co-grey">ews</span></p>
							<p class="dr-fs2 co-grey">最新情報</p>
						</div>
					</div>
				</router-link>
			</div>
			<div id="dr-content2" class="dr-container dr-saup opacity-0">
				<router-link to="/gallery">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-pen-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">G</span><span class="co-grey">allery</span></p>
							<p class="dr-fs2 co-grey">イラスト一覧</p>
						</div>
					</div>
				</router-link>
				<router-link to="/game">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-gamepad co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">G</span><span class="co-grey">ame</span></p>
							<p class="dr-fs2 co-grey">ゲーム</p>
						</div>
					</div>
				</router-link>
				<router-link to="/shop">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-store-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">S</span><span class="co-grey">hop</span></p>
							<p class="dr-fs2 co-grey">ショップ</p>
						</div>
					</div>
				</router-link>
				<router-link to="/works">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-tablet-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">W</span><span class="co-grey">orks</span></p>
							<p class="dr-fs2 co-grey">活動・お仕事履歴</p>
						</div>
					</div>
				</router-link>
			</div>
			<div id="dr-content3" class="dr-line dr-saup opacity-0"></div>
			<div id="dr-content4" class="dr-container dr-saup opacity-0">
				<router-link to="/information">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-file-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">I</span><span class="co-grey">nfo</span></p>
							<p class="dr-fs2 co-grey">ご案内・個人情報保護方針</p>
						</div>
					</div>
				</router-link>
				<router-link to="/links">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-external-link-alt co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">L</span><span class="co-grey">ink</span></p>
							<p class="dr-fs2 co-grey">リンク</p>
						</div>
					</div>
				</router-link>
				<router-link to="/contact">
					<div class="display-flex dr-link closeevent">
						<i class="fas fa-envelope co-brown dr-icon m-right-05rem"></i>
						<div>
							<p class="font-E2 dr-fs1"><span class="co-brown">C</span><span class="co-grey">ontact</span></p>
							<p class="dr-fs2 co-grey">連絡・お問い合わせ</p>
						</div>
					</div>
				</router-link>
			</div> 
		</div>
	</ul>
</template>

<script>
export default {
  name: 'DrawerMenu',
  mounted: function () {
    
  }
}
</script>