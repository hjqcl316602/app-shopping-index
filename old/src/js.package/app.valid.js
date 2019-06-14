
// 1. 指定长度的字符
export  function isCodeDesign (o,len) {  // bool true  表示多于  false 少于
  let reg =   new RegExp("^\\S{"+len+"}$"); // 字符串拼接
  if(reg.test(o)){
    return true
  }else{
    return false
  }
}

// 2. 指定范围长度的字符
export  function isCodeFixed(o,len,bool = false) {  // bool true  表示多于  false 少于
  let reg;
  if(bool){
    reg =   new RegExp("^\\S{"+len+",}$"); // 字符串拼接
  }else{
    reg =   new RegExp("^\\S{0,"+len+"}$"); // 字符串拼接
  }
  if(reg.test(o)){
    return true
  }else{
    return false
  }
}

// 3. 名称不能包含特殊字符
export  function isCodeNoSpecial(o) {
  let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
    regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

  if(regEn.test(o) || regCn.test(o)) {
    return false;
  }
  return true
}

export  function isEmail(o){
  return typeof o === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(o)
}

export  function isMobile(o){
  return typeof o === 'string' && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(o)
}

export  function isHttp (o){
  return typeof o === 'string' && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(o)
}

export  function isCard(code) {
  var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
  var tip = "成功";
  var pass= true;

  if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
    tip = "身份证号格式错误";
    pass = false;
  }

  else if(!city[code.substr(0,2)]){
    tip = "地址编码错误";
    pass = false;
  }
  else{
    //18位身份证需要验证最后一位校验位
    if(code.length == 18){
      code = code.split('');
      //∑(ai×Wi)(mod 11)
      //加权因子
      var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
      //校验位
      var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
      var sum = 0;
      var ai = 0;
      var wi = 0;
      for (var i = 0; i < 17; i++)
      {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      var last = parity[sum % 11];
      if(parity[sum % 11] != code[17]){
        tip = "校验位错误";
        pass =false;
      }
    }
  }
  //if(!pass) alert(tip);
  return {
    state:pass,
    message:tip
  };
}

export  function isString(o){
  if(Object.prototype.toString.call(o)=="[object String]"){
    return  true  ;
  }else{
    let type = this.type(o);
    //console.error('该数据类型不是：string，当前数据类型为：'+ type ) ;
    return false ;
  }
}

// 判断是否是空或全部是空格
export  function isStringEmpty(o){

  if(!String(o)) return false;
  if ( o == "" ) return true;
  var regu = "^[ ]+$";
  var re = new RegExp(regu);
  return re.test(o);
}

export  function isEmpty(o) {
  // 判断是否是空 空格 null undefined
  if( Null(o) || Undefined(o) || this.isStringEmpty(o) ){
    return true
  }else{
    return false
  }
}

export  function isObject(o){
  if(Object.prototype.toString.call(o)=="[object Object]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：object，当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isDate(o){
  if(Object.prototype.toString.call(o)=="[object Date]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：object，当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isDateDay(o) {
  ////日期格式验证 2016-01-01这种格式
  var pattern = /^[1-9]{1}\d{3}-[0-1]{1}\d{0,1}-[0-1]{1}\d{0,1}/;
  if(pattern.test(o)){
    return true;
  }else{
    return false;
  }
}

export  function isArray(o){
  if(Object.prototype.toString.call(o)=="[object Array]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：array，当前数据类型为：'+ type ) ;
    return false ;
  }
  //return Array.isArray(val)
}

export  function isNull(o){
  if(Object.prototype.toString.call(o)=="[object Null]"){
    return  true  ;
  }else{
    let type =  type(o);
    console.error('该数据类型不是:null，当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isNumber(o) {
  // 判断是真正的数字 不是字符串隐式转化的数字
  if(Object.prototype.toString.call(o)=="[object Number]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：number ，当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isBoolean(o) {
  if(Object.prototype.toString.call(o)=="[object Boolean]" ){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：boolean ,当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isFunction(o) {
  if(Object.prototype.toString.call(o)=="[object Function]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：function ,当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isUndefined(o) {
  if(Object.prototype.toString.call(o)=="[object Undefined]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：undefined,当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function isDocument(o){
  if(Object.prototype.toString.call(o)== "[object Document]"|| "[object HTMLDocument]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：document,当前数据类型为：'+ type ) ;
    return false ;
  }
}

export  function Type(obj){
  // 本地对象、内置对象和宿主对象
  //本地对象:Object Function Array String Boolean Number Date RegExp Error EvalError RangeError ReferenceError SyntaxError TypeError URIError
  //内置对象:Global Math
  //宿主对象: HTMLDivElement  HTMLBodyElement  Document  HTMLDocument
  let local = "Object Function Array String Boolean Number Date RegExp Error EvalError RangeError ReferenceError SyntaxError TypeError URIError";
  let builtIn = "Global Math";
  let host = "HTMLDivElement HTMLBodyElement Document HTMLDocument";
  let classType = {};
  local.split(" ").forEach((item,i)=>{
    classType[ "[object " + item + "]" ] = item.toLowerCase();
  });
  builtIn.split(" ").forEach((item,i)=>{
    classType[ "[object " + item + "]" ] = item.toLowerCase();
  });
  host.split(" ").forEach((item,i)=>{
    classType[ "[object " + item + "]" ] = item.toLowerCase();
  });

  //var data=[],a='123',b=0,c=true,d={1:23},e=[123],f=function(){},g=null,h=undefined,i=Math,j=/$.+^/,k= new Date(),l= this.$refs.divs,m = new Error();  例子
  return obj == null ? String( obj ) : classType[ toString.call(obj) ] || "object";
}
