import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import VModal from 'vue-js-modal'
import Globalfunctions from '../public/js/Globalfunctions.js'
/*import css from '../public/css/scrollbar.css'*/


Vue.config.productionTip = false
Vue.use(VModal);
Vue.mixin(Globalfunctions)

new Vue({
  /*css,*/
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
