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
  <div class="vi-home-commission">
    <div class="vi-page__top--low"></div>
    <div class="vi-page__site">
      <div class="vi-modal">
        <div class="vc-text--bold vc-text--xl-xxx" style="margin-top: 100px;margin-bottom: 50px;">佣金规则</div>
      </div>
      <div class="vi-modal" style="padding: 10px 250px;">
        <div class="vc-text--xl-xx vc-margin--ud vc-text--bold">升级规则</div>
        <div class="">
          <ul>
            <li class="vc-text__baseline--md vc-text--light">按月统计销售额，按照销售额对应会员等级</li>
            <li class="vc-text__baseline--md vc-text--light">每月最后一天结算单月销售额，按照对应等级进行返佣</li>
            <li class="vc-text__baseline--md vc-text--light">每月月底自动清空，重新根据以后的销售额匹配等级及其返佣</li>
          </ul>
        </div>

        <div class="vc-table vc-margin--tp">

          <div class="vc-table--tr">
            <div class="vc-table--th">
              <span class="vc-text--white vc-text--lg">会员等级</span>
            </div>
            <div class="vc-table--th">
              <span class="vc-text--white vc-text--lg">销售额</span>
            </div>
          </div>
          <div class="vc-table--tr" v-for="(item,index) in 5">
            <div class="vc-table--td">
              <span class="vc-text--light vc-text--lg">铜牌</span>
            </div>
            <div class="vc-table--td">
              <span class="vc-text--light vc-text--lg">2222k</span>
            </div>
          </div>


        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
  ul li{ list-style:disc inside }
</style>
