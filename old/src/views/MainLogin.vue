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
                methods: {
                  login(){
                    sessionStorage.setItem('login',true);
                    let jumpPath = this.$route.query['redirect'] ? this.$route.query['redirect'] : '/Main';
                    this.$router.replace({path:jumpPath})
                  }
                },
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
  <div>
    <button @click="login">登陆</button>
  </div>
</template>
<style scoped></style>
