
import Vue from 'vue'

import * as $configs from './vue.config'

Vue.use({
  install: function (Vue) {

    Object.defineProperty( Vue.prototype,'$configs', { value : $configs } );
  }
});
