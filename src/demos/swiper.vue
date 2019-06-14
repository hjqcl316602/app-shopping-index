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
                  this._init_scroll()
                },
                activated(){
                },
                props: [],
                data(){
                        return {
                          items:[
                            { name :"标签1",active:false },{ name :"标签2",active:false },{ name :"标签3",active:false },
                            { name :"标签4",active:false },{ name :"标签5",active:false },{ name :"标签6",active:false },
                            { name :"标签7",active:false },{ name :"标签8",active:false },{ name :"标签9",active:false },
                          ],
                          swiper:null,
                          activeIndex:0,
                          swiper2:null,
                          activeIndex2:0
                        }
                },
                methods: {
                  _init_scroll(){
                    this.$nextTick(() => {
                      let that = this;

                      this.swiper = new Swiper('.swiper-container', {
                        slidesPerView: 4,
                        spaceBetween: 0,
                        freeMode: false,
                        centeredSlides: false,
                        pagination: {
                          el: '.swiper-pagination',
                          clickable: true,
                        },
                        on:{
                          slideChange:function(){
                            that.activeIndex = this.realIndex ;
                          }
                        },
                      });

                      this.swiper2 = new Swiper('.swiper-container2', {
                        slidesPerView: 4,
                        spaceBetween: 0,
                        centeredSlides: false,
                        freeMode: false,
                        pagination: {
                          el: '.swiper-pagination2',
                          clickable: true,
                        },
                        on:{
                          slideChange:function(){
                            that.activeIndex2 = this.realIndex;
                          }
                        },
                      });

                    });
                  },
                  scrollTo(activeIndex){
                    this.items.forEach((item,i)=>{
                      if(i == activeIndex){
                        item.active = true
                      }else{
                        item.active = false
                      }
                    });
                    console.log(activeIndex)
                    console.log(this.swiper.slideTo(activeIndex))
                  }
                },
                watch: {
                  ['activeIndex'](val){

                    console.log(val)
                    this.swiper2.slideTo(val)
                  },
                  ['activeIndex2'](val){
                    this.swiper.slideTo(val)
                  }

                },
                destroy(){
                }
        }
</script>
<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="{'selected':item.active}" v-for="(item,i) in items" @click="scrollTo(i)">{{ item.name }}</div>
      </div>

    </div>

    <div class="swiper-container2">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="{'selected':item.active}" v-for="(item,i) in items" @click="scrollTo(i)">{{ item.name }}</div>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .swiper-slide{
    height:50px;display: flex;justify-content: center;align-items: center;color:black
  }
  .swiper-slide.selected{ color:red }
</style>
