/**
 * Created by 41587 on 2018/9/9.
 */

import Vue from 'vue'

Vue.mixin( {
  data(){
    return {

      popup:{
        show:false
      },
      popups:{['0']:false,['1']:false,['2']:false,['3']:false,['4']:false,['5']:false,['6']:false,['7']:false,['8']:false, }
      // 此处不能为数组，页面中修改之后不能起到效果
    }
  },
  beforeRouteEnter(to, from, next) {

    let keepAliveRoutes = to.meta['keepAliveRoutes'] || []; // 先设置一个数组，该页面的来自的页面后需要缓存的页面记录下来
    let fromName = from.name ;
    if(  keepAliveRoutes.indexOf(fromName) > -1 && Object.getOwnPropertyNames(to.meta).indexOf('noLoading') > -1){
       to.meta.noLoading = true
    }else{
      to.meta.noLoading  = false
    }
    next()
  },
  beforeRouteLeave(to,from,next){
    let that = this;

    // this.$dialog.close();

    // 判断是否有弹框，有弹框则将弹框关闭
    let bool = function(){
      let arr = Object.keys(that.popups) ;
      for(let n = 0 ; n < arr.length;n++){
        if(that.popups[arr[n]]){
          return true
        }
      }
      return false ;
    }();
    if( bool || this.popup.show){
      let arr = Object.keys(that.popups) ;
      for(let n = 0 ; n < arr.length;n++){
         that.popups[arr[n]] = false
      }
      this.popup.show = false
      next(false)
    }else{
      next()
    }
  },

});


