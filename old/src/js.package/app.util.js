
/*********************************************** tiny-cookie 拿过来的 *****************************************************/

// 1. 判断对象是否存在某个字段
export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// 2  时间格式化
export function toLocaleDateString(timestamp, locale) {
  const date = new Date(timestamp);

  if (locale === 'zh') {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  } else {
    return date.toDateString()
  }
}
// 3. 得到微信内置浏览器的类型
export function browserType(){
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if(isAndroid) {
    return 'android';
  }
  if(isiOS){
    return 'ios';
  }
}


