<template>
	<section id="Gallery" class="section">
		<transition name="vfade">
			<GalleryGallerymodal  v-show="modalscreen" :list="list" :difil="difil" @illustselect="illustselect" @differenceselect="differenceselect" @screenclose="screenclose" :seldes="seldes" :sellinktxt="sellinktxt" :sellinksrc="sellinksrc"/>
		</transition>
		<v-breadcrumbs :items="breadcrumbs" divider=">"></v-breadcrumbs>
		<h2 class="font-E3 text-center"><span>Gallery</span></h2>
		<div class="vertical-line center sa sa--up"></div>
		<div class="bt-typeA bt-typeA-border d-block center m-bottom-2rem">
			<span class="bt-typeA-border-inner font-E1">PDF Download</span>
		</div>
		<!-- ここからイラスト一覧 -->
		<GalleryIllustrations :list="list" :activetag="activetag" :alltags="alltags" @addtag="addtag" @removetag="removetag" @tagallremove="tagallremove" @ratingswitch="ratingswitch"  v-model="rating" @screenopen="screenopen"/>
	</section>
</template>

<script>
import GalleryIllustrations from '../components/Gallery_components/Gallery_illustrations.vue'
import GalleryGallerymodal from '../components/Gallery_components/Gallery_gallerymodal.vue'


