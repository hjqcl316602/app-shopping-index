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
    <div class="vi-page__site">
      <div class="vi-modal" style="margin-top: 100px;">
          <div class="vc-flex ">
            <div class="vvc-img__area vvc-img--logo ">
              <img src="static/img/test1.jpg" alt="">
            </div>
            <div class="vc-flex--fit">
              <div style="padding-left: 40px;">
                <div style="margin-bottom: 40px">
                  <div class="vc-text--xl-x vc-text--bold vc-margin--ud">公司简介</div>
                  <div class="vc-text--light vc-text__baseline--md">烦得很父节点大富科技的看法健康饭店附近快点放假的丰富的非</div>
                </div>
                <div style="margin-bottom: 40px">
                  <div class="vc-text--xl-x vc-text--bold vc-margin--ud">发展历程</div>
                  <div class="vc-text--light vc-text__baseline--md">烦得很父节点大富科技的看法健康饭店附近快点放假的丰富的非</div>
                </div>
                <div style="margin-bottom: 40px">
                  <div class="vc-text--xl-x vc-text--bold vc-margin--ud">我们的愿景</div>
                  <div class="vc-text--light vc-text__baseline--md">烦得很父节点大富科技的看法健康饭店附近快点放假的丰富的非</div>
                </div>
              </div>

            </div>
          </div>

      </div>

      <div class="vi-modal">
        <div class="vi-modal__header">
          <div class="title">联系我们</div>
          <div class="title--sub">一封邮件或许正是成就一个出色的开端</div>
        </div>
      </div>

      <div class="vi-modal" style="padding: 10px 200px; padding-bottom: 100px">
          <div class="vc-row" data-gutter="20">
            <div class="vc-col--12">
              <div class="vc-text--light vc-text--sm vc-margin--ud vc-margin--lt ">您的姓名</div>
              <div class=" ">
                <input type="text" class="vi-input" placeholder="请填写您的姓名">
              </div>
            </div>
            <div class="vc-col--12">
              <div class="vc-text--light vc-text--sm vc-margin--ud vc-margin--lt ">您的电话</div>
              <div class=" ">
                <input type="text" class="vi-input" placeholder="请填写您的电话号码">
              </div>
            </div>

            <div class="vc-col--24">
              <div class="vc-text--light vc-text--sm vc-margin--ud vc-margin--lt ">您的身份</div>
              <div class=" ">
                <label for=""><input type="checkbox"  > 零售企业</label>
                <label for=""><input type="checkbox"  > 零售企业</label>
                <label for=""><input type="checkbox"  > 零售企业</label>
                <label for=""><input type="checkbox"  > 零售企业</label>
              </div>
            </div>

            <div class="vc-col--24">
              <textarea class="vi-textarea"> </textarea>
            </div>

          </div>
      </div>


    </div>
  </div>
</template>
<style scoped>
  label{
    display: inline-block;
    padding: 0;
    margin: 0;
    cursor: pointer;
    float: none;
    margin-bottom: .58rem;
    padding-left: 1.67rem;
    font-size: 1rem;
    color: #a8acb9;
    letter-spacing: 1.2px;
    line-height: 1rem;
  }
</style>
