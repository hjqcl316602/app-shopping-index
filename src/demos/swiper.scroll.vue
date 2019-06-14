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
                          swiper:{
                            wrap:null,
                            index:1
                          }
                        }
                },
                methods: {
                  _init_scroll(){
                    this.$nextTick(() => {
                      let that = this;
                      // 使用swiper进行页面滑动时，一定注意要给 swiper-container  设置一个高度
                      this.swiper.wrap = new Swiper('.swiper-container', {
                        direction: 'vertical',
                        slidesPerView: 'auto',//不定宽 或 高
                        freeMode: true,
                        centeredSlides: false,
                        autoHeight:'auto',
                        scrollbar: {
                          el: '.swiper-scrollbar',
                        },
                        mousewheel: true,
                        on:{
                          'slideChange':function(e){
                            //alert(this.activeIndex)
                            //that.swiper.index = this.activeIndex + 1
                          }
                        }
                      });
                    });
                  },
                  _change_index(index){
                    this.swiper.index = index ;
                    this.swiper.wrap.slideTo(this.swiper.index-1)
                  }
                },
                watch: {/*'': {handler(val, olval){}, deep: true ,immediate:true}  */},
                destroy(){
                }
        }
</script>
<template>
  <div class="content">
    <div class="nav">
        <div class="nav-item" :class="{'active':swiper.index == item }" v-for="item in 5" @click="_change_index(item)">星期{{ item  }}</div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <h4>星期一</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet dolor lectus eu libero. Vestibulum venenatis eget turpis sed faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean tristique nisl tellus, sit amet fringilla nisl volutpat cursus. Quisque dignissim lectus ac nunc consectetur mattis. Proin vel hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh et tincidunt tristique, nisl risus facilisis lectus, ut interdum orci nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit sodales posuere eget non est. Fusce convallis vestibulum dolor non volutpat. Vivamus vestibulum quam ut ultricies pretium.</div>
        <div class="swiper-slide">
          <h4>星期二</h4>
          Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris. Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.</div>
        <div class="swiper-slide">
          <h4>星期三</h4>
          Curabitur eget aliquam erat. Curabitur a neque vitae purus volutpat elementum. Vivamus quis vestibulum leo, efficitur ullamcorper velit. Integer tincidunt finibus metus vel porta. Mauris sed mauris congue, pretium est nec, malesuada purus. Nulla hendrerit consectetur arcu et lacinia. Suspendisse augue justo, convallis eget arcu in, pretium tempor ligula. Nullam vulputate tincidunt est ut ullamcorper.</div>
        <div class="swiper-slide">
          <h4>星期四</h4>
          Curabitur sed sodales leo. Nulla facilisi. Etiam condimentum, nisi id tempor vulputate, nisi justo cursus justo, pellentesque condimentum diam arcu sit amet leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In placerat tellus a posuere vehicula. Donec diam massa, efficitur vitae mattis et, pretium in augue. Fusce iaculis mi quis ante venenatis, sit amet pellentesque orci aliquam. Vestibulum elementum posuere vehicula.</div>
        <div class="swiper-slide">
          <h4>星期五</h4>
          Sed tincidunt diam a massa pharetra faucibus. Praesent condimentum id arcu nec fringilla. Maecenas faucibus, ante et venenatis interdum, erat mi eleifend dui, at convallis nisl est nec arcu. Duis vitae arcu rhoncus, faucibus magna ut, tempus metus. Cras in nibh sed ipsum consequat rhoncus. Proin fringilla nulla ut augue tempor fermentum. Nunc hendrerit non nisi vitae finibus. Donec eget ornare libero. Aliquam auctor erat enim, a semper risus semper at. In ut dui in metus tincidunt euismod eget et lacus. Aenean et dictum urna, sed rhoncus lorem. Duis pharetra sagittis odio. Etiam a libero ut nisi feugiat tincidunt vel vitae turpis. Maecenas vel orci sit amet lorem hendrerit venenatis sollicitudin ut dui. Quisque rhoncus nibh in massa pretium scelerisque.</div>
      </div>
      <!-- Add Scroll Bar -->

    </div>
  </div>

</template>
<style scoped>
  .nav-item{
    height:100px;text-align: center;line-height: 100px;font-weight: 800;
  }
  .nav-item.active{
    color: red;
  }
  .content{
    display: flex;
  }
  .nav{
    width: 100px;
  }
  .swiper-container {
    flex: 1;
    height: 100vh;
  }
  .swiper-slide {
    font-size: 18px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0px;
    border-bottom: 1px solid red;
    overflow: hidden;
  }
</style>
