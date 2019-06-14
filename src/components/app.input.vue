<template>
  <div class="va-input">
    <input type="text" class="va-input__inner">
  </div>

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
    watch: {

      '': {
        handler(val, olval){

        },
        deep: true,
      }
    }
  }
</script>

<style scoped>
  .my-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%
  }

  .my-input::-webkit-scrollbar {
    z-index: 11;
    width: 6px
  }

  .my-input::-webkit-scrollbar:horizontal {
    height: 6px
  }

  .my-input::-webkit-scrollbar-thumb {
    border-radius: 5px;
    width: 6px;
    background: #b4bccc
  }

  .my-input::-webkit-scrollbar-corner {
    background: #fff
  }

  .my-input::-webkit-scrollbar-track {
    background: #fff
  }

  .my-input::-webkit-scrollbar-track-piece {
    background: #fff;
    width: 6px
  }

  .my-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d8dce5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #5a5e66;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 1;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%
  }

  .my-input__prefix, .my-input__suffix {
    position: absolute;
    top: 0;
    -webkit-transition: all .3s;
    text-align: center;
    height: 100%;
    color: #b4bccc
  }

  .my-input__inner::-webkit-input-placeholder {
    color: #b4bccc
  }

  .my-input__inner:-ms-input-placeholder {
    color: #b4bccc
  }

  .my-input__inner::placeholder {
    color: #b4bccc
  }

  .my-input__inner:hover {
    border-color: #b4bccc
  }

  .my-input.is-active .my-input__inner, .my-input__inner:focus {
    border-color: #409EFF;
    outline: 0
  }

  .my-input__suffix {
    right: 5px;
    transition: all .3s;
    pointer-events: none
  }

  .my-input__suffix-inner {
    pointer-events: all
  }

  .my-input__prefix {
    left: 5px;
    transition: all .3s
  }

  .my-input__icon {
    height: 100%;
    width: 25px;
    text-align: center;
    -webkit-transition: all .3s;
    transition: all .3s;
    line-height: 40px
  }

  .my-input__icon:after {
    content: '';
    height: 100%;
    width: 0;
    display: inline-block;
    vertical-align: middle
  }

  .my-input__validateIcon {
    pointer-events: none
  }

  .my-input.is-disabled .my-input__inner {
    background-color: #f5f7fa;
    border-color: #dfe4ed;
    color: #b4bccc;
    cursor: not-allowed
  }

  .my-input.is-disabled .my-input__inner::-webkit-input-placeholder {
    color: #b4bccc
  }

  .my-input.is-disabled .my-input__inner:-ms-input-placeholder {
    color: #b4bccc
  }

  .my-input.is-disabled .my-input__inner::placeholder {
    color: #b4bccc
  }

  .my-input.is-disabled .my-input__icon {
    cursor: not-allowed
  }

  .my-input--suffix .my-input__inner {
    padding-right: 30px
  }

  .my-input--prefix .my-input__inner {
    padding-left: 30px
  }

  .my-input--medium {
    font-size: 14px
  }

  .my-input--medium .my-input__inner {
    height: 36px
  }

  .my-input--medium .my-input__icon {
    line-height: 36px
  }

  .my-input--small {
    font-size: 13px
  }

  .my-input--small .my-input__inner {
    height: 32px
  }

  .my-input--small .my-input__icon {
    line-height: 32px
  }

  .my-input--mini {
    font-size: 12px
  }

  .my-input--mini .my-input__inner {
    height: 28px
  }

  .my-input--mini .my-input__icon {
    line-height: 28px
  }

  .my-input-group {
    line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate
  }

  .my-input-group > .my-input__inner {
    vertical-align: middle;
    display: table-cell
  }

  .my-input-group__append, .my-input-group__prepend {
    background-color: #f5f7fa;
    color: #878d99;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #d8dce5;
    border-radius: 4px;
    padding: 0 20px;
    width: 1px;
    white-space: nowrap
  }

  .my-input-group--prepend .my-input__inner, .my-input-group__append {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
  }

  .my-input-group--append .my-input__inner, .my-input-group__prepend {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
  }

  .my-input-group__append:focus, .my-input-group__prepend:focus {
    outline: 0
  }

  .my-input-group__append .el-button, .my-input-group__append .el-select, .my-input-group__prepend .el-button, .my-input-group__prepend .el-select {
    display: inline-block;
    margin: -20px
  }

  .my-input-group__append button.el-button, .my-input-group__append div.el-select .my-input__inner, .my-input-group__append div.el-select:hover .my-input__inner, .my-input-group__prepend button.el-button, .my-input-group__prepend div.el-select .my-input__inner, .my-input-group__prepend div.el-select:hover .my-input__inner {
    border-color: transparent;
    background-color: transparent;
    color: inherit;
    border-top: 0;
    border-bottom: 0
  }

  .my-input-group__append .el-button, .my-input-group__append .my-input, .my-input-group__prepend .el-button, .my-input-group__prepend .my-input {
    font-size: inherit
  }

  .my-input-group__prepend {
    border-right: 0
  }

  .my-input-group__append {
    border-left: 0
  }

  .el-textarea {
    display: inline-block;
    width: 100%;
    vertical-align: bottom
  }

  .el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    font-size: 14px;
    color: #5a5e66;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d8dce5;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1)
  }

  .el-textarea__inner::-webkit-input-placeholder {
    color: #b4bccc
  }

  .el-textarea__inner:-ms-input-placeholder {
    color: #b4bccc
  }

  .el-textarea__inner::placeholder {
    color: #b4bccc
  }

  .el-textarea__inner:hover {
    border-color: #b4bccc
  }

  .el-textarea__inner:focus {
    outline: 0;
    border-color: #409EFF
  }

  .el-textarea.is-disabled .el-textarea__inner {
    background-color: #f5f7fa;
    border-color: #dfe4ed;
    color: #b4bccc;
    cursor: not-allowed
  }

  .el-textarea.is-disabled .el-textarea__inner::-webkit-input-placeholder {
    color: #b4bccc
  }

  .el-textarea.is-disabled .el-textarea__inner:-ms-input-placeholder {
    color: #b4bccc
  }

  .el-textarea.is-disabled .el-textarea__inner::placeholder {
    color: #b4bccc
  }

</style>
