<template>
	<div>
		<transition name="vfade">
			<GalleryGallerymodal  v-show="modalscreen" :list="list" :difil="difil" @illustselect="illustselect" @differenceselect="differenceselect" @screenclose="screenclose" :seldes="seldes" :sellinktxt="sellinktxt" :sellinksrc="sellinksrc" @modalfuncopen="modalfuncopen" @modalfuncclose="modalfuncclose"/>
		</transition>
		<section id="Illust" class="section-2 sa">
			<h2 class="font-E3 text-center scroll-fadein index-anime"><span>Illust</span></h2>
			<VerticalLine />
			<div class="display-flex">
				<div class="width95">
					<div class="space-around sa sa--up">
						<div class="il-1 flex-lower-right hover-flash" @click="screenopen(1)" v-bind:class="list[1].thumclass" v-show="list[1].active" v-bind:data-sa_delay="index * 1000">
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
	</div>
</template>

<script>
import VerticalLine from '../VerticalLine.vue'
import GalleryGallerymodal from '../Gallery_components/Gallery_gallerymodal.vue'

export default {
  name: 'MainIllust',
  components: {
		VerticalLine,
		GalleryGallerymodal,
  },
  data: () => ({
      isActive: false,
      list : [
			{
				title:"イラスト1 男の子 女の子 複数人", 
				thumclass:["bgil-1"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト1、男の子、女の子、複数人.png'),
				difsrc:[],
				tag:["男の子", "女の子","複数人", "rating=a"], active: true,
				description:'ナントカさんで描かせていただいたタペストリーのイラストです。CUFF様にて通販委託中です。',
				linktext: 'CUFF様通販SHOP', linksrc: 'https://9-nine-project.com/special/',
			},
			{
				title:"イラスト2 男の子 ヤンキー 複数人", 
				thumclass:["bgil-2"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト2、男の子、複数人、ヤンキー.png'),
				difsrc:[],
				tag:["男の子", "ヤンキー","複数人", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト3 女の子", 
				thumclass:["bgil-3"], differenceses:["bgil-3-2"], 
				src: require('../../uploads/illustrations/イラスト3、女の子.png'),
				difsrc:[require('../../uploads/illustrations/イラスト3-2、女の子.png')],
				tag:["女の子", "rating=a"], active: true,
				description:'商品説明みたいな感じ',
				linktext: 'Amazon', linksrc: 'https://9-nine-project.com/special/',
			},
			{
				title:"イラスト4 女の子 !特殊", 
				thumclass:["bgil-4"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト4、女の子、特殊.png'),
				difsrc:[],
				tag:["女の子", "rating=r18"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト5 女の子", 
				thumclass:["bgil-5"], differenceses:["bgil-5-2","bgil-5-3"], 
				src: require('../../uploads/illustrations/イラスト5、女の子、男の子.png'),
				difsrc:[require('../../uploads/illustrations/イラスト5-2、女の子、男の子.png'),
						require('../../uploads/illustrations/イラスト5-3、女の子、男の子.png')],
				tag:["女の子", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト6 女の子 複数人", 
				thumclass:["bgil-6"], differenceses:[], 
				src: require('../../uploads/illustrations/イラスト６、女の子、複数人.png'),
				difsrc:[],
				tag:["女の子","複数人", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
		],
		difil: [],
		difilsrc: [],
		seldes: '',
		sellinktxt: '',
		sellinksrc: '',
		rating: false,
		activetag: [],
		alltags: ["男の子","女の子","複数人","ヤンキー",],
		modalscreen: false,
		overflowyhide: false,
  }),
  updated: function () {
		this.indexanime()
		this.scrollanime_js()
		this.tweet()
  },
}
</script>