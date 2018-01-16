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
import message from 'src/page/message/message';
import details from 'src/page/action/details';
import index from 'src/page/index/index';
export default new Router({
  mode,
  routes: [
    {
      path: '/',
      name: '主页',
      component: index,
      redirect: '/main',
      children: [
        {
          path: '/main',
          name: '首页',
          component: resolve => {
            require(['src/page/index/main'], resolve)
          },
        },
        {
          path: '/action/:typeName',
          name: '活动',
          component: resolve => {
            require(['src/page/index/action'], resolve)
          },
        },
        {
          path: '/place',
          name: '目的地',
          component: resolve => {
            require(['src/page/index/place'], resolve)
          },
        },
        {
          path: '/user',
          name: '用户中心',
          component: user
        },
      ]
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
      path: '/joinAction',
      name: '报名',
      component: function (resolve) {
        require(['src/page/joinAction/join'], resolve)
      }
    },
    {
      path: '/joinSucess/:type', //0为发起 1为参加
      name: '报名成功',
      component: function (resolve) {
        require(['src/page/joinSucess/joinSucess'], resolve)
      }
    },
    {
      path: '/third',
      name: '绑定手机',
      component: third
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
      path: '/message',
      name: '消息中心',
      component: message
    },
    {
      path: '/search',
      name: '搜索',
      component: resolve => {
        require(['src/page/search/search'], resolve)
      }
    },
    {
      path: '/setAction',
      name: '发起活动',
      component: resolve => {
        require(['src/page/action/setAction'], resolve)
      }
    },
    {
      path: '/details',
      name: '活动详情',
      component: resolve => {
        require(['src/page/action/details'], resolve)
      }
    },
    {
      path: '/follow',
      name: '关注',
      component: resolve => {
        require(['src/page/user/follow'], resolve)
      }
    },
    {
      path: '/fans',
      name: '粉丝',
      component: resolve => {
        require(['src/page/user/fans'], resolve)
      }
    },
    {
      path: '/friend',
      name: '朋友主页',
      component: resolve => {
        require(['src/page/user/friend'], resolve)
      }
    },
    {
      path: '/comment',
      name: '评论列表',
      component: resolve => {
        require(['src/page/action/comment'], resolve)
      }
    },
    {
      path: '/myAction',
      name: '个人中心--->我的活动',
      component: resolve => {
        require(['src/page/user/myAction'], resolve)
      }
    },
    {
      path: '/myComment',
      name: '个人中心--->我的评论',
      component: resolve => {
        require(['src/page/user/myComment'], resolve)
      }
    },
    {
      path: '/a',
      name: '测试',
      component: function (resolve) {
        require(['src/components/HelloFromVux'], resolve)
      }
    },
  ]
})
