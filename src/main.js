
import Vue from 'vue'
import App from './App'
import router from './js/vue.router'
import store from './views/store'

//************************************************ vue 通用方法 *******************************************************/
import './js.utils/app.libs.js'
import   './js/vue.prototype.js'
import   './js/vue.config.js'
import   './js/vue.mixin.data.js'
import   './js/vue.mixin.filters.js'
import   './js/vue.mixin.methods.js'
import   './js/vue.mixin.route.js'
import   './js/vue.plugin.js'

Vue.config.productionTip = false;
import "./css/merge.css";
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
