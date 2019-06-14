
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import basic from '../views/store/basic'
import atten from '../views/store/atten'

export default new Vuex.Store({
  modules:{ basic ,atten },
  strict:false
})
