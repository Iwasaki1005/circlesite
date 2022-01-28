<template>
	<div>
		<ul id="Drawer-menu" class="dr-menu dr-hidden">
			<router-link to="/">
				<img class="dr-logo center closeevent" src="../assets//logo/neverlandf_logo1.png" alt=”ねばーランドFロゴ”>
			</router-link>
			<div class="dr-links">
				<div id="dr-content1" class="dr-container dr-saup opacity-0">
					<router-link to="/">
						<div class="display-flex dr-link dr-link-w50_mobile closeevent">
							<i class="fas fa-home co-brown co-brown_mobile dr-icon m-right-05rem co-brown"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">H</span><span class="co-grey co-grey_mobile">ome</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">ホーム</p>
							</div>
						</div>
					</router-link>
					<router-link to="/about">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-object-group co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">A</span><span class="co-grey co-grey_mobile">bout</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">概要</p>
							</div>
						</div>
					</router-link>
					<router-link to="/news">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-newspaper co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">N</span><span class="co-grey co-grey_mobile">ews</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">最新情報</p>
							</div>
						</div>
					</router-link>
				</div>
				<div id="dr-content2" class="dr-container dr-saup opacity-0">
					<router-link to="/gallery">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-pen-alt co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">G</span><span class="co-grey co-grey_mobile">allery</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">イラスト一覧</p>
							</div>
						</div>
					</router-link>
					<router-link to="/game">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-gamepad co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">G</span><span class="co-grey co-grey_mobile">ame</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">ゲーム</p>
							</div>
						</div>
					</router-link>
					<router-link to="/shop">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-store-alt co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">S</span><span class="co-grey co-grey_mobile">hop</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">ショップ</p>
							</div>
						</div>
					</router-link>
					<router-link to="/works">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-tablet-alt co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">W</span><span class="co-grey co-grey_mobile">orks</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">活動・お仕事履歴</p>
							</div>
						</div>
					</router-link>
				</div>
				<div id="dr-content3" class="dr-line dr-saup opacity-0"></div>
				<div id="dr-content4" class="dr-container dr-saup opacity-0">
					<router-link to="/information">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-file-alt co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">I</span><span class="co-grey co-grey_mobile">nfo</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">ご案内など</p>
							</div>
						</div>
					</router-link>
					<router-link to="/links">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-external-link-alt co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">L</span><span class="co-grey co-grey_mobile">ink</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">リンク</p>
							</div>
						</div>
					</router-link>
					<router-link to="/contact">
						<div class="display-flex dr-link closeevent">
							<i class="fas fa-envelope co-brown co-brown_mobile dr-icon m-right-05rem"></i>
							<div>
								<p class="font-E2 dr-fs1"><span class="co-brown co-brown_mobile">C</span><span class="co-grey co-grey_mobile">ontact</span></p>
								<p class="dr-fs2 co-grey co-grey_mobile">連絡・お問い合わせ</p>
							</div>
							</div>
				</router-link>
				</div> 
			</div>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'DrawerMenu',
  mounted: function () {
    
  }
}
</script>