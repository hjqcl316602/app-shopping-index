
// 1. 判断是否是整数
export function isInt(value){
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

// 2. 移出小数部分
export function getClearDecimal(val) {
  // 移出小数部分
  return isNaN(parseInt(val)) ? false :~~val;
}

// 3. 格式化千位数
export function getFormatThousand(value){
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
export function getPlus(a,b) {
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
export function getMinus(a,b) {
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
export function getMulti(a,b){
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
export function getDivision(a,b) {
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

// 9. 判断是否是数字 可以是字符串隐式转化的数字
export function isNumberExpress(o){
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
export function isNumberIntegerPositive(o){
  if( is_int(o) && o > 0){
    return  true  ;
  }else{
    return false ;
  }
}

// 11. 判断是否是整数 可以是字符串隐式转化的数字
export function isNumberExpressInteger(o){

  let obj = Number(o);
  let bool =  typeof obj === 'number' && isFinite(obj) && Math.floor(obj) === obj;
  if( bool ){
    return  true  ;
  }else{
    return false ;
  }
}

// 12 . 判断是否是正整数 不可以是字符串隐式转化的数字
export function isNumberExpressIntegerPositive(o){
  if(  isNumberExpressInteger(o) && o > 0){
    return  true  ;
  }else{
    return false ;
  }
}

// 13 . 验证整数 小数点一位 两位
export function isNumberMoney(o){
  let pattern = /^\d+(\.\d{1,2})?$/;
  return pattern.test(o)
}
