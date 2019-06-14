import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import basic from './basic';
import manager from './manager';
import admission from './admission';

export default new Vuex.Store({
  modules:{ basic,manager,admission },
  strict:false
})
