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
                props: [],
                data(){
                        return {}
                },
                methods: {
                        async _init_page(){

                        }

                },
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
  <div style="height:300px;width:300px">
    <div class="vp-img__inner">
      <img src="../img/test1.jpg" alt="" class="vp-img--max"  @load="_pub_img_load($event)">
      <img src="../img/loading.png" alt="" class="vp-img--error">
    </div>

  </div>

  <div class="vp-icon__outer">
    <div class="vp-icon vp-icon--loading"></div>
    <div>121212</div>
  </div>
</template>
<style scoped></style>
