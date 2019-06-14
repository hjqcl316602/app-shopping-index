/**
 * Created by 41587 on 2018/8/14.
 */

export default {
  state:{
    isLogin:false
  },

  mutations:{
    ['set_login'](state,status){
      state.isLogin = status
    },

  }
}
