<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  mounted(){
      //this.$createConfirm().show()
  },
  data(){
    return {
       name1:"hjqhjq123456"
    }
  },
  methods:{

  }
  ,
  watch:{

  }
}
</script>
<style></style>
