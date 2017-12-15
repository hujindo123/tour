<template>
  <div class="footer vux-1px-t">
    <router-link to="/main">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/action/0">
      <i class="iconfont  icon-reqiqiu"></i>
      <span>活动</span>
    </router-link>
    <div class="a_r" @click="show=true">
      <i class="iconfont icon-jiahao"></i>
      <span>发起</span>
    </div>
    <router-link to="/place">
      <i class="iconfont  icon-mudedi"></i>
      <span>目的地</span>
    </router-link>
    <router-link to="/user">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
    <actionsheet v-model="show" :menus="menus" @on-click-menu="click"></actionsheet>
  </div>
</template>

<script>
  import {Tabbar, TabbarItem, Actionsheet} from 'vux';
  export default {
    data () {
      return {
        show: false,
        menus: ['发起活动',  '取消']
      }
    },
    components: {
      TabbarItem,
      Tabbar,
      Actionsheet
    },
    methods: {
      click (key, item) {
        if (key === 0) {
          this.$router.push('/setAction');
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../style/mixin";

  .footer {
    @include wh(100%, 50px);
    padding: 5px 0;
    background: #f8fafc;
    box-sizing: border-box;
    display: flex;
    flex-flow: row;
    a, .a_r {
      flex: 1;
      @include sc(15px, rgba(77, 77, 77, 1));
      text-decoration: none;
      text-align: center;
      @include fj(center);
      display: flex;
      flex-flow: column;
      i {
        @include sc(18px, #999999);
        &.icon-jiahao{
          color: $fc;
        }
      }
      span {
        @include sc(12px, #999999);
      }
    }
    .weui-actionsheet__cell {
      @include sc(15px, rgba(77, 77, 77, 1));
      padding: 15px 0;
    }

  }


</style>
