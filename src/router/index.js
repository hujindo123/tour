import Vue from 'vue'
import Router from 'vue-router'
import { WechatPlugin } from 'vux'

Vue.use(Router);
Vue.use(WechatPlugin);//console.log(Vue.wechat) // 可以直接访问 wx 对象。 this.$wechat

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: function (resolve) {
        require(['src/components/HelloWorld'], resolve)
      }
    },
    {
      path: '/a',
      name: 'HelloWorlds',
      component: function (resolve) {
        require(['src/components/HelloFromVux'], resolve)
      }
    }
  ]
})