export default {
	name: 'Page_Gallery',
	components: {
		GalleryIllustrations,
		GalleryGallerymodal,
	},
	mounted: function() {
		this.scrollanime_js()
	},
	methods: {
		illustselect: function (column) {
			const screen = document.getElementById('screen');
			/* データに差分いらすとのクラスを入れる */
			this.difil = (column.differenceses);
			/* データに差分いらすとのsrcを入れる */
			this.difilsrc = (column.difsrc);
			/* データに説明文のテキストを入れる */
			this.seldes = (column.description);
			/* データにリンクのデータを入れる */
			this.sellinktxt = (column.linktext);
			this.sellinksrc = (column.linksrc);
			/* 画像のsrcを書き換え */
			screen.setAttribute('src', column.src);
			/* リストスクロール */
			var illustlist = document.getElementById('illust-list')
			var element = document.getElementById(column.thumclass);
			var rect = element.getBoundingClientRect();
			var eletop = rect.top;
			var innerWidth = window.innerWidth;
			var vw02 = innerWidth * 0.02;
			var position = eletop - vw02;
			illustlist.scrollBy({
				top: position,
				behavior: 'smooth',
			});
			/* 選択中のframeのクラスを追加*/
				/* 関係のないものからクラス削除 */
				var removeselect = document.getElementsByClassName('illust-list-icon')
				Array.prototype.forEach.call(removeselect, function (element) {
					element.classList.remove("illust-list-icon-select");
				});
				/* 該当のやつにクラス追加 */
				element.classList.add('illust-list-icon-select')
			/* ここまで */
		},
		differenceselect : function (index,column) {
			const screen = document.getElementById('screen');
			/* 画像のsrcを書き換え */
			screen.setAttribute('src', this.difilsrc[index]);
			/* 選択中のframeのクラスを追加*/
				/* 関係のないものからクラス削除 */
				var removeselect = document.getElementsByClassName('illust-list-icon')
				Array.prototype.forEach.call(removeselect, function (element) {
					element.classList.remove("illust-list-icon-select");
				});
				/* 該当のやつにクラス追加 */
				var defeleadd = document.getElementById(column);
				defeleadd.classList.add('illust-list-icon-select')
			/* ここまで */
		},
		screenopen: function (index) {
			this.modalscreen = true;
			const screen = document.getElementById('screen');
			this.difil = (this.list[index].differenceses);
			/* データに差分いらすとのsrcを入れる */
			this.difilsrc = (this.list[index].difsrc);
			/* データに説明文のテキストを入れる */
			this.seldes = (this.list[index].description);
			/* データにリンクのデータを入れる */
			this.sellinktxt = (this.list[index].linktext);
			this.sellinksrc = (this.list[index].linksrc);
			/* 画像のsrcを書き換え */
			screen.setAttribute('src', this.list[index].src);
			/* リストスクロール */
			setTimeout(() => {
				var illustlist = document.getElementById('illust-list')
				var element = document.getElementById(this.list[index].thumclass);
				var rect = element.getBoundingClientRect();
				var eletop = rect.top;
				var innerWidth = window.innerWidth;
				var vw02 = innerWidth * 0.02;
				var position = eletop - vw02;
				illustlist.scrollBy({
					top: position,
					behavior: 'smooth',
				});
			}, 50)

			// 再宣言
			var element = document.getElementById(this.list[index].thumclass);
			/* 選択中のframeのクラスを追加*/
				/* 関係のないものからクラス削除 */
				var removeselect = document.getElementsByClassName('illust-list-icon')
				Array.prototype.forEach.call(removeselect, function (element) {
					element.classList.remove("illust-list-icon-select");
				});
				/* 該当のやつにクラス追加 */
				element.classList.add('illust-list-icon-select')
			/* ここまで */
		},
		screenclose: function () {
			this.modalscreen = false;
		},
		addtag : function (column) {
			this.activetag.push(column)
			this.filter()
		},
		removetag : function (column) {
			let targettag = column
			let activetagcall = this.activetag
			let passindex = activetagcall.findIndex(element => element === targettag);
			this.activetag.splice( passindex, 1 );
			this.filter()
		},
		tagallremove : function() {
			this.activetag.splice(0, this.activetag.length)
			this.filter()
		},
		filter : function () {
			//全写真の分だけforループで消すか否かの判定を行う
			for (let i = 0; i < this.list.length; i++) {
				//該当写真毎に行う処理//
				//☆Step1 activeになっているタグ一覧を確認
				const decisiontag = this.activetag;
				const certaintags = decisiontag.filter((n)=> {
					//☆Step2 該当する写真のタグをデータから取り込む
					const altertags = this.list[i].tag;
						if(altertags.indexOf(n) == -1) {
							return n;
						}
					}
				);
				//☆ はずれタグが無い場合の処理
				if (typeof certaintags === "undefined" || certaintags.length === 0) {
					if (this.list[i].active == false) {
						this.list[i].active = true;
					}
				}
				else {
					this.list[i].active = false;
				}
			}
		},
		ratingswitch : function () {
			if (this.rating == false) {
				this.activetag.push('rating=a')
				this.filter()
			}
			else {
				let targettag = 'rating=a'
				let activetagcall = this.activetag
				let passindex = activetagcall.findIndex(element => element === targettag);
				this.activetag.splice( passindex, 1 );
				this.filter()
			}
		},
	},
	data: () => ({
		breadcrumbs: [
			{
				text: 'Home',
				disabled: false,
				to: '/',
			},
			{
				text: 'Gallery',
				disabled: false,
				href: '',
			},
		],
		list : [
			{
				title:"イラスト1 男の子 女の子 複数人", 
				thumclass:["bgil-1"], differenceses:[], 
				src: require('../uploads/illustrations/イラスト1、男の子、女の子、複数人.png'),
				difsrc:[],
				tag:["男の子", "女の子","複数人", "rating=a"], active: true,
				description:'ナントカさんで描かせていただいたタペストリーのイラストです。CUFF様にて通販委託中です。',
				linktext: 'CUFF様通販SHOP', linksrc: 'https://9-nine-project.com/special/',
			},
			{
				title:"イラスト2 男の子 ヤンキー 複数人", 
				thumclass:["bgil-2"], differenceses:[], 
				src: require('../uploads/illustrations/イラスト2、男の子、複数人、ヤンキー.png'),
				difsrc:[],
				tag:["男の子", "ヤンキー","複数人", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト3 女の子", 
				thumclass:["bgil-3"], differenceses:["bgil-3-2"], 
				src: require('../uploads/illustrations/イラスト3、女の子.png'),
				difsrc:[require('../uploads/illustrations/イラスト3-2、女の子.png')],
				tag:["女の子", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト4 女の子 !特殊", 
				thumclass:["bgil-4"], differenceses:[], 
				src: require('../uploads/illustrations/イラスト4、女の子、特殊.png'),
				difsrc:[],
				tag:["女の子", "rating=r18"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト5 女の子", 
				thumclass:["bgil-5"], differenceses:["bgil-5-2","bgil-5-3"], 
				src: require('../uploads/illustrations/イラスト5、女の子、男の子.png'),
				difsrc:[require('../uploads/illustrations/イラスト5-2、女の子、男の子.png'),
						require('../uploads/illustrations/イラスト5-3、女の子、男の子.png')],
				tag:["女の子", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト6 女の子 複数人", 
				thumclass:["bgil-6"], differenceses:[], 
				src: require('../uploads/illustrations/イラスト６、女の子、複数人.png'),
				difsrc:[],
				tag:["女の子","複数人", "rating=a"], active: true,
				description:'',
				linktext: '', linksrc: '',
			},
			{
				title:"イラスト7 男の子", 
				thumclass:["bgil-7"], differenceses:[], 
				src: require('../uploads/illustrations/イラスト７、男の子.png'),
				difsrc:[],
				tag:["男の子", "rating=a"], active: true,
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
	}),
}
</script>

<style>
input[type="checkbox"] {
	position: relative;
	width: 2.24vw;
	height: 1.12vw;
	-webkit-appearance: none;
	background: linear-gradient(0deg, #fafafa00, #fafafa00);
	outline: none;
	border-radius: 1.12vw;
	box-shadow: 0 0 0 0.12vw #e7b06c, inset 0 0 0 #e7b06c;
}

input:checked[type="checkbox"] {
	background: linear-gradient(0deg, #e7b06c, #e7b06c);
	background-color: #e7b06c;
}

input[type="checkbox"]:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 1.12vw;
	height: 1.12vw;
	background: linear-gradient(0deg, #fafafa, #fafafa);
	border-radius: 0.56vw;
	box-shadow: 0 0 0 0.1vw #e7b06c;
	transform: scale(.98, .96);
	transition: .5s;
}

input:checked[type="checkbox"]:before {
	left: 1.12vw;
}

input[type="checkbox"]:after {
	content: '';
	position: absolute;
	top: calc(50% - 0.12vw);
	left: 0.6vw;
	width: 0.3vw;
	height: 0.3vw;
	background: linear-gradient(0deg, #9b9b9b, #9b9b9b);
	border-radius: 50%;
	transition: .5s;
}

input:checked[type="checkbox"]:after {
	background: #e7b06c;
	left: 1.72vw;
	box-shadow: 0 0 1.2vw #f3cd9e, 0 0 2vw #f3cd9e,
}

.illust-div {
	width: 16vw;
	height: 16vw;
	border: 0.1vw solid #e7b06c;
	border-radius: 1vw;
	margin: 1vw;
}

.bgil-1 {
	background-image: url(../uploads/illustrations/イラスト1、男の子、女の子、複数人.png);
	background-position: center;
}

.bgil-2 {
	background-image: url(../uploads/illustrations/イラスト2、男の子、複数人、ヤンキー.png);
	background-position: center;
}

.bgil-3-2 {
	background-image: url(../uploads/illustrations/イラスト3-2、女の子.png);
	background-position: center;
}

.bgil-3 {
	background-image: url(../uploads/illustrations/イラスト3、女の子.png);
	background-position: center;
}

.bgil-4 {
	background-image: url(../uploads/illustrations/イラスト4、女の子、特殊.png);
	background-position: center;
}

.bgil-5 {
	background-image: url(../uploads/illustrations/イラスト5、女の子、男の子.png);
	background-position: center;
}

.bgil-5-2 {
	background-image: url(../uploads/illustrations/イラスト5-2、女の子、男の子.png);
	background-position: center;
}

.bgil-5-3 {
	background-image: url(../uploads/illustrations/イラスト5-3、女の子、男の子.png);
	background-position: center;
}

.bgil-6 {
	background-image: url(../uploads/illustrations/イラスト６、女の子、複数人.png);
	background-position: center;
}

.bgil-7 {
	background-image: url(../uploads/illustrations/イラスト７、男の子.png);
	background-position: center;
}

.vfade-enter-active, .vfade-leave-active{
    transition: opacity 0.5s
}

.vfade-enter, .vfade-leave-to{
    opacity: 0;
}
</style>