// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VModal from 'vue-js-modal'
import { store } from './store'
import wysiwyg from 'vue-wysiwyg'

import "vue-wysiwyg/dist/vueWysiwyg.css"

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(wysiwyg, {})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

