<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  //import basic  from '../Mixin/basic'\
  //import { VaPopupRadio }  from './component'
  //import manager  from './mixin/manager'
  export default {
    name: "Admission",
    components: {},
    mixins: [],
    beforeRouteEnter(to, from, next) {
      next(vm => {
      })
    },
    beforeRouteLeave(to, from, next) {
      next();
    },
    beforeRouteUpdate(to, from, next) {
      next();
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {

    },
    mounted() {
      //this._init_page()
    },
    activated() {
    },
    computed:{
      message(){
        return this.$store.state.admission['message']
      }
    },
    data() {
      return {

      }
    },
    methods: {
      async _init_page() {
        this.$nextTick(() => {
          let that = this;
          // 使用swiper进行页面滑动时，一定注意要给 swiper-container  设置一个高度
          let swipe  = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',//不定宽 或 高
            freeMode: true,
            centeredSlides: false,
            autoHeight:'auto',
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            mousewheel: true,
            on:{
              'slideChange':function(e){
              }
            }
          });
        });
      }

    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy() {
    }
  }
</script>
<template>
  <div class=" vi-admission">
    <div class="vi-message vc-fluid--h-min  vc-bg  vc-padding__lg " v-for="(item,index) in message">
      <div class="vc-flex--center vi-admission--page">
        <div class="vc-padding__lg vc-cover--w ">
          <div class="vi-message--title vc-text--white "><span class="vc-bg--theme">{{ item['title'] }}</span></div>
          <div class=" ">
            <div class="vi-message--text vc-margin--bm" v-for="(text,i) in item['text']">{{ text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="  vi-qrcode vc-fluid--h-min vc-bg vc-padding__lg--ud vc-text--center" >
      <img src="../img/code.jpg" alt="">
    </div>

  </div>
</template>
<style scoped>
  .swiper-container {
    height: 100vh;
  }

  .vi-admission{  }
  .vi-admission--page { border:0px solid #999; min-height: calc( 100vh - 40px ) ; box-shadow:  0 0 3px rgba(0,0,0,.4)}

  .vi-message--title{ text-align: center ; padding: 40px;}
  .vi-message--title span{ font-size: 20px ;  font-weight: 800 ;  position: relative ; padding: 0px 30px 0 12px; display: inline-block;height:36px;line-height: 36px; }
  .vi-message--title span:after{ content: ' ' ; position: absolute  ; bottom : 0 ; right:0; height:0;width:0;
    border-style: solid;border-width: 18px;border-bottom-color: transparent ; border-right-color: #fff ; border-top-color: transparent ; border-left-color: transparent ;  }

  .vi-message--title span:before{ content: ' ' ; position: absolute  ; bottom : 0 ; left:-36px; height:0;width:0;
    border-style: solid;border-width: 18px;border-bottom-color: transparent ; border-right-color:#1c83e3  ; border-top-color: transparent ; border-left-color: transparent ;  }
  .vi-message--text { line-height:  1.8 ; text-indent: 36px; font-size: 16px;}

  .vi-qrcode img{ display: inline-block ; width: 70% ; }
</style>
