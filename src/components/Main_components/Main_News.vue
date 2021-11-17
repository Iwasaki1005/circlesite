<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition" >
		<section id="News" class="section">
			<h2 id="news-index" class="font-E3 text-center scroll-fadein index-anime"><span id="news-span" class="">News</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class="display-flex sa sa--up">
				<div class="news-window-container hover-flash">
					<div class="news-window-info">
						<p class="news-window-info-text co-white">
							2021.05.13<br>
							ナントカ先生直筆イラストが当たる発売記念RTキャンペーン開催中です。
						</p>
						<div class="news-window-info-tag">
							<div class="newstag-dmy co-white font-E1">dmy</div>
							<div class="newstag-info co-white font-E1">info</div>
						</div>
					</div>
					<div class="news-window-img-container overflow-hidden content-core">
						<img class="" src="https://prtimes.jp/i/21973/169/ogp/d21973-169-576455-4.jpg">
					</div>
				</div>
				<div class="news-list-container">
					<div class="news-list-dia-position content-core">
						<div class="news-list-dia">
							<div class="news-dia1 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
							<div class="news-dia2 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
							<div class="news-dia3 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
							<div class="news-dia4 hover-flash overflow-hidden">
								<div class="news-dia-img"></div>
							</div>
						</div>
					</div>
					<div class="news-list-button content-core">
						<a href="#" class="bt-typeA bt-typeA-border">
							<span class="bt-typeA-border-inner font-E1">View more ></span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</v-lazy>
</template>

<script>
export default {
  name: 'MainNews',
  data: () => ({
      isActive: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
  },
}
</script>