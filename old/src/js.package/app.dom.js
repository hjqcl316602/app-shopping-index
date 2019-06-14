
// 1. 判断是否是dom原生节点
export function isElementDom (obj){
        return !!(obj && obj.nodeType == 1);
}

// 2.  判断元素是否有该类名;
export function hasClass (ele, className) {
        if (!ele.className) {
                return false;
        } else {
                let  arr = ele.className.split(" ");
                return arr.includes(className);
        }
}

// 3. 添加样式类
export function  addClass (ele, newClassName) {   // 为dom添加一个class类名
        ele.classList.add(newClassName);
}

// 4. 删除样式类
export function  removeClass (ele, oldClassName) {
        ele.classList.remove(oldClassName);
}

// 5. 通过类得到元素
export function  getElementsByClass (className, parent) {
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
}

// 6. 增加属性值或者获取属性值
export function  attr (ele, name, value) {
        if (value) {
                ele.setAttribute(name, value);
        } else {
                var attrName = ele.getAttribute(name);
                return attrName;
        }
}

// 7. 为元素添加样式
export function  setStyle (ele, obj) {
        if (getType(obj) != "Object") return false;
        for (var item in obj) {
                ele["style"][item] = obj[item];
        }
}

// 8. 绑定事件
export function  on (ele, type, handler) {
        eventUtil.addHandler(ele, type, handler);
}

// 9. 获取dom位置(元素各边距离页面上和左边的距离)
export function  getPosition (ele) {
        var box = ele.getBoundingClientRect();
        return {
                top: box.top, // 元素上边距离页面上边的距离
                left: box.left, // 元素左边距离页面左边的距离
                right: box.right, // 元素右边距离页面左边的距离
                bottom: box.bottom
        }
}

// 10. 得到元素的宽高
export function  getOffset (ele){
        return {
                height:ele.offsetHeight,
                width:ele.offsetWidth
        }
}

// 11 . 得到窗口的宽 高
export function  getWindowOffset (ele) {
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
}

//12. 得到元素滚动距离
export function  getScrollTop (ele) {
        var scrollPos;
        if (window.pageYOffset) {
                scrollPos = window.pageYOffset;
        } else if (document.compatMode && document.compatMode != 'BackCompat') {
                scrollPos = document.documentElement.scrollTop;
        } else if (document.body) {
                scrollPos = document.body.scrollTop;
        }
        return scrollPos;
}

//13.滚动到最低 还是最高
export function  scrollView (ele,position = false) {
        ele.scrollIntoView(position)
}
//14 绑定滚动事件
export function onScroll(myHandler){
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
export function offScroll(){
  window.onscroll=''
}

// 获取元素距离整个文档流的顶部距离
export function getOffsetTop(el){
  return el.offsetTop
}
