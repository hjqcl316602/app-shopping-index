/**
 * Created by 41587 on 2018/8/14.
 */
import * as $arrays from '../js.package/app.array'
import * as $cookies from '../js.package/app.cookie'
import * as $dates from '../js.package/app.date'
import * as $doms from '../js.package/app.dom'
import * as $https from '../js.package/app.http'
import * as $images from '../js.package/app.image'
import * as $numbers from '../js.package/app.number'
import * as $objects from '../js.package/app.object'
import * as $scrolls from '../js.package/app.scroll'
import * as $storages from '../js.package/app.storage'
import * as $strings from '../js.package/app.string'
import * as $utils from '../js.package/app.util'

import * as $configs from './vue.config'

export  default {
  install: function (Vue) {
    Object.defineProperty( Vue.prototype,'$configs', { value : $configs } );

    Object.defineProperty( Vue.prototype,'$arrays', { value : $arrays } );
    Object.defineProperty( Vue.prototype,'$cookies', { value : $cookies } );
    Object.defineProperty( Vue.prototype,'$dates', { value : $dates } );
    Object.defineProperty( Vue.prototype,'$doms', { value : $doms } );
    Object.defineProperty( Vue.prototype,'$https', { value : $https } );
    Object.defineProperty( Vue.prototype,'$images', { value : $images } );
    Object.defineProperty( Vue.prototype,'$numbers', { value : $numbers } );
    Object.defineProperty( Vue.prototype,'$objects', { value : $objects } );
    Object.defineProperty( Vue.prototype,'$scrolls', { value : $scrolls } );
    Object.defineProperty( Vue.prototype,'$storages', { value : $storages } );
    Object.defineProperty( Vue.prototype,'$strings', { value : $strings } );
    Object.defineProperty( Vue.prototype,'$utils', { value : $utils } );
  }
}
