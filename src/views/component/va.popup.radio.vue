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
      options:{
        type:Array,
        default:()=>{
          return []
        }
      },
      value:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        currentValue:false
      }
    },
    methods: {
      async _init_page(){

      },
      _select_radio(item){
        this.currentValue = false;
        this.$emit('select',item)
      }
    },
    watch: {
      'value': {
        handler(val, olval){
          this.currentValue = val;
        },
        deep: true,
        immediate:true
      },
      currentValue(val){
        this.$emit('input',val)
      },
    },
    destroy(){
    }
  }
</script>
<template>


  <div class="va-popup-radio">
    <van-popup v-model="currentValue" position="bottom">
      <div class="va-popup-radio__content">
        <div class="va-radio__item vc-border--bm" v-for="(item,index) in options" @click="_select_radio(item)"> {{ item['text'] }} </div>
        <div class=" va-radio__item va-radio__item--cancel " @click="currentValue = false ">取消</div>
      </div>

    </van-popup>
  </div>


</template>
<style scoped>

</style>
