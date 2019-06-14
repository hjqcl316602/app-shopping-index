
//************************************************* 自定义过滤器 ******************************************/
const filters = {
  filters:{
    str_name:value =>{
      return value + '123456'
    }
  }
};
//************************************************* 自定义指令 ******************************************/
const directives = {
  directives:{
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
};
//************************************************* 通用方法 ******************************************
const methods = {
  methods:{
    getName(){
      console.log('123456')
    }
  }
}

export  {
  filters,
  directives,
  methods
}
