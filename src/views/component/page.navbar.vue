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
                  active:{
                    type:String,
                  }
                },
                data(){
                        return {
                          nav:{
                            items:[
                              { name:'首页',class:'index',value:'index',pathName:'MainIndex'},
                              { name:'优家',class:'resource',value:'resource',pathName:'MainResource'},
                              { name:'模测',class:'testing',value:'testing',pathName:'MainTesting'},
                              { name:'我的',class:'user',value:'user',pathName:'MainUser'},
                            ]
                          }
                        }
                },
                methods: {
                        async _init_page(){

                        }

                },
                watch: {

                },
                destroy(){
                }
        }
</script>
<template>
  <div class="vp-footer vp-footer--shadow">
    <div class="vi-navbar">
      <router-link tag="div" class="vi-navbar__item" :to="{ name : item.pathName }" replace :class="{'active':item.value == active }" v-for="(item,index) in nav.items" :key="index" >
        <div class="vi-navbar__item--inner" :class="item.class">{{ item.name}}</div>
      </router-link>
      <!--<div class="vi-navbar__item com-padding&#45;&#45;tp " :class="{'com-text&#45;&#45;theme':item.active ,'com-text&#45;&#45;gray':!item.active }" v-for="(item,index) in nav" @click="change_route(item)">
        <i class="iconfont  com-text&#45;&#45;xl" :class="item.class"></i>
        <p class="com-text__height">{{ item.name }}</p>
      </div>-->
    </div>

  </div>
</template>
<style scoped></style>
