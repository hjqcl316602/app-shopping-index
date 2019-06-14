
<!--// 使用v-if 才能有离开动画 v-show没有离开动画-->
<template>

  <van-popup v-model="isShow">
    <app-spin type="lines" size="40px"> </app-spin>
  </van-popup>



</template>

<script type="text/ecmascript-6">
  export default {
    name:"loading",
    components: {},
    beforeRouteEnter (to, from, next) {
      //document.title = '搜索结果';
      next(vm=> {
        //console.log(vm);
      })
    },
    beforeRouteLeave(to, from, next){
      next();
    },
    beforeRouteUpdate (to, from, next) {
      next();
    },
    beforeCreate(){
    },
    created(){
    },
    beforeMount(){
    },
    mounted(){
    },
    activated(){
    },
    props: [],
    data(){
      return {
        isShow:false
      }
    },
    methods: {
      hide(){
        this.isShow = false;
      },
      show(){
        this.isShow = true;
      }
    },
    watch: {

      'isShow': {
        handler(val, olval){

        },
        deep: true,
      }
    }
  }
</script>

<style scoped>
</style>
