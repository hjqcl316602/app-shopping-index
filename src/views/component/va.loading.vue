<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'
  export default {
    name: "loading",
    components: {},
    mixins: [],
    beforeRouteEnter (to, from, next) {
      next(vm=> {
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
      this._init_page()
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
      async _init_page(){

      },
      hide(){
        this.isShow = false;
      },
      show(){
        this.isShow = true;
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <van-popup v-model="isShow" :close-on-click-overlay="false">
    <van-loading color="white" size="50px"></van-loading>
  </van-popup>
</template>
<style scoped>
  .van-popup{ background-color: transparent;overflow: hidden }
</style>
