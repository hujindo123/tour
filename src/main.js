// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from 'src/router/index'
import store from './store/index'

router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', {isLoading: true});
  next()
});

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
});

/*FastClick.attach(document.body)*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
