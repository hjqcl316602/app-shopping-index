import Vue from 'vue'
import Router from 'vue-router'
import Routes from './vue.router.routes'
import store from '../views/store'
Vue.use(Router);


const router = new Router({

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: Routes
})

router.beforeEach( ( to, from, next ) => {
  document.title = to.meta.title ? to.meta.title :'贝斯特链平台';
  next()

});

export default router
