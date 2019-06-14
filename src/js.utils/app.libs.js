


//*************************************************** 1.数组方法  ********************************************************/
function LibArrays(){}

//1. 判断是否是数组
LibArrays.prototype.isArray = function(o){
  if(Object.prototype.toString.call(o)=="[object Array]"){
    return  true  ;
  }else{
    return false ;
  }
  //return Array.isArray(val)
};
// 2. 得到从数字之间的数组 0 - 100
LibArrays.prototype.numbers = function(min,max){
  let arr = [];
  for(var k = min ; k < max + 1 ;k++){
    arr.push(k)
  }
  return arr;
};
// 3. 得到固定长度的某范围内的数组，不重复
LibArrays.prototype.roundRepeatNo = function(min,max,n){

  var newArr = [];
  var arr  = numbers(min,max);
  for(var i = 0 ; i < n ; i++){
    let round = Math.round(Math.random()*(max-min-i));
    newArr.push(arr[round]);
    arr = this.slice(arr,arr[round]);
  }
  return newArr;
};
// 4. 数组置换
LibArrays.prototype.transpose = function(arr1){
  var arr2 = [];
  //确定新数组有多少行
  for(var k=0;k<arr1[0].length;k++){
    arr2[k] = [];
  }
  //动态添加数据
  //遍历原数组
  for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr1[i].length;j++){
      arr2[j][i] = arr1[i][j];
    }
  }
  return arr2;
};
// 5. 乱序数组的方法，sort废弃，有问题，不完全随机
LibArrays.prototype.shuffle = function(array){
  var m = array.length;
  while (m){
    let i = Math.floor(Math.random() * m--);
    let t = array[m];
    array[m] = array[i];
    array[i]=t;
  }
  return array;
};
// 6. 数组中最小值
LibArrays.prototype.min = function(arr){

  var min = arr[0];
  var len = arr.length;
  for ( var i = 1; i < len; i++){
    if (arr [i] < min){
      min = arr[i];
    }
  }
  return min;
};
//  7. 数组中最大值
LibArrays.prototype.max = function(arr){
  var max = arr[0];
  var len = arr.length;
  for ( var i = 1; i < len; i++){
    if (arr [i] > max) {
      max = arr[i];
    }
  }
  return max;
};
// 8 . 数组快速排序
LibArrays.prototype.sortQuick = function(arr,bool){
  var middle = arr[0];
  var leftArr = [];
  var rightArr = [];
  if(arr.length < 1){
    return arr ;
  }
  for(let n = 1 ; n < arr.length;n++){
    if(bool){
      if(arr[n] > middle){
        rightArr.push(arr[n])
      }else{
        leftArr.push(arr[n])
      }
    }else{
      if(arr[n] < middle){
        rightArr.push(arr[n])
      }else{
        leftArr.push(arr[n])
      }
    }

  }
  return sort_quick(leftArr).concat(middle,sort_quick(rightArr))
};
// 9. 冒泡排序
LibArrays.prototype.sortBub = function(arr,bool){
  for(let i = 0,l = arr.length;i<l-1;i++) {
    for(let j = i+1;j<l;j++) {
      if(bool){
        if(arr[i]<arr[j]) {
          let tem = arr[i];
          arr[i] = arr[j];
          arr[j] = tem;
        }
      }else{
        if(arr[i]>arr[j]) {
          let tem = arr[i];
          arr[i] = arr[j];
          arr[j] = tem;
        }
      }

    }
  }
  return arr;
};
// 10. 数组对象排序，按某个值
LibArrays.prototype.sortObject = function(arr,key,bool){       // bool true - 升序 false - 降序
  for(var k = 0 ; k < arr.length;k++){
    for(var n = 0 ; n < arr.length-1;n++){
      if(bool){
        if( ( arr[n][key] > arr[n+1][key] )){
          var temp = arr[n];
          arr[n] = arr[n+1];
          arr[n+1] = temp;
        }
      }else{
        if( ( arr[n][key] < arr[n+1][key] )){
          var temp = arr[n];
          arr[n] = arr[n+1];
          arr[n+1] = temp;
        }
      }
    }
  }
  return arr;
};
// 11. 添加到指定角标
LibArrays.prototype.insertIndex = function(sourceArr,index,value)  {
  sourceArr.splice(index,0,value)
};
// 12. 将一个数组插入到指定数组的指定步长位置
LibArrays.prototype.insertTargetArray  = function(sourceArr,targetArr,step){
  for(var n =  0 ; n < targetArr.length ; n ++){
    sourceArr.splice( (n+1)* step + n ,0,targetArr[n] )
  }
  return sourceArr;
};
// 13. 计算数组的全部值
LibArrays.prototype.sum = function(arr,key){
  let sum = 0 ;
  for(let n = 0 ; n < arr.length;n++){
    if(!key){
      sum += arr[n];
    }else{
      sum += arr[n][key];
    }
  }
  return sum ;
};
// 14. 得到数组指定元素的角标
LibArrays.prototype.index = function(ary, fn) {
  if( !is_array(ary) || ary.length == 0 ) return false;
  let index = -1;
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n]);
    if(ret){
      index = n;
      break
    }
  }
  return index
};
// 15. 删除数组中的值
LibArrays.prototype.remove = function(ary,fn){
  if( ary.length == 0 ) return false;
  let arr = [];
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n],n);
    if(!ret){
      arr.push(ary[n])
    }
  }
  return arr
};
// 16. 过滤出需要的数组中的值
LibArrays.prototype.filter = function(ary, fn) {
  if( ary.length == 0 ) return false;
  let arr = [];
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n],n);
    if(ret){
      arr.push(ary[n])
    }
  }
  return arr
};
// 17. 判断数组中是否存在某值
LibArrays.prototype.exit = function(ary, fn) {
  if( ary.length == 0 ) return false;
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n],n);
    if(ret){
      return true
    }
  }
  return false
};

