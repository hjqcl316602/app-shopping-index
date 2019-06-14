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
  <div class="vi-home-plan">
    <div class="vi-page__top--low"></div>
    <div class="vi-page__site" style="padding-bottom: 20px">
      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">大咖加盟，强大的技术支持</div>
          <div class="title--sub">为分销运营量身打造，面向未来的战略转型方案</div>
        </div>
        <div class="vi-modal__site vc-row "  data-gutter="20">
           <div class="vc-col--06 " style="margin-bottom: 20px" v-for="item in 8">
             <div class="vi-modal--04">
               <div class="vvc-img__area vvc-img--head">
                 <img src="static/img/test1.jpg" alt="">
               </div>
               <h1 class="vc-text--black vc-text--bold " style="margin-top: 10px;margin-bottom: 30px;">宋现生</h1>
               <div class="vc-text--light vc-text__baseline--md">为分销运营量身打造，面向未来的战略转型方案</div>
             </div>
           </div>
        </div>

        <div class="vi-modal__header">
          <div class="title">技术支持</div>
          <div class="title--sub">为分销运营量身打造，面向未来的战略转型方案</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
