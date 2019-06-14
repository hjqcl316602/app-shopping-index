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
                          items:20,
                          swiper:{
                            wrap:null,
                            refreshText:'释放即刷新',
                            refreshEnd:false,
                            loadMore:'加载更多'
                          }
                        }
                },
                methods: {
                  _init_scroll(){
                    this.$nextTick(() => {
                      let that = this;
                      let refreshEnd = false ;

                      this.swiper.wrap = new Swiper('.swiper-container', {
                        speed:300,
                        direction: 'vertical',
                        slidesPerView: 'auto',//不定宽 或 高
                        freeMode: true,
                        setWrapperSize:true ,
                        observer: true,// 用于监听数据改变
                        mousewheel: true,
                        on:{
                          ['slideChange']:function(e){
                            //alert(this.activeIndex)
                            that.swiper.index = this.activeIndex + 1
                          },
                          ['touchEnd']: function () {
                            let swiper = this ;
                            //console.log(swiper.translate)
                            if(swiper.translate > 100 ){
                              swiper.setTransition(swiper.params.speed);
                              swiper.setTranslate(50);
                              swiper.touchEventsData.isTouched=false;
                              that.swiper.refreshText = '正在刷新...'

                              setTimeout(()=>{
                                that.swiper.refreshEnd = true;
                                that.swiper.refreshText = '刷新完成';
                                swiper.allowTouchMove = true ;
                                swiper.setTranslate(0);
                                that.items = 10 ;
                              },1000)

                            } else{
                              that.swiper.refreshText = '释放即刷新'
                            }
                          },
                          ['touchStart']: function () {
                            if(that.swiper.refreshEnd == true ){
                              that.swiper.refreshText = '释放即刷新';
                              that.swiper.refreshEnd = false
                            }
                          },
                          ['momentumBounce']: function () {
                            let swiper = this ;
                            console.log(swiper.translate)
                            if(swiper.translate < -100){
                              swiper.allowTouchMove=false;//禁止触摸
                              swiper.params.virtualTranslate = true;//定住不给回弹
                              setTimeout(()=>{
                                swiper.params.virtualTranslate = false;
                                swiper.allowTouchMove=true;
                                //swiper.refresh();
                                that.items += 10 ;
                              },1000)
                            }
                          }
                        }
                      });
                    });
                  },
                },
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="refresh">{{ swiper.refreshText }}</div>
      <!--<div class="loadmore">{{ swiper.loadMore }}</div>-->
      <div class="swiper-slide" v-for="item in items"> slide {{ item }}</div>
    </div>
  </div>
</template>
<style scoped>
  .swiper-container{
    height:100vh;
  }
  .swiper-slide{
    height:100px;background-color: #fff;
  }
  .refresh{
    position: absolute;bottom: 100%;text-align: center;line-height: 50px;width: 100%;
  }
   .loadmore{ line-height: 50px; position: absolute;top: 100%;text-align: center;width: 100% }
</style>

<!--
refreshEnd= false;
times=0;//加载次数
oriSpeed=300
var swiper = new Swiper('.swiper-container',{
speed: oriSpeed,
slidesPerView: 'auto',
freeMode: true,
direction: 'vertical',
setWrapperSize: true,
scrollbar: {
el: '.swiper-scrollbar',
},
on:{
//下拉释放刷新
touchEnd: function(){
swiper=this
refreshText=swiper.$el.find('.refresh')
if(this.translate>100){
swiper.setTransition(this.params.speed);
swiper.setTranslate(100);
swiper.touchEventsData.isTouched=false;//跳过touchEnd事件后面的跳转(4.0.5)
refreshText.html('刷新中')

swiper.allowTouchMove=false;
setTimeout(function(){//模仿AJAX
swiper.removeAllSlides();
for(i=0;i<20;i++){
swiper.appendSlide('<div class="swiper-slide">New Slide'+(i+1)+'</div>');
refreshText.html('刷新完成');
refreshEnd=true;
swiper.allowTouchMove=true;
}
},1000)

}

},
touchStart: function(){
if(refreshEnd==true){
this.$el.find('.refresh').html('释放刷新');
refreshEnd=false;
}
},

//加载更多
momentumBounce: function(){//非正式反弹回调函数，上拉释放加载更多可参考上例
swiper=this
//slidesheight=0;
//for(h=0;h<swiper.slides.length;h++){
//	slidesheight+=swiper.slides[h].offsetHeight;
//}
//endTranslate=this.height-slidesheight-20
//if(this.translate < endTranslate){}
if(swiper.translate<-100){

swiper.allowTouchMove=false;//禁止触摸
swiper.params.virtualTranslate=true;//定住不给回弹
setTimeout(function(){//模仿AJAX
for(m=0;m<20;m++){
swiper.appendSlide('<div class="swiper-slide">moreSlide'+(times*20+m+1)+'</div>');
}
swiper.params.virtualTranslate=false;
swiper.allowTouchMove= true;
times++
},1000)

}
},
}
});-->

