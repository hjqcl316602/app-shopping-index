<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'
  export default {
    name: "",
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
    props: {
      size:{
        type:String,
        default:'max'
      },
      align:{
        type:String,   // 按最大边100%占并居中 max 按最小边100%占并居中 min
        default:'center'
      },
      src:{
        type:String,
        default:''
      },
      alt:{
        type:String,
        default:''
      },
      title:{
        type:String,
        default:''
      },
    },
    data(){
      return {}
    },
    methods: {
      async _init_page(){

      },
      _img_load(e){
        let imgBoxWidth = this.$refs['img-box'].offsetWidth;
        let imgBoxHeight = this.$refs['img-box'].offsetHeight;
        let imgHeight = e.target.height;
        let imgWidth = e.target.width;
        let imgBoxProp = imgBoxWidth / imgBoxHeight;
        let imgProp = imgWidth / imgHeight;
        if(imgProp >= imgBoxProp ){
          e.target.style.height = imgBoxHeight + 'px';
        }else{
          e.target.style.width = imgBoxWidth + 'px';
        }
      },
    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
<div class="va-img">
  <template v-if="size == 'min'">
    <img :src="src" :alt="alt" :title="title" @load="_img_load($event)" :class="{'va-img--center':align == 'center'}">
  </template>
  <template v-if="size == 'max'" >
    <img :src="src" :alt="alt" :title="title" class="va-img--max" :class="{'va-img--center':align == 'center'}">
  </template>
</div>
</template>
<style scoped></style>
