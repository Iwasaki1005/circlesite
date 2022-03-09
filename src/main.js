import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import VModal from 'vue-js-modal'
import VueSocialSharing from 'vue-social-sharing'
import Globalfunctions from '../public/js/Globalfunctions.js'
import Galleryfunctions from '../public/js/Galleryfunctions.js'
/*import css from '../public/css/scrollbar.css'*/



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
