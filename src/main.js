import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import VModal from 'vue-js-modal'
import VueSocialSharing from 'vue-social-sharing'
import Globalfunctions from '../public/js/Globalfunctions.js'
import Galleryfunctions from '../public/js/Galleryfunctions.js'

import '../public/css/dmyimportcss.css' // CSSのmain.jsでの読み込み実験 成功


/* FonaAwesomeをインストール */
/* npmでは無料分のアイコンをインストール済み */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)
/* 使用するアイコンをインストール */
/* fasは全てのアイコンをインストールする指定 容量が重くなるデメリットがある？ */
library.add( fas )
import { fas } from '@fortawesome/free-solid-svg-icons'


/* VueSwiperをインストール */


Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VueSocialSharing);
Vue.mixin(Globalfunctions)
Vue.mixin(Galleryfunctions)

new Vue({
  /*css,*/
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
