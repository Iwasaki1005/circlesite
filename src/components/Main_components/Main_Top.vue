<template>
	<div id="NeverLand-top" class="nla-top">
		<div class="nla-dia1-con">
			<img class="nla-dia1" src="../../assets/sprite/triangle1.svg">
		</div>
		<!-- <div class="nla-dia2-con">
			<img class="nla-dia1" src="../../assets/sprite/triangle2.svg">
		</div> -->
		<div class="nla-logo-grid content-core content-core_mobile">
			<img class="nla-logo" src="../../assets/logo/neverlandf_logo1.png" alt=”ねばーランドFロゴ”>
		</div>
		<div class="nla-tips1">
			<img class="nla-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy1.png">
			<img class="nla-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy2.png">
		</div>
		<div class="nla-tips2">
			<img class="nla-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy3.png">
			<img class="nla-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy1.png">
			<img class="nla-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy2.png">
			<img class="nla-banner tr-duration-025s" src="../../assets/dmyimage/topicbanner_dmy3.png">
		</div>
		<div style="display: none;" class="nla-visual">visual</div>
	</div>
</template>

<script>
export default {
  name: 'MainTop',
  data: () => ({
      isActive: false,
  }),
}
</script>