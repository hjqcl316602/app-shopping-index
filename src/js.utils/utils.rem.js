import { getWindowOffset } from '../js.package/app.dom'

// 根据设计图 750的宽度  除以100 即可设置  如果是480的设计图，则signWidth设置480/100 即可 ，真实的宽度则按设计图的宽度 36/100 rem 即可
// 主要作用于 等比缩放的场景，比如图片的等比缩放的场景 ，一般布局就弹性布局即可
(function flexible (window, document) {
  var signWidth = 750 / 100;
  var docEl = document.documentElement;

  function  setRemUnit(){
    var rem = getWindowOffset().winWidth / signWidth;
    docEl.style.fontSize = rem + 'px';
  }
  setRemUnit();
  window.addEventListener('resize', setRemUnit);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  });
}(window, document));
