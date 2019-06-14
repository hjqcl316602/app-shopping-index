<template>
    <span>
        <input type="text" v-model="currentValue"  ref="inputNumber" @change="InputValueValid">
    </span>

</template>

<script type="text/ecmascript-6">
    export default {
        components: {},
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
            this.currentValue = this.value;

        },
        beforeMount(){
        },
        mounted(){
            this.init();
        },
        activated(){
        },
        props: {
            numberLength:{
                type:Number,
                default:5
            },
            pointLength:{
                type:Number,
                default:2
            },
            isInteger:{
                type:Boolean,
                default:false
            },
            value:{
                type:String,
            }
        },
        data(){
            return {
                currentValue:'',
                oldValue:''
            }
        },
        methods: {
            init(){
                let el = this.$refs.inputNumber;
                let _this = this;

                el.onkeypress = function (e) {
                    _this.InputValueValid(e)
                }
                el.addEventListener('textInput', function (e) {
                    _this.InputValueValid(e)
                })
                el.onkeyup = function (e) {
                    _this.InputValueValid(e)
                }
                el.onkeydown = function (e) {
                    _this.InputValueValid(e)
                }
            },
            InputValueValid(e){
                /*1. 不能输入空白字符及字母
                2. 只能输入数字及小数点
                3. 首位不能为小数点
                4. 小数点只能出现一次
                5. 小数点后只有两位
                6. 不能输入首位是 0 的多位数*/
                if(this.isInteger){
                    e.target.value = e.target.value.replace(/\D/g, '').replace(/^0\d{1}/,'0');
                }else{
                    e.target.value = e.target.value.replace(/[^\d\.]|^\./g, '').replace(/\.{2}/g, '.').replace(/^([1-9]\d*|0)(\.\d{1,2})(\.|\d{1})?$/, '$1$2').replace(/^0\d{1}/g, '0');
                }
            }
        },
        watch: {

            value(val,old){
                this.currentValue = val;
            },
            currentValue(val,oldval){
                /*if(this.isInteger){
                    this.value = val.replace(/\D/g, '').replace(/^0\d{1}/,'0');
                }else{
                    this.value = val.replace(/[^\d\.]|^\./g, '').replace(/\.{2}/g, '.').replace(/^([1-9]\d*|0)(\.\d{1,2})(\.|\d{1})?$/, '$1$2').replace(/^0\d{1}/g, '0');
                }*/
                this.$emit('input', val)
            }
        }
    }
</script>

<style scoped>
  input{ border: 1px solid #dcdcdc;
    -webkit-appearance: textfield;
    background-color: white;
    -webkit-rtl-ordering: logical;
    cursor: text;
    padding: 1px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    font: 400 13.3333px Arial;
    -webkit-writing-mode: horizontal-tb !important;
  }
</style>
