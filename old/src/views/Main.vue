<template>
  <div>
    <div class="vi-home">

    </div>

  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    components: {
    },
    beforeRouteEnter (to, from, next) {
      //document.title = '搜索结果';
      next(vm=> {
        //console.log(vm);
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
      handler(){}
    },
    watch: {

      '$route': {
        handler(val, olval){

        },
        deep: true,
      }
    }
  }
</script>

<style scoped>
</style>
