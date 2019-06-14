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
    props:{
      options:{
        type:Array,
        default:()=>{
          return []
        }
      },
      value:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    computed:{
      checkItems(){

          let arr = [];
          this.options.forEach((item,i)=>{
            let obj  =  {};
            if(this.checkIndex.indexOf(i) > -1 ){
              obj =  Object.assign(item,{ active:true });
            }else{
              obj = Object.assign(item,{ active:false });
            }
            arr.push(obj)
          });
          return arr ;

      }
    },
    data(){
      return {
        currentValue:[],
        checkIndex:[]
      }
    },
    methods: {
      async _init_page(){

      },
      _check_box(index){
        let activeIndex = this.checkIndex.indexOf(index) ;
        console.log(activeIndex)
        if( activeIndex > -1){
          this.checkIndex.splice(activeIndex,1)
        }else{
          this.checkIndex.push(index)
        }
        console.log(this.checkIndex)
        //let arr = Arrays.filter(this.checkItems,(item)=>{ return !!item.active });
        //this.$emit('select',arr)
      }

    },
    watch: {

    },
    destroy(){
    }
  }
</script>
<template>
  <div class="va-checkbox">
    <div class="va-checkbox__item" :class="{'va-checkbox__item--normal' : !item.active,'va-checkbox__item--active':item.active }"  v-for="(item,index) in checkItems"  @click="_check_box(index)"> {{ item['text'] }}</div>
  </div>
</template>
<style scoped></style>
