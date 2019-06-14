

<script type="text/ecmascript-6">

  export default {
    components: {
    },
    beforeRouteEnter (to, from, next) {
      //document.title = '搜索结果';
      next(vm=> {
        vm.$doms.onScroll(vm.scroll_change)
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
      return {
        isScroll:false,
        nav:{
          items:[
            { name:'首页',pathName:'HomeIndex',active:false},
            { name:'解决方案',pathName:'HomePlan',active:false},
            { name:'核心优势',pathName:'HomeAdvantage',active:false},
            { name:'渠道种类',pathName:'HomeTypes',active:false},
            { name:'佣金规则',pathName:'HomeCommission',active:false},
            { name:'力量支持',pathName:'HomeTeams',active:false},
            { name:'联系我们',pathName:'HomeConnect',active:false},
          ]
        }
      }
    },
    methods: {
      handler(){},
      chang_nav(item){
        this.$router.replace({ name :item.pathName})
      },
      chang_nav_active(router){
        this.nav.items.forEach((item,i)=>{
          if(router.name == item.pathName){
            item.active = true
          }else{
            item.active = false
          }
        })
      },
      scroll_change(){
        var t =document.documentElement.scrollTop||document.body.scrollTop;
        if(t > 10){
          this.isScroll = true;
        }else{
          this.isScroll = false;
        }
      }
    },
    watch: {

      '$route': {
        handler(val, olval){
          this.chang_nav_active(val)
        },
        deep: true,
        immediate:true
      }
    }
  }
</script>
<template>
  <div class="vi-home">
    <div class="vi-header__wrap " :class="{'is-scroll':isScroll}">
      <div class="vi-header__site ">
        <div class="">
          <span class="vi-header__logo">渠道价值共享平台</span>
        </div>
        <div class="vi-nav" >
          <div class="vi-nav__item" :class="{ 'is-active':item.active }" v-for="(item,index) in nav.items" @click="chang_nav(item)">
            <span >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>

    <keep-alive>
      <router-view ></router-view>
    </keep-alive>

    <div class="vi-footer__wrap">
      <div>
        <span style="margin-right: 100px;">电话咨询: 400 091 1717 周一到周日 9:00-18:00</span>
        <span style="margin-right: 100px;">公司地址：成都市天府新区商务中心1号楼5栋</span>
        <span>贝斯特链公众号</span>
      </div>
      <div style="margin-top: 40px;">
        <span style="margin-right: 30px;">@ 2018 贝斯特链</span>
        <span>蜀ICP备1234356号</span>
      </div>
    </div>
  </div>

</template>
<style scoped>
</style>
