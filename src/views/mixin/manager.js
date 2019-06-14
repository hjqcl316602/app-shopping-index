

export default {
  data(){
    return {
      atten:{
        pageSize:10,
        pageNum:1,
        loading:false,
        push:{
          finished:true,
          loading:false
        }
      },
      disc:{
        pageSize:10,
        pageNum:1,
        loading:false,
        push:{
          finished:true,
          loading:false
        }
      }
    }
  },
  methods:{
    // 获取考勤列表
    $get_atten_list(loading=false){
      return new Promise((resovle,reject)=>{

        let list = [
          { name :'黄军泉',active:false},
          { name :'黄军泉2',active:false},
          { name :'黄军泉3',active:false},
          { name :'黄军泉4',active:false},
          { name :'黄军泉5',active:false},
          { name :'黄军泉6',active:false},
          { name :'黄军泉7',active:false},
          { name :'黄军泉8',active:false},
          { name :'黄军泉9',active:false},
          { name :'黄军泉10',active:false},
          { name :'黄军泉11',active:false},
          { name :'黄军泉12',active:false},
        ];
        this.$store.commit('get_atten_list',list);

        resovle();
        /*this.$request({
          url:this.API.GETQRCODE,
          loading:loading,
          data:{
            fromUser:fromUser
          }
        }).then((reponse)=>{

          resovle(reponse)
        },(error)=>{
          reject(error)
        })*/
      })
    },
    // 获取纪律列表
    $get_disc_list(loading=false){
      return new Promise((resovle,reject)=>{

        let list = [
          { name :'黄军泉', status:'0',active:false},
          { name :'黄军泉2', status:'0',active:false},
          { name :'黄军泉3', status:'0',active:false},
          { name :'黄军泉4', status:'0',active:false},
          { name :'黄军泉5', status:'1',active:false},
          { name :'黄军泉6', status:'0',active:false},
          { name :'黄军泉7', status:'2',active:false},
          { name :'黄军泉8', status:'0',active:false},
          { name :'黄军泉9', status:'0',active:false},
          { name :'黄军泉10', status:'2',active:false},
          { name :'黄军泉11', status:'0',active:false},
          { name :'黄军泉12', status:'0',active:false},
        ];
        this.$store.commit('get_disc_list',list);

        resovle();
        /*this.$request({
         url:this.API.GETQRCODE,
         loading:loading,
         data:{
         fromUser:fromUser
         }
         }).then((reponse)=>{

         resovle(reponse)
         },(error)=>{
         reject(error)
         })*/
      })
    },

  }

}
