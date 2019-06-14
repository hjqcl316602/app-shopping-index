
// 1. 得到地址参数
export  function query(http) {
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
}
