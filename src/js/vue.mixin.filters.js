

import Vue from 'vue'
Vue.mixin( {
  filters:{
    str_name(value){
      return value + '123456'
    },
    num_str(value){
      console.log(value)
      return Utils.SectionToChinese(value)
    }
  },

});
