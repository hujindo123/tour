import Vue from 'vue'
import Router from 'vue-router'
import {WechatPlugin} from 'vux'
import {mode} from 'src/config/env';
Vue.use(Router);
Vue.use(WechatPlugin);//console.log(Vue.wechat) // 可以直接访问 wx 对象。 this.$wechat
import login from 'src/page/login/login';
import register from 'src/page/register/register';
import third from 'src/page/third/third';
import user from 'src/page/user/user';
import editorUserMessage from 'src/page/user/editorUserMessage';
import updatePhone from 'src/page/user/updatePhone';
import introduce from 'src/page/user/introduce';

export default new Router({
  mode,
  routes: [
    {
      path: '/',
      name: '主页',
      component: resolve => {
        require(['src/components/HelloWorld'], resolve)
      }
    },
    {
      path: '/login',
      name: '登录',
      component: login
      /* resolve => {
       require(['src/page/login/login'], resolve)*/
    },
    {
      path: '/register',
      name: '注册',
      component: register
    },
    {
      path: '/third',
      name: '绑定手机',
      component: third
    },
    {
      path: '/user',
      name: '用户中心',
      component: user
    },
    {
      path: '/editorUserMessage',
      name: '编辑个人信息',
      component: editorUserMessage
    },
    {
      path: '/updatePhone',
      name: '修改电话号码',
      component: updatePhone
    },
    {
      path: '/introduce',
      name: '自我介绍信息',
      component: introduce
    },
    {
      path: '/a',
      name: '测试',
      component: function (resolve) {
        require(['src/components/HelloFromVux'], resolve)
      }
    }
  ]
})
