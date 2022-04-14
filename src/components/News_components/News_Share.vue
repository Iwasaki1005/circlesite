<template>
	<div class="f-ali-jus-center-dir-column m-top-2rem">
		<p class="co-brown">- Share This News -</p>
		<div class="m-top-05rem">
			<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="news-share-twitterbt" data-via="vuejs" data-hashtags="ハッシュタグ名" data-related="tkcpail34,vuejs" data-show-count="false"></a>
			<!-- <SvganimateTwitter /> -->
		</div>
	</div>
</template>

<script> 
// import SvganimateTwitter from '../Svganimate_twitter.vue'

var path;

export default {
	name: 'News_Share',
	components: {
		// SvganimateTwitter,
	},
	computed: {
		GetURL: function() {
			path = window.location.href;
			alert(path);
			return path;
		},
	},
	mounted: function () {
		/*--------------------------------------------------------------------------
		 *
		 * tweet
		 *
		 *
		--------------------------------------------------------------------------*/
		let sharetweet = document.createElement('script')
		sharetweet.setAttribute('src', 'https://platform.twitter.com/widgets.js')
		document.head.appendChild(sharetweet)
  },
}
</script>

<style>
.news-share-twitterbt {
	position: relative;
}

.news-share-twitterbt-position {
	position: absolute;
}
</style>