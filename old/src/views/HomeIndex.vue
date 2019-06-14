<script type="text/ecmascript-6">
  //import Header  from './components/header.vue'
  export default {
    name: "",
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
      this.$nextTick(()=>{
        this.$doms.onScroll(this.scrollModal)
      })
    },
    activated(){
    },
    props: [],
    data(){
      return {
        active:false
      }
    },
    methods: {
      scrollModal(){
        let  t =document.documentElement.scrollTop||document.body.scrollTop;
        let winH = this.$doms.getWindowOffset().winHeight;
        let offsetTop = this.$el.getElementsByClassName('vi-modal--01')[0].offsetTop;

        if( t > (offsetTop - winH + 150 )){
          this.active = true
        }else{
          this.active = false
        }
      }
    },
    watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
    destroy(){
    }
  }
</script>
<template>
  <div class="vi-home-index">
    <div class="vi-page__top"></div>
    <div class="vi-page__site">
      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">共享平台解决方案</div>
          <div class="title--sub">为分销运营量身打造，面向未来的战略转型方案</div>
        </div>
        <div class="vi-modal__site vc-flex vc-content--between">
          <div class="vi-modal__specie vi-modal--01"  :class="{'active':active }"  >
            <h1 class="vc-text--dark vc-text--bold  vc-text--center vc-margin--ud">体验升级</h1>
            <div class="vc-text--light vc-text__baseline--md">是基于朋友圈，以打造分销商为中心的全新微信分销体验</div>
          </div>
          <div class="vi-modal__specie vi-modal--01" :class="{'active':active }">
            <h1 class="vc-text--dark vc-text--bold  vc-text--center vc-margin--ud">分佣运营</h1>
            <div class="vc-text--light vc-text__baseline--md">代理商实时有效的获取朋友流量并快速分享购买分佣，以达到提高销售的运营模式</div>
          </div>
          <div class="vi-modal__specie vi-modal--01" :class="{'active':active }" >
            <h1 class="vc-text--dark vc-text--bold  vc-text--center vc-margin--ud">线上机制</h1>
            <div class="vc-text--light vc-text__baseline--md">适合纯线上无线端商城或多级分销团队分佣机制，支持独立域名，不限分销数量</div>
          </div>
        </div>
      </div>

      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">核心优势</div>
          <div class="title--sub">为分销运营量身打造，面向未来的战略转型方案</div>
        </div>
        <div class="vi-modal__site vc-flex vc-content--between">
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark vc-text--center vc-margin--ud vc-text--bold">众创平台</h1>
            <div class="vc-text--light vc-text__baseline--md">为分销运营量身打造，面向未来的战略转型方案</div>
          </div>
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark vc-text--center vc-margin--ud vc-text--bold">智能合约</h1>
            <div class="vc-text--light vc-text__baseline--md">所有分配制度由程序自动执行，公开透明，多劳多得。例如渠道销售比普通客户获得价值高，不同渠道销售 根据团队销售额所处阶段获得不同比例的红利</div>
          </div>
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark vc-text--center vc-margin--ud vc-text--bold">品牌直销</h1>
            <div class="vc-text--light vc-text__baseline--md">品牌入驻0费用，提供基于区块链的溯源系统，保护品牌权益，杜绝假冒。提供基于区块链的评价系统，真实不可篡改。</div>
          </div>
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark vc-text--center vc-margin--ud vc-text--bold">持续收益</h1>
            <div class="vc-text--light vc-text__baseline--md">平台股权份额固定不可篡改，无法被稀释，平台贡献者可获得平台持续的成长收益</div>
          </div>
        </div>
      </div>

      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">平台渠道种类</div>
          <div class="title--sub">为分销运营量身打造，面向未来的战略转型方案</div>
        </div>
        <div class="vi-modal__site vc-flex--between-center">
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark ">众创平台</h1>
            <div class="vc-text--light vc-text__baseline--md">为分销运营量身打造，面向未来的战略转型方案</div>
          </div>
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark ">智能合约</h1>
            <div class="vc-text--light vc-text__baseline--md">所有分配制度由程序自动执行，公开透明，多劳多得。例如渠道销售比普通客户获得价值高，不同渠道销售 根据团队销售额所处阶段获得不同比例的红利</div>
          </div>
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark ">品牌直销</h1>
            <div class="vc-text--light vc-text__baseline--md">品牌入驻0费用，提供基于区块链的溯源系统，保护品牌权益，杜绝假冒。提供基于区块链的评价系统，真实不可篡改。</div>
          </div>
          <div class="vi-modal__specie vi-modal--02">
            <h1 class="vc-text--dark ">持续收益</h1>
            <div class="vc-text--light vc-text__baseline--md">平台股权份额固定不可篡改，无法被稀释，平台贡献者可获得平台持续的成长收益</div>
          </div>
        </div>
      </div>

      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">大咖加盟，强大的技术支持</div>
          <div class="title--sub">为分销运营量身打造，面向未来的战略转型方案</div>
        </div>

        <div class="vi-modal__site vc-row "  data-gutter="20">
          <div class="vc-col--06 " style="margin-bottom: 20px" v-for="item in 4">
            <div class="vi-modal--04">
              <div class="vvc-img__area vvc-img--head">
                <img src="static/img/test1.jpg" alt="">
              </div>
              <h1 class="vc-text--black vc-text--bold " style="margin-top: 10px;margin-bottom: 30px;">宋现生</h1>
              <div class="vc-text--light vc-text__baseline--md">为分销运营量身打造，面向未来的战略转型方案</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .vi-modal--01{     transform:scale3d(0.5, 0.5, 0.5) translateY(-50px); opacity: 0 ; transition: all 3s;}
  .vi-modal--01.active { opacity: 1;transform:scale3d(1, 1, 1) translateY(0px);}
</style>
