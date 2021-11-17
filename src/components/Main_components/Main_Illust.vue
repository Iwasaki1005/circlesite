<template>
	<v-lazy v-model="isActive" :options="{ threshold: 1}" min-height="100" transition="fade-transition">
		<section id="Illust" class="section-2 sa">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>three</span></h2>
			<div class="vertical-line center sa sa--up"></div>
			<div class="display-flex">
				<div class="width95">
					<div class="space-around sa sa--up">
						<div class="il-1 flex-lower-right hover-flash">
							<img class="bt-il-open m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
						</div>
						<div class="space-around-column">
							<div class="il-2 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
							<div class="il-3 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
						</div>
					</div>
					<div class="space-around m-top-2rem sa sa--up">
						<div class="space-around-column">
							<div class="il-2 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
							<div class="il-3 flex-lower-right hover-flash">
								<img class="bt-il-open-sm m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
							</div>
						</div>
						<div class="il-1 flex-lower-right hover-flash">
							<img class="bt-il-open m-bottom-05rem m-right-05rem" src="../../assets/img/bt-open.svg">
						</div>
					</div>
				</div>
				<div class="width5 sa sa--up">
					<p class="font-E3 vertical-text">Illust <span class="v-line">────────────────────────────────────────</span></p>
				</div>
			</div>
			<div class="content-core m-top-2rem sa sa--up">
				<a href="#" class="bt-typeA bt-typeA-border d-block center">
					<span class="bt-typeA-border-inner font-E1">View more ></span>
				</a>
			</div>
		</section>
	</v-lazy>
</template>

<script>
export default {
  name: 'MainIllust',
  data: () => ({
      isActive: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>