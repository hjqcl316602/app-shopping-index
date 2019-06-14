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

                },
                activated(){
                },
                props: [],
                data(){
                        return {}
                },
                methods: {},
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
  <div class="vi-home-advantage">
    <div class="vi-page__top--low"></div>
    <div class="vi-page__site">

      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">贝斯特链平台</div>
          <div class="title--sub">利用区块链+token技术，打造一个渠道价值共享平台</div>
        </div>
      </div>

      <div class="vi-modal">
        <div class="vc-row" data-gutter="20">
          <div class="vc-col--12">
            <div style="height:456px" class="vc-flex vc-items--center">
              <div >
                <h1 class="vc-text--bold vc-margin--ud">众创平台</h1>
                <div class="vc-text--light vc-text__baseline--md">基于区块链技术，实行股权价值转移，用户即股东，永久享受平台成长红利</div>
              </div>
            </div>
          </div>
          <div class="vc-col--12">
            <div class="vvc-img__area vvc-img--modal">
              <img src="static/img/test1.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="vi-modal">
        <div class="vc-row" data-gutter="20">
          <div class="vc-col--12">
            <div class="vvc-img__area vvc-img--modal">
              <img src="static/img/test1.jpg" alt="">
            </div>
          </div>
          <div class="vc-col--12">
            <div style="height:456px" class="vc-flex vc-items--center">
              <div >
                <h1 class="vc-text--bold vc-margin--ud">智能合约</h1>
                <div class="vc-text--light vc-text__baseline--md"> 所有分配制度由程序自动执行，公开透明，多劳多得。例如渠道销售比普通客户获得价值高，不同渠道销售 根据团队销售额所处阶段获得不同比例的红利</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="vi-modal">
        <div class="vc-row" data-gutter="20">
          <div class="vc-col--12">
            <div style="height:456px" class="vc-flex vc-items--center">
              <div >
                <h1 class="vc-text--bold vc-margin--ud">品牌直销</h1>
                <div class="vc-text--light vc-text__baseline--md">品牌入驻0费用，提供基于区块链的溯源系统，保护品牌权益，杜绝假冒。提供基于区块链的评价系统，真实不可篡改。</div>
              </div>
            </div>
          </div>
          <div class="vc-col--12">
            <div class="vvc-img__area vvc-img--modal">
              <img src="static/img/test1.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

      <div class="vi-modal">
        <div class="vc-row" data-gutter="20">
          <div class="vc-col--12">
            <div class="vvc-img__area vvc-img--modal">
              <img src="static/img/test1.jpg" alt="">
            </div>
          </div>
          <div class="vc-col--12">
            <div style="height:456px" class="vc-flex vc-items--center">
              <div >
                <h1 class="vc-text--bold vc-margin--ud">持续收益</h1>
                <div class="vc-text--light vc-text__baseline--md">平台股权份额固定不可篡改，无法被稀释，平台贡献者可获得平台持续的成长收益</div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  </div>
</template>
<style scoped></style>
