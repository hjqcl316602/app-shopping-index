
import Vue from 'vue'
//************************************************ vue 编程式组件的绑定 *******************************************************/
import createPlugin from '../js.utils/create.api';
import {  VaLoading ,VaTip , VaConfirm  } from '../views/component'
createPlugin(Vue, VaLoading, ['click'], true);
createPlugin(Vue, VaTip, ['click'], true);
createPlugin(Vue, VaConfirm, ['cancel', 'ok'], true);
/*使用方法
 this.$createLoading().show()
 this.$createConfirm({
 title:'',
 message:'sdsd',
 onOk:()=>{
 console.log('ok')
 }
 }).show();*/
