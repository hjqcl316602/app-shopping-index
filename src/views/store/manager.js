/**
 * Created by 41587 on 2018/9/13.
 */
/**
 * Created by 41587 on 2018/9/11.
 */
export default {
  state:{
    attenList:[],
    discList:[]
  },

  mutations:{
    ['get_atten_list'](state,data){
      state.attenList = data
    },
    ['set_atten_select'](state,index){
      state.attenList[index]['active'] = !state.attenList[index]['active'] ;
    },
    ['get_disc_list'](state,data){
      state.discList = data
    },
    ['set_disc_select'](state,index){
      state.discList[index]['active'] = !state.discList[index]['active'] ;
    },
  }
}
