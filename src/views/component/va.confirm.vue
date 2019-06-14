<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  export default {
    name: "confirm",
    components: {},
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
    props: {
      value:{
        type:Boolean,
        default:false
      },
      okText:{
        type:String,
        default:'确认'
      },
      cancelText:{
        type:String,
        default:'取消'
      },
      title:{
        type:String,
      },
      content:{
        type:String,
        default:''
      },
      btn:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        currentValue:false
      }
    },
    methods: {
      ok(){
        this.currentValue = false;
        this.$emit('ok')
      },
      cancel(){
        this.currentValue = false;
        this.$emit('cancel')
      },
      show(){
        this.currentValue = true;
      },
      hide(){
        this.currentValue = false;
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
  <div class="va-confirm">
    <van-popup v-model="currentValue" :close-on-click-overlay="false"  >
      <div class="va-confirm__panel" >
        <slot name="title" >
          <div class="va-confirm__title" v-if="title">{{ title }}</div>
        </slot>
        <div class="va-confirm__body">
          <slot name="content" >
            <div class="va-confirm__content" v-if="content">{{ content }}</div>
          </slot>
        </div>
        <slot name="btn" >
          <div class="va-confirm__btn--group vc-border--tp">
            <div class="va-confirm__btn va-confirm__btn--cancel vc-border--rt"  @click="ok" v-if="btn">{{ cancelText }}</div>
            <div class="va-confirm__btn"  @click="ok" v-if="btn">{{ okText }}</div>
          </div>
        </slot>
      </div>
    </van-popup>
  </div>
</template>
<style scoped>
  .van-popup{ background-color: transparent ;}
</style>
