export  function set(name,value,day) {
  var exp = new Date();
  exp.setTime(exp.getTime() + day*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

export  function get(name) {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

export  function remove(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval =get(name);
  if(cval!=null)
    document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

