
//1. 判断是否是数组
export function isArray(o){
  if(Object.prototype.toString.call(o)=="[object Array]"){
    return  true  ;
  }else{
    return false ;
  }
  //return Array.isArray(val)
}

// 2. 得到从数字之间的数组 0 - 100
export function numbers(min,max){
  let arr = [];
  for(var k = min ; k < max + 1 ;k++){
    arr.push(k)
  }
  return arr;
}

// 3. 得到固定长度的某范围内的数组，不重复
export function roundRepeatNo(min,max,n){

  var newArr = [];
  var arr  = numbers(min,max);
  for(var i = 0 ; i < n ; i++){
    let round = Math.round(Math.random()*(max-min-i));
    newArr.push(arr[round]);
    arr = this.slice(arr,arr[round]);
  }
  return newArr;
}

// 4. 数组置换
export function transpose(arr1){
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
}

// 5. 乱序数组的方法，sort废弃，有问题，不完全随机
export function  shuffle(array){
  var m = array.length;
  while (m){
    let i = Math.floor(Math.random() * m--);
    let t = array[m];
    array[m] = array[i];
    array[i]=t;
  }
  return array;
}

// 6. 数组中最小值
export function min(arr){

  var min = arr[0];
  var len = arr.length;
  for ( var i = 1; i < len; i++){
    if (arr [i] < min){
      min = arr[i];
    }
  }
  return min;
}

//  7. 数组中最大值
export function max(arr){
  var max = arr[0];
  var len = arr.length;
  for ( var i = 1; i < len; i++){
    if (arr [i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// 8 . 数组快速排序
export function sortQuick(arr,bool){
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
}

// 9. 冒泡排序
export function sortBub(arr,bool){
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
}

// 10. 数组对象排序，按某个值
export function sortObject(arr,key,bool){       // bool true - 升序 false - 降序
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
}

// 11. 添加到指定角标
export function insertIndex(sourceArr,index,value)  {
  sourceArr.splice(index,0,value)
}

// 12. 将一个数组插入到指定数组的指定步长位置
export function insertTargetArray (sourceArr,targetArr,step){
  for(var n =  0 ; n < targetArr.length ; n ++){
    sourceArr.splice( (n+1)* step + n ,0,targetArr[n] )
  }
  return sourceArr;
}

// 13. 计算数组的全部值
export function sum(arr,key){
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
export function index(ary, fn) {
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
}

// 15. 删除数组中的值
export function remove(ary,fn){
  if( ary.length == 0 ) return false;
  let arr = [];
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n],n);
    if(!ret){
      arr.push(ary[n])
    }
  }
  return arr
}

// 16. 过滤出需要的数组中的值
export function filter(ary, fn) {
  if( ary.length == 0 ) return false;
  let arr = [];
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n],n);
    if(ret){
      arr.push(ary[n])
    }
  }
  return arr
}

// 17. 判断数组中是否存在某值
export function exit(ary, fn) {
  if( ary.length == 0 ) return false;
  for( var n = 0 ; n < ary.length ;n++){
    let ret = fn.call(this,ary[n],n);
    if(ret){
      return true
    }
  }
  return false
}



