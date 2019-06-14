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
    },
    mounted(){

    },
    activated(){
    },
    props:{
      options:{
        type:Array,
        default:()=>{
          return []
        }
      },
      value:{
        type:Number
      },
    },
    data(){
      return {
        currentValue:''
      }
    },
    methods: {
      _change_tab(index){
        this.currentValue = index
      }
    },
    watch: {
      'value': {
        handler(val, olval){
          this.currentValue = val;
          window.scrollTo(0,0)
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
  <div class="va-btn-group">
    <div class="va-btn" v-for="(item,index) in options" @click="_change_tab(index)" :class="{'active': index == currentValue  }" >
       {{ item.text }}
    </div>
  </div>
</template>
<style scoped></style>
