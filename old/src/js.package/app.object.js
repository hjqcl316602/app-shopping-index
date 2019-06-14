
// 1 . 创建对象
export function create(o){
  let newObj = {};
  newObj.call(o);
  newObj.__proto__ = o.prototype;
  return newObj;
};

// 2 . 深拷贝 第一个参数可以是传true 表示可以对维度的拷贝
export function extend(){
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
export function remove(obj,arr){
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
export function  copy(resource,target){
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
export function deepAssign(to, from) {
  for (let key in from) {
    if (!to[key] || typeof to[key] !== 'object') {
      to[key] = from[key]
    } else {
      deepAssign(to[key], from[key])
    }
  }
}