//*************************************************** 2.object方法  ********************************************************/

function LibObjects(){}

// 1 . 创建对象
LibObjects.prototype.create = function (o){
  let newObj = {};
  newObj.call(o);
  newObj.__proto__ = o.prototype;
  return newObj;
};
// 2 . 深拷贝 第一个参数可以是传true 表示可以对维度的拷贝
LibObjects.prototype.extend = function (){
  var valid = {
    isObj:function(o){
      if(Object.prototype.toString.call(o)=="[object Object]"){
        return true ;
      }else{
        let type = this.type(o);
//console.error(‘该数据类型不是：object，当前数据类型为：’+ type ) ;
        return false ;
      }
    },
    isArray:function(o){
      if(Object.prototype.toString.call(o)=="[object Array]"){
        return true ;
      }else{
        let type = this.type(o);
//console.error(‘该数据类型不是：array，当前数据类型为：’+ type ) ;
        return false ;
      }
      //return Array.isArray(val)
    },
    isFunction: function (o) {
      if(Object.prototype.toString.call(o)== '[object Function]'){
        return true ;
      }else{
        let type = this.type(o);
//console.error(‘该数据类型不是：function ,当前数据类型为：’+ type ) ;
        return false ;
      }
    },
    isPlainObject: function( obj ) {
      var class2type = {};
      var getProto = Object.getPrototypeOf;
      var toString = class2type.toString;
      var hasOwn = class2type.hasOwnProperty;
      var fnToString = hasOwn.toString;
      var ObjectFunctionString = fnToString.call( Object );
      var proto, Ctor;
      if ( !obj || toString.call( obj ) !== "[object Object]" ) {
        return false;
      }
      proto = getProto( obj );
      if ( !proto ) {
        return true;
      }
      Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
      return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
    },
    type:function(obj){
// 本地对象、内置对象和宿主对象
//本地对象:Object Function Array String Boolean Number Date RegExp Error EvalError RangeError ReferenceError SyntaxError TypeError URIError
//内置对象:Global Math
//宿主对象: HTMLDivElement HTMLBodyElement Document HTMLDocument
      let local = 'Object Function Array String Boolean Number Date RegExp Error EvalError RangeError ReferenceError SyntaxError TypeError URIError';
      let builtIn = 'Global Math';
      let host = 'HTMLDivElement HTMLBodyElement Document HTMLDocument';
      let classType = {};
      local.split(' ').forEach(function(item,i){
        classType[ '[object ' + item + ']' ] = item.toLowerCase();
      });
      builtIn.split(' ').forEach(function(item,i){
        classType[ '[object ' + item + ']' ] = item.toLowerCase();
      });
      host.split(' ').forEach(function(item,i){
        classType[ '[object ' + item + ']' ] = item.toLowerCase();
      });
//var data=[],a=’123’,b=0,c=true,d={1:23},e=[123],f=function(){},g=null,h=undefined,i=Math,j=/$.+^/,k= new Date(),l= this.$refs.divs,m = new Error(); 例子
      return obj == null ? String( obj ) : classType[ toString.call(obj) ] || 'object';
    }
  };
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[ 0 ] || {},
    i = 1,
    length = arguments.length,
    deep = false;
  if ( typeof target === 'boolean' ) {
    deep = target;
    target = arguments[ i ] || {};
    i++;
  }
  if ( typeof target !== 'object' && !valid.isFunction( target ) ) {
    target = {};
  }
  if ( i === length ) {
    target = this;
    i--;
  }
  for ( ; i < length; i++ ) {
    if ( ( options = arguments[ i ] ) != null ) {
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];
        if ( target === copy ) {continue;}
        if ( deep && copy && ( valid.isPlainObject( copy ) ||
          ( copyIsArray = valid.isArray( copy ) ) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && valid.isArray( src ) ? src : [];
          } else {
            clone = src && valid.isPlainObject( src ) ? src : {};
          }
          target[ name ] =  copy_deep( deep, clone, copy );
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }
  return target;
};
// 3 . 删除对象指定关键词
LibObjects.prototype.remove = function (obj,arr){
  if(Object.prototype.toString.call(o)=="[object Object]"){
    let newObj = {};
    for(let i in obj){
      if(arr.indexOf(1) == -1){
        newObj[i] = obj[i];
      }
    }
  }else{
    return obj;
  }
}
//4 . 合并对象，按前者有的key来合并 - 暂不健全
LibObjects.prototype.copy = function (resource,target){
  if(Object.prototype.toString.call(resource)=="[object Object]" && Object.prototype.toString.call(target)=="[object Object]"){
    let newObj = {};
    for( let o in resource){
      newObj[o] = target[o] ? target[o] : resource[o]
    }
    return newObj
  }else{
    return resource;
  }
}
//5.深拷贝
LibObjects.prototype.deepAssign = function (to, from) {
  for (let key in from) {
    if (!to[key] || typeof to[key] !== 'object') {
      to[key] = from[key]
    } else {
      deepAssign(to[key], from[key])
    }
  }
}


//*************************************************** 3.string方法  ********************************************************/

function LibStrings(){}

//  1. 连接的字符串，变驼峰
LibStrings.prototype.hump = function (str) {
  str = String(str)
  return str.replace(/-(\w)/g, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
};
// 2. 随机生成指定长度的字符串
LibStrings.prototype.random = function  (n){
  let standard = 'abcdefghijklmnopqrstuvwxyz9876543210';
  let len = standard.length;
  let result = '';
  for (let i = 0; i < n; i++) {
    result += standard.charAt(Math.floor(Math.random() * len))
  }
  return result;
};
//  3. 随机生成颜色值 16
LibStrings.prototype.randomColor = function  () {
  return `#${Math.random().toString(16).substr(2, 6)}`;
};
// 4. 转义特殊字符
LibStrings.prototype.escape = function  (str){
  return str.replace(/[.*+?^$|[\](){}\\-]/g, '\\$&');
};
// 5. 将整个字符串转成大写字母
LibStrings.prototype.upper = function  (str){
  return str.toUpperCase();
};
// 6. 将整个字符串转成大写字母
LibStrings.prototype.lower = function  (str){
  return str.toLowerCase();
};
// 7. 返回字符串的一个子串，传入参数是 index -起始位置  i - 长度或结束位置 bool - 是长度还是结束位置
LibStrings.prototype.split = function (str,index,i,bool){
  if(!bool){
    return i ? str.substring(index || 0 ,i) : str.substring(index || 0);
  }else{
    return i ? str.substr(index || 0 ,i) : str.substr(index || 0);
  }
};

//*************************************************** 4.date方法  ********************************************************/

function LibDates(){}

// 2.格式化 - 补0
LibDates.prototype.pad = function(value) {
  return ('00' + value).substr(('' + value).length)
};
// 3.
LibDates.prototype.format_date = function(date, format) {
  const map = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    quarter: Math.floor((date.getMonth() + 3) / 3),
    millisecond: date.getMilliseconds()
  };

  for (const key in map) {
    format = format_type(key, format, map[key])
  }

  return format
};
// 4. 得到当天凌晨时间
LibDates.prototype.getZero = function(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return new Date(year + '/' + month + '/' + day + ' 00:00:00')
};
// 5. 得到当前时间戳
LibDates.prototype.getNow = function() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
};
// 6. 得到指定年指定月的天数
LibDates.prototype.getMonthDays  = function(month, year) {
  let natureMaxDay = 30;
  if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
    natureMaxDay = 31
  } else {
    if (month === 2) {
      natureMaxDay = !year || (!(year % 400) || (!(year % 4) && year % 100)) ? 29 : 28
    }
  }
  return natureMaxDay
};
// 7. 得到时间格式 2012-12-12 02:02:02  自定义格式
LibDates.prototype.format  = function(date,fmt) {
  var o = {
    "M+": date .getMonth() + 1, //月份
    "d+": date .getDate(), //日
    "H+": date .getHours(), //小时
    "m+": date .getMinutes(), //分
    "s+": date .getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date .getMilliseconds() //毫秒
  };
  if ( /(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "" ).substr(4 - RegExp.$1.length));
  for ( var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};
// 8. 得到时间格式 20170509
LibDates.prototype.formatStr  = function(date) {
  var _this = date;
  var year = _this.getFullYear().toString();
  var month =( ( ( _this.getMonth() + 1 )  < 10 ) ?("0"  + ( _this.getMonth() + 1 )  ): _this.getMonth() + 1 ).toString();
  var day = ( ( ( _this.getDate() + 1 )  < 10 ) ?( "0" + ( _this.getDate() + 1 ) ): _this.getDate() + 1 ).toString();
  return year +  month + day;
};
// 9. 得到时间格式 2017年-5月-09日  连接符 自定义
LibDates.prototype.formatDesignJoin  = function(date,concat='-'){
  let da = new Date(date);
  let year = da.getFullYear()+'年';
  let month = pad(da.getMonth()+1)+'月';
  let day = pad(da.getDate()) +'日';
  return [year,month,day].join(concat)
};

//*************************************************** 5.valid方法 ********************************************************/

function LibValids(){}

// 1. 指定长度的字符
LibValids.prototype.isCodeDesign  = function(o,len) {  // bool true  表示多于  false 少于
  let reg =   new RegExp("^\\S{"+len+"}$"); // 字符串拼接
  if(reg.test(o)){
    return true
  }else{
    return false
  }
}

// 2. 指定范围长度的字符
LibValids.prototype.isCodeFixed = function(o,len,bool = false) {  // bool true  表示多于  false 少于
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
LibValids.prototype.isCodeNoSpecial = function(o) {
  let regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
    regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;

  if(regEn.test(o) || regCn.test(o)) {
    return false;
  }
  return true
}

LibValids.prototype.isEmail = function(o){
  return typeof o === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(o)
}

LibValids.prototype.isMobile = function(o){
  return typeof o === 'string' && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(o)
}

LibValids.prototype.isHttp  = function(o){
  return typeof o === 'string' && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(o)
}

LibValids.prototype.isCard = function(code) {
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

LibValids.prototype.isString = function(o){
  if(Object.prototype.toString.call(o)=="[object String]"){
    return  true  ;
  }else{
    let type = this.type(o);
    //console.error('该数据类型不是：string，当前数据类型为：'+ type ) ;
    return false ;
  }
}

// 判断是否是空或全部是空格
LibValids.prototype.isStringEmpty = function(o){

  if(!String(o)) return false;
  if ( o == "" ) return true;
  var regu = "^[ ]+$";
  var re = new RegExp(regu);
  return re.test(o);
}

LibValids.prototype.isEmpty = function(o) {
  // 判断是否是空 空格 null undefined
  if( Null(o) || Undefined(o) || this.isStringEmpty(o) ){
    return true
  }else{
    return false
  }
}

LibValids.prototype.isObject = function(o){
  if(Object.prototype.toString.call(o)=="[object Object]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：object，当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isDate = function(o){
  if(Object.prototype.toString.call(o)=="[object Date]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：object，当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isDateDay = function(o) {
  ////日期格式验证 2016-01-01这种格式
  var pattern = /^[1-9]{1}\d{3}-[0-1]{1}\d{0,1}-[0-1]{1}\d{0,1}/;
  if(pattern.test(o)){
    return true;
  }else{
    return false;
  }
}

LibValids.prototype.isArray = function(o){
  if(Object.prototype.toString.call(o)=="[object Array]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：array，当前数据类型为：'+ type ) ;
    return false ;
  }
  //return Array.isArray(val)
}

LibValids.prototype.isNull = function(o){
  if(Object.prototype.toString.call(o)=="[object Null]"){
    return  true  ;
  }else{
    let type =  type(o);
    console.error('该数据类型不是:null，当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isNumber = function(o) {
  // 判断是真正的数字 不是字符串隐式转化的数字
  if(Object.prototype.toString.call(o)=="[object Number]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：number ，当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isBoolean = function(o) {
  if(Object.prototype.toString.call(o)=="[object Boolean]" ){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：boolean ,当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isFunction = function(o) {
  if(Object.prototype.toString.call(o)=="[object Function]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：function ,当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isUndefined = function(o) {
  if(Object.prototype.toString.call(o)=="[object Undefined]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：undefined,当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.isDocument = function(o){
  if(Object.prototype.toString.call(o)== "[object Document]"|| "[object HTMLDocument]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：document,当前数据类型为：'+ type ) ;
    return false ;
  }
}

LibValids.prototype.Type = function(obj){
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


//*************************************************** 6.scroll方法 ********************************************************/

function LibScrolls(){}

// 1. 防抖
LibScrolls.prototype.debounce = function (func, wait, immediate) {
  let timeout, args, context, timestamp, result;
  return function() {
    context = this;
    args = arguments;
    timestamp = new Date();
    const later = () => {
      const last = (new Date()) - timestamp;
      if (last < wait) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        result = func.apply(context, args);
      }
    };
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
};
// 2. 找到最近的触发滚动事件的元素 @param {Element} element @param {Element} rootElement @return {Element | window}
LibScrolls.prototype.getScrollEventTarget = function (element, rootParent = window) {
  let currentNode = element;
  // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
    const overflowY = this.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return rootParent;
};
// 3. 判断元素是否被加入到页面节点内
LibScrolls.prototype.isAttached = function (element) {
  let currentNode = element.parentNode;
  while (currentNode) {
    if (currentNode.tagName === 'HTML') {
      return true;
    }
    if (currentNode.nodeType === 11) {
      return false;
    }
    currentNode = currentNode.parentNode;
  }
  return false;
};
// 4. 获取滚动高度
LibScrolls.prototype.getScrollTop = function (element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
};
// 5. 设置滚动高度
LibScrolls.prototype.setScrollTop = function (element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
};
// 6. 获取元素距离顶部高度
LibScrolls.prototype.getElementTop = function (element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window);
};
// 7.获得元素的可见高度
LibScrolls.prototype.getVisibleHeight = function (element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
};

//*************************************************** 7.原生dom方法 ********************************************************/

function LibDoms(){}

// 1. 判断是否是dom原生节点
LibDoms.prototype.isElementDom  = function(obj){
  return !!(obj && obj.nodeType == 1);
};
// 2.  判断元素是否有该类名;
LibDoms.prototype.hasClass  = function(ele, className) {
  if (!ele.className) {
    return false;
  } else {
    let  arr = ele.className.split(" ");
    return arr.includes(className);
  }
};
// 3. 添加样式类
LibDoms.prototype.addClass  = function(ele, newClassName) {   // 为dom添加一个class类名
  ele.classList.add(newClassName);
};
// 4. 删除样式类
LibDoms.prototype.removeClass  = function(ele, oldClassName) {
  ele.classList.remove(oldClassName);
};
// 5. 通过类得到元素
LibDoms.prototype.getElementsByClass  = function(className, parent) {
  if (typeof className != "string") return false;
  var result = [],
    eles;
  parent ? eles = parent.getElementsByTagName("*") : eles = document.getElementsByTagName("*");
  for (var i = 0, len = eles.length; i < len; i++) {
    var arr = eles[i].className.split(" ");
    for (var j = 0, leng = arr.length; j < leng; j++) {
      if (arr[j] == className) {
        result.push(eles[i]);
      }
    }
  }
  return result;
};
// 6. 增加属性值或者获取属性值
LibDoms.prototype.attr  = function(ele, name, value) {
  if (value) {
    ele.setAttribute(name, value);
  } else {
    var attrName = ele.getAttribute(name);
    return attrName;
  }
};
// 7. 为元素添加样式
LibDoms.prototype.setStyle  = function(ele, obj) {
  if (getType(obj) != "Object") return false;
  for (var item in obj) {
    ele["style"][item] = obj[item];
  }
};
// 8. 绑定事件
LibDoms.prototype.on  = function(ele, type, handler) {
  eventUtil.addHandler(ele, type, handler);
};
// 9. 获取dom位置(元素各边距离页面上和左边的距离)
LibDoms.prototype.getPosition  = function(ele) {
  var box = ele.getBoundingClientRect();
  return {
    top: box.top, // 元素上边距离页面上边的距离
    left: box.left, // 元素左边距离页面左边的距离
    right: box.right, // 元素右边距离页面左边的距离
    bottom: box.bottom
  }
};
// 10. 得到元素的宽高
LibDoms.prototype.getOffset  = function(ele){
  return {
    height:ele.offsetHeight,
    width:ele.offsetWidth
  }
};
// 11 . 得到窗口的宽 高
LibDoms.prototype.getWindowOffset  = function(ele) {
  // 获取窗口宽度
  let obj = {}
  if (window.innerWidth)
    obj.winWidth = window.innerWidth;
  else if ((document.body) && (document.body.clientWidth))
    obj.winWidth = document.body.clientWidth;
  // 获取窗口高度
  if (window.innerHeight)
    obj.winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    obj.winHeight = document.body.clientHeight;
  // 通过深入 Document 内部对 body 进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
  {
    obj.winHeight = document.documentElement.clientHeight;
    obj.winWidth = document.documentElement.clientWidth;
  }
  return obj
};
//12. 得到元素滚动距离
LibDoms.prototype.getScrollTop  = function(ele) {
  var scrollPos;
  if (window.pageYOffset) {
    scrollPos = window.pageYOffset;
  } else if (document.compatMode && document.compatMode != 'BackCompat') {
    scrollPos = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollPos = document.body.scrollTop;
  }
  return scrollPos;
};
//13.滚动到最低 还是最高
LibDoms.prototype.scrollView  = function(ele,position = false) {
  ele.scrollIntoView(position)
};
//14.绑定滚动事件
LibDoms.prototype.onScroll = function(myHandler){
  if (window.onscroll === null) {
    window.onscroll = myHandler
  } else if (typeof window.onscroll === 'function') {
    var oldHandler = window.onscroll;
    window.onscroll = function () {
      myHandler();
      oldHandler();
    }
  }
}
//15 清除绑定滚动事件
LibDoms.prototype.offScroll = function(){
  window.onscroll=''
}

//16.获取元素距离整个文档流的顶部距离
LibDoms.prototype.getOffsetTop = function(el){
  return el.offsetTop
}

//*************************************************** 8.http方法 ********************************************************/

function LibHttps(){}

LibHttps.prototype.query = function(http) {
  let obj ={};
  let str= http;
  let num=str.indexOf("?");
  str=str.substr(num + 1);
  let arr=str.split("&");
  for(let i = 0 ; i < arr.length;i++ ){
    num=arr[i].indexOf("=");
    if(num>0){
      obj[arr[i].substring(0,num)] = decodeURI(arr[i].substr(num+1));
    }
  }
  return obj;
};

//*************************************************** 9.number方法 ********************************************************/

function LibNumber(){}

// 1. 判断是否是整数
LibNumber.prototype.isInt =function(value){
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
// 2. 移出小数部分
LibNumber.prototype.getClearDecimal =function(val) {
  // 移出小数部分
  return isNaN(parseInt(val)) ? false :~~val;
}
// 3. 格式化千位数
LibNumber.prototype.getFormatThousand =function(value){
  var result = "";
  if(isNumberExpress(value)){
    return '不是数字'
  }
  //将证书部分和小数部分分开
  var valueParts = value.toString().split(".");
  var mostSignificationDigit = valueParts[0].length -1;   // 最高有效数字位，默认为个位
  var intervalOfDigit = 0;    // 逗号之间的位数（从零累计）
  var digit, countOfSignificationDigit;

  //按位取出整数部分的值
  //如果不加下面这句话，低版本浏览器可能无法处理整数部分
  var roundNum = valueParts[0].split("");

  for (var i = valueParts[0].length -1; i >= 0; i--) {
    digit = roundNum[i];
    result = digit + result;
    if (digit != "0") {
      mostSignificationDigit = i;
    }
    //每三位添加逗号
    if (3 == ++intervalOfDigit) {
      result = "," + result;
      intervalOfDigit = 0;
    }
    //alert(digit);
    //alert(result);
  }
  if (mostSignificationDigit == -1) {
    result = "0";
  }
  else {
    countOfSignificationDigit = valueParts[0].length - mostSignificationDigit;
    if (countOfSignificationDigit > 3) {
      result = result.substring(result.length - (countOfSignificationDigit%3 == 0 ? countOfSignificationDigit/3 - 1 : countOfSignificationDigit/3)  - countOfSignificationDigit);
    }
    else {
      result = result.substring(result.length - countOfSignificationDigit);
    }
  }
  if (valueParts.length == 2) {
    result += ".";
    var temp = 2 - valueParts[1].length;    // 是否需要补0
    for (var i = 0; i < temp; i++) {
      valueParts[1] += "0"
    }
    result += valueParts[1].substring(0, 2);
  }
  else {
    result += ".00";
  }
  return result;
}
// 4. + 加法
LibNumber.prototype.getPlus =function(a,b) {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), ( getMulti(a, e) +  getMulti(b, e)) / e;
}
// 5. 减法
LibNumber.prototype.getMinus =function(a,b) {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (getMulti(a, e) -  getMulti(b, e)) / e;
}
// 6. 乘法
LibNumber.prototype.getMulti =function(a,b){
  var c = 0,
    d = a.toString(),
    e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {}
  try {
    c += e.split(".")[1].length;
  } catch (f) {}
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
// 7. 除法
LibNumber.prototype.getDivision =function(a,b) {
  var c, d, e = 0,
    f = 0;
  try {
    e = a.toString().split(".")[1].length;
  } catch (g) {}
  try {
    f = b.toString().split(".")[1].length;
  } catch (g) {}
  return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")),  getMulti(c / d, Math.pow(10, f - e));
}
// 8. 判断是否是数字
LibNumber.prototype.isNumber =function(o) {
  // 判断是真正的数字 不是字符串隐式转化的数字
  if(Object.prototype.toString.call(o)=="[object Number]"){
    return  true  ;
  }else{
    let type = type(o);
    console.error('该数据类型不是：number ，当前数据类型为：'+ type ) ;
    return false ;
  }
}
// 9. 判断是否是数字 可以是字符串隐式转化的数字
LibNumber.prototype.isNumberExpress =function(o){
  var pattern = /^[0-9]+.?[0-9]*$/;  ///^[0-9]$/; // !isNaN(Number(o))
  var bool =  pattern.test(o);
  if(bool){
    return  true;
  }else{
    //console.error('该数据类型不是：number or string ,当前数据类型为：'+ type ) ;
    return false ;
  }
}
// 10. 判断是否是正整数
LibNumber.prototype.isNumberIntegerPositive =function(o){
  if( is_int(o) && o > 0){
    return  true  ;
  }else{
    return false ;
  }
}
// 11. 判断是否是整数 可以是字符串隐式转化的数字
LibNumber.prototype.isNumberExpressInteger =function(o){

  let obj = Number(o);
  let bool =  typeof obj === 'number' && isFinite(obj) && Math.floor(obj) === obj;
  if( bool ){
    return  true  ;
  }else{
    return false ;
  }
}
// 12 . 判断是否是正整数 不可以是字符串隐式转化的数字
LibNumber.prototype.isNumberExpressIntegerPositive =function(o){
  if(  isNumberExpressInteger(o) && o > 0){
    return  true  ;
  }else{
    return false ;
  }
}
// 13 . 验证整数 小数点一位 两位
LibNumber.prototype.isNumberMoney =function(o){
  let pattern = /^\d+(\.\d{1,2})?$/;
  return pattern.test(o)
}

//*************************************************** 10.image方法 ********************************************************/

function LibImages(){}

// 1. 得到二进制的图片格式
LibImages.prototype.getBlob = function (file){
  let  url = null ;
  if (window.createObjectURL!=undefined) { // basic
    url = window.createObjectURL(file) ;
  } else if (window.URL!=undefined) { // mozilla(firefox)
    url = window.URL.createObjectURL(file) ;
  } else if (window.webkitURL!=undefined) { // webkit or chrome
    url = window.webkitURL.createObjectURL(file) ;
  }
  return url ;
}
// 2. 修改图片的大小
LibImages.prototype.updateSize = function ( imgFile,compressWidth =  200  ){
  if(imgFile.width > compressWidth ) {
    let scaling = 1-( imgFile.width- compressWidth)/imgFile.width;
    imgFile.width = imgFile.width * scaling;
    imgFile.height = imgFile.height * scaling;
  }
  return imgFile;
}
// 3. 得到base64图片格式
LibImages.prototype.getBase64 = function (img,prop = 0.7 , size ){
  let canvas = document.createElement("canvas");
  if(size){
    img =  updateSize( img,size )
  }
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
  let dataUrl = canvas.toDataURL("image/jpeg",prop);
  ctx.clearRect( 0, 0, img.width, img.height);
  return dataUrl;
}
// 4. 得到压缩图片格式 返回的是base64数据格式
LibImages.prototype.getCompress = function ({type='file',value,prop = 0.7,size}){
  if(!value) return ;
  return new Promise((resolve,reject)=>{

    let img = value;
    if(type == 'file'){
      img = this.getBlob(value);
    }

    var image = new Image();
    image.src = img;
    image.onload =  () => {
      let dataUrl = getBase64(img,prop,size);
      resolve(dataUrl);
    };
    image.error = function(){
      console.log('图片压缩失败');
      reject('图片压缩失败');
    }
  })

}
// 5. 得到pc端的图片，传的参 是通过input file 选择的图片文件
LibImages.prototype.getBase64PC = function (file){
  return new Promise((resolve,reject)=>{
    let reader = new FileReader();
    reader.onload = function() {
      let img = new Image();
      img.src = reader.result;
      img.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();
        let dataUrl = canvas.toDataURL("image/jpeg",1);
        ctx.clearRect( 0, 0, img.width, img.height);
        resolve(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  })
}

//*************************************************** 11.storage工具 ********************************************************/

function LibStorages(){}

LibStorages.prototype.set = function (key,value){
  localStorage.setItem(key,JSON.stringify(value));
};
LibStorages.prototype.get = function (key){
  return JSON.parse(localStorage.getItem(key));
};
LibStorages.prototype.remove = function (key){
  localStorage.removeItem(key);
};
LibStorages.prototype.clear = function (){
  localStorage.clear();
};

//*************************************************** 12.基础工具 ********************************************************/

function LibUtils(){}

//1.判断对象是否存在某个字段
LibUtils.prototype.hasOwn = function (obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
};
// 2.时间格式化
LibUtils.prototype.toLocaleDateString = function (timestamp, locale) {
  const date = new Date(timestamp);

  if (locale === 'zh') {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  } else {
    return date.toDateString()
  }
};
// 3.得到微信内置浏览器的类型
LibUtils.prototype.browserType = function (){
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if(isAndroid) {
    return 'android';
  }
  if(isiOS){
    return 'ios';
  }
};
//4.数字变中文
LibUtils.prototype.SectionToChinese = function(section){
  var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
  var chnUnitSection = ["","万","亿","万亿","亿亿"];
  var chnUnitChar = ["","十","百","千"];

  var strIns = '', chnStr = '';
  var unitPos = 0;
  var zero = true;
  while(section > 0){
    var v = section % 10;
    if(v === 0){
      if(!zero){
        zero = true;
        chnStr = chnNumChar[v] + chnStr;
      }
    }else{
      zero = false;
      strIns = chnNumChar[v];
      strIns += chnUnitChar[unitPos];
      chnStr = strIns + chnStr;
    }
    unitPos++;
    section = Math.floor(section / 10);
  }
  return chnStr;
}


window.Arrays = new LibArrays();
window.Dates = new LibDates();
window.Doms = new LibDoms();
window.Https = new LibHttps();
window.Images = new LibImages();
window.Numbers = new LibNumber();
window.Objects = new LibObjects();
window.Scrolls = new LibScrolls();
window.Storages = new LibStorages();
window.Strings = new LibStrings();
window.Utils = new LibUtils();
window.Valids = new LibValids();
