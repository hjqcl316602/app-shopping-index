
import Vue from 'vue'


import App from './App'
import router from './js/vue.router'
import store from './js/vuex.index'
//************************************************ vue初始化项目 工具类*******************************************************/
import './js.utils/utils.rem'

//************************************************ vue 原型方法 *******************************************************/
import MyApp from './js/vue.app.merge'
Vue.use(MyApp);

//************************************************ vue 自定义组件 *******************************************************/
import * as mixins  from './Mixins'
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key])
});

//************************************************ vue 第三方组件 *******************************************************/
/*
import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
*/
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';
import vuescrollopt from './js.utils/vue.scroll'
Vue.use(vuescroll,{ ops:vuescrollopt  });


//************************************************ vue 编程式组件的绑定 *******************************************************/
///import createPlugin from './js/create.api';
//import { MyConfirm ,MyLoading   } from './components'
//createPlugin(Vue, MyConfirm, ['cancel', 'ok'], true);
//createPlugin(Vue, MyLoading, ['click'], true); // this.$createLoading().show()
/*使用方法
this.$createConfirm({
  title:'',
  message:'sdsd',
  onOk:()=>{
    console.log('ok')
  }
}).show();*/

//************************************************ vant-ui *******************************************************/
//import 'vant/lib/vant-css/index.css';
//import { Tab, Tabs ,Rate , Field , Picker , Popup , Toast , Switch , Dialog , List , PullRefresh   } from 'vant';
//Vue.use(Tab).use(Tabs).use(Rate).use(Field).use(Picker).use(Popup).use(Toast).use(Switch).use(Dialog).use(List).use(PullRefresh);


//************************************************ vue 自定义组件 *******************************************************/
import *  as  components  from './components'
Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
