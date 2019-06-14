<template>
        <transition name="fade"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut">
            <div class="my-cropper" v-if="isShow">
                <div class="my-cropper-modal" >
                    <vue-cropper
                            ref="cropper"
                            :img="img"
                            :outputSize="option.outputSize"
                            :outputType="option.outputType"
                            :fixed="option.fixed"
                            :fixedBox="option.fixedBox"
                            :canMoveBox="option.canMoveBox"
                            :autoCrop="option.autoCrop"
                            :autoCropWidth="params.width"
                            :autoCropHeight="params.height"
                    ></vue-cropper>
                    <div class=" my-cropper-btns">
                        <div class="my-cropper-btn cancel " @click="CropperCancel">
                            取消
                        </div>
                        <!-- <div class="my-cropper-btn start my-text&#45;&#45;theme" @click="IsCropper">
                            <span v-if="isCropper">取消裁剪</span>
                            <span v-else>裁剪</span>
                        </div>-->
                        <div class="my-cropper-btn my-text--theme sure" @click="CropperSure">
                            确定
                        </div>
                    </div>

                </div>
            </div>
        </transition>
</template>

<script type="text/ecmascript-6">
    import VueCropper from 'vue-cropper'
    export default {
        name:"cropper",
        components: {VueCropper},
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
        computed:{

        },
        props:{
            params:{
                type:Object,
                default:()=>{
                    return {
                        width:250,
                        height:250
                    }
                }
            },
            img:{
                type:String
            },
            successText:{
                type:String,
                default: '上传成功'
            }
        },
        data(){
            return {
                isShow:false,
                isCropper:false,

                option:{
                    outputSize:0.7,
                    outputType:'png',
                    fixed:false,
                    fixedNumber:[1,1],
                    autoCrop:true,
                    canMoveBox:false,
                    fixedBox:true,
                    autoCropWidth: 200 ,
                    autoCropHeight: 200
                },

            }
        },
        methods: {
            hide(){
                this.isShow = false
            },
            show(){
                this.isShow = true ;
            },
            CropperCancel(){
                this.$refs.cropper.stopCrop();
                this.$refs.cropper.clearCrop();
                this.hide();
                this.$emit('cancel');
            },
            CropperSure(){
                this.$refs.cropper.getCropData((data) => {
                    this.hide();
                    this.$emit('ok',data);
                })
            }
        },
        watch: {}
    }
</script>

<style scoped>
    .vue-cropper {
        background-color: #000;
        background-image:none;
    }
</style>